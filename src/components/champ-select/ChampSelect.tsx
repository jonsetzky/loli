import { fetchLCU, useLCUWatch } from "@/hooks/updatableContent";
import React, { useEffect, useState } from "react";
import { ErrorPage } from "../ErrorPage";
import champions from "@/assets/champion.json";
import { cancelCustomGameChampSelect } from "@/api/lobby/customGame";
import * as lcu from "loli-lcu-api";
import { sortText } from "@/util";
import championData from "@/assets/dragontail/data/en_GB/champion.json";
import { AssetSprite } from "../common/AssetSprite";

const getChampionIconId = (id: number) => {
  return Object.values(champions.data).find((c) => c.key === String(id))
    ?.id as string;
};

export const ChampSelect = () => {
  const session = useLCUWatch(lcu.champ_select.getSession, console.error);
  const lobby = useLCUWatch(lcu.lobby.getLobby, console.error);
  const [championMastery, setChampionMastery] = useState<
    lcu.LolCollectionsCollectionsChampionMastery[] | null
  >();

  useEffect(() => {
    if (!session) return;
    const me = session?.myTeam.find(
      (m) => m.cellId === session.localPlayerCellId
    );
    if (!me) return;
    fetchLCU(
      lcu.collections.inventories.getChampionMasteryBySummonerId,
      me.summonerId
    )
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
    const pickAction: lcu.LolChampSelectChampSelectAction = (
      session.actions[0] as any
    ).find(
      (a: lcu.LolChampSelectChampSelectAction) =>
        a.type === "pick" && a.actorCellId === session.localPlayerCellId
    );

    console.log(pickAction);
    fetchLCU(lcu.champ_select.session.patchActionsById, pickAction.id, {
      ...pickAction,
      championId: id,
      completed: lockIn,
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

    session.localPlayerCellId;
    const me = session.myTeam.find(
      (m) => m.cellId === session.localPlayerCellId
    );
    if (me === undefined) return;

    if (me.championId === 0) hoverChampion(120);
  }, [session]);

  useEffect(() => {
    if (!session) return;

    const end =
      session.timer.internalNowInEpochMs +
      session.timer.adjustedTimeLeftInPhase;

    const t = setInterval(() => setTimeLeft(end - Date.now()), 50);
    return () => clearInterval(t);
  }, [session]);

  if (!session) return <ErrorPage>loading champ select</ErrorPage>;
  return (
    <>
      <div className="h-24 " />
      <div>{(timeLeft / 1000).toFixed(1)}</div>

      <div>
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
      <div className="grid grid-cols-7">
        {allGridChamps
          ?.sort(
            (a, b) =>
              a.name.localeCompare(b.name) -
              (a.positionsFavorited.length * 10) /
                (a.positionsFavorited.length || 1) +
              (b.positionsFavorited.length * 10) /
                (b.positionsFavorited.length || 1)
          )
          // ?.sort((a, b) => {
          //   return b.masteryPoints - a.masteryPoints;
          // })
          ?.map((c) => {
            const cd = Object.entries(championData.data).find(
              ([name, value]) => Number.parseInt(value?.key) === c.id
            )?.[1];
            if (!cd)
              return (
                <div
                  className="bg-slate-700"
                  style={{ width: "48px", height: "48px" }}
                />
              );
            return (
              <AssetSprite {...cd?.image} onClick={() => hoverChampion(c.id)} />
            );
          })}
      </div>
      <div>{JSON.stringify(session)}</div>
    </>
  );
};
