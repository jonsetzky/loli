import { fetchLCU, useLCUWatch } from "@/hooks/updatableContent";
import React, { useEffect, useState } from "react";
import { ErrorPage } from "../ErrorPage";
import champions from "@/assets/champion.json";
import { cancelCustomGameChampSelect } from "@/api/lobby/customGame";
import * as lcu from "loli-lcu-api";
import { sortText } from "@/util";
import championData from "@/assets/dragontail/data/en_GB/champion.json";
import summonerSpellData from "@/assets/dragontail/data/en_GB/summoner.json";
import { AssetSprite } from "../common/AssetSprite";

const getChampionIconId = (id: number) => {
  return Object.values(champions.data).find((c) => c.key === String(id))
    ?.id as string;
};

export const ChampSelect = () => {
  const session = useLCUWatch(lcu.champ_select.getSession, console.error);
  const lobby = useLCUWatch(lcu.lobby.getLobby, console.error);
  const champSelectInventory = useLCUWatch(
    lcu.inventory.getInventoryByInventoryType,
    console.error,
    "CHAMPION"
  );
  const [championMastery, setChampionMastery] = useState<
    lcu.LolChampionMasteryChampionMastery[] | null
  >();

  const [selectedChampion, setSelectedChampion] = useState<number | null>(null);
  const [me, setMe] =
    useState<lcu.TeamBuilderDirectChampSelectPlayerSelection | null>(null);

  useEffect(() => {
    // console.log(session);
    if (!session) return;
    const me = session?.myTeam.find(
      (m) => m.cellId === session.localPlayerCellId
    );
    if (!me) {
      setMe(null);
      return;
    }
    setMe(me);

    fetchLCU(lcu.champion_mastery.local_player.getChampionMastery)
      .get()
      .then((cm) => {
        console.log("mastery", cm);
        setChampionMastery(cm);
      });
  }, [session]);

  // championMastery[0];
  const hoverChampion = (id: number, lockIn: boolean = false) => {
    console.log("trying to hover", id);

    if (!session) return;
    const pickAction: lcu.LolChampSelectLegacyChampSelectAction = (
      session.actions[0] as any
    ).find(
      (a: lcu.LolChampSelectLegacyChampSelectAction) =>
        a?.type === "pick" && a?.actorCellId === session.localPlayerCellId
    );

    console.log(pickAction);
    fetchLCU(lcu.champ_select.session.patchActionsById, pickAction.id, {
      ...pickAction,
      championId: id,
      completed: lockIn,
      duration: 0,
    })
      .get()
      .then((v: any) => console.log("got ", v))
      .catch((v: any) => console.log("got err ", v));
  };

  const allGridChamps = useLCUWatch(
    lcu.champ_select.getAllGridChampions,
    console.error
  );

  const pickableChampions = useLCUWatch(
    lcu.champ_select.getPickableChampionIds,
    console.error
  );

  const [timeLeft, setTimeLeft] = useState(0);

  let hovering = false;
  useEffect(() => {
    if (!session || hovering) return;

    const me = session.myTeam.find(
      (m) => m.cellId === session.localPlayerCellId
    );
    if (me === undefined) return;

    // update selected champion display
    if (me.championId !== 0) {
      setSelectedChampion(me.championId);
    } else {
      setSelectedChampion(null);
    }
  }, [session]);

  useEffect(() => {
    // time left looper
    if (!session) return;

    const end =
      session.timer.internalNowInEpochMs +
      session.timer.adjustedTimeLeftInPhase;

    const t = setInterval(() => setTimeLeft(end - Date.now()), 50);
    return () => clearInterval(t);
  }, [session]);

  // useEffect(() => {
  //   console.log(championData);
  // }, [championData]);

  if (!session) return <ErrorPage>loading champ select</ErrorPage>;

  return (
    <div className="bg-black flex flex-row h-full">
      <div className="flex-1">
        {selectedChampion && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-col items-center justify-center h-full">
                <AssetSprite
                  {...(Object.values(championData.data).find(
                    (c) => c.key === String(selectedChampion)
                  )?.image as any)}
                  className="w-40 h-40 mb-4"
                />
                <span className="text-xl font-bold">
                  {
                    Object.values(championData.data).find(
                      (c) => c?.key === String(selectedChampion)
                    )?.name
                  }
                </span>
              </div>

              <button
                className="btn"
                onClick={() => {
                  hoverChampion(selectedChampion, true);
                }}
              >
                Lock In
              </button>
              <button
                className="btn"
                onClick={() => {
                  // fetchLCU(lcu.game_client_chat.postInstantMessages, {
                  // body: `Hello from ${lcu.lol_summoner.getSummonerName()}`,
                  // type: "chat",
                  // channelId: "champ-select",
                  // }).get();
                }}
              >
                Say hello!
              </button>
            </div>
            <div className="flex flex-row items-center justify-center mt-4">
              <AssetSprite
                {...(Object.values(summonerSpellData.data).find((spellData) => {
                  return spellData.key === String(me?.spell1Id);
                })?.image as any)}
                className="w-12 h-12 mr-2"
              />
              <AssetSprite
                {...(Object.values(summonerSpellData.data).find((spellData) => {
                  return spellData.key === String(me?.spell2Id);
                })?.image as any)}
                className="w-12 h-12 mr-2"
              />
            </div>
          </div>
        )}
      </div>
      <div className="w-1/2 flex flex-col items-center h-full max-h-full">
        <div className="flex flex-col items-center justify-end ">
          <div className="h-12 pt-4">{(timeLeft / 1000).toFixed(1)}</div>
          <div className="grid grid-cols-7 overflow-y-auto mx-auto h-[460px]">
            {allGridChamps
              ?.sort(
                (a, b) =>
                  a.name.localeCompare(b.name) -
                  (a.positionsFavorited.length * 10) /
                    (a.positionsFavorited.length || 1) +
                  (b.positionsFavorited.length * 10) /
                    (b.positionsFavorited.length || 1)
              )
              ?.filter((c) => {
                if (!pickableChampions) return true;
                return pickableChampions.includes(c.id);
              })
              ?.map((c) => {
                const cd = Object.entries(championData.data).find(
                  ([name, value]) => Number.parseInt(value?.key) === c.id
                )?.[1];
                if (!cd)
                  return (
                    <div
                      className="bg-slate-700 m-2 p-2"
                      style={{ width: "48px", height: "48px" }}
                    >
                      {c.name}
                    </div>
                  );
                return (
                  <div className="flex flex-col items-center">
                    <AssetSprite
                      {...cd?.image}
                      onClick={() => hoverChampion(c.id)}
                      className="m-2 mb-0 p-2 mx-auto cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                    />
                    <span className="text-xs text-center mb-1">{c.name}</span>
                  </div>
                );
              })}
          </div>

          <div className="flex flex-row items-center mt-4 w-full">
            <div className="flex-1 flex justify-end">
              {lobby?.gameConfig.gameMode !== "PRACTICETOOL" ? (
                ""
              ) : (
                <button
                  className="btn"
                  onClick={() => {
                    cancelCustomGameChampSelect();
                  }}
                >
                  Quit
                </button>
              )}
            </div>
          </div>
          {/* <div>{JSON.stringify(session)}</div> */}
        </div>
      </div>
      <div className="flex-1" />
    </div>
  );
};
