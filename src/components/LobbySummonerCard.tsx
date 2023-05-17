import React, { useEffect, useState } from "react";
import { ILobby, IMember } from "../routes/Lobby";
import { AssetImage } from "./common/AssetImage";
import { useUpdatableContent } from "@/updatableContent";
import { ISummoner } from "electron/main/lcu/summoner";
import { Tooltip } from "./common/Tooltip";
import { RolePicker } from "./RolePicker";

interface ISummonerFriendInfo {
  accountId: number;
  availability: string;
  gameName: string;
  gameTag: string;
  icon: number;
  id: string;
  lol: {
    bannerIdSelected: string;
    challengeCrystalLevel: string;
    challengePoints: string;
    challengeTitleSelected: string;
    challengeTokensSelected: string;
    championId: string;
    companionId: string;
    damageSkinId: string;
    gameId: string;
    gameMode: string;
    gameQueueType: string;
    gameStatus: string;
    iconOverride: string;
    isObservable: string;
    level: string;
    mapId: string;
    mapSkinId: string;
    masteryScore: string;
    pty: string;
    puuid: string;
    queueId: string;
    rankedLeagueDivision: string;
    rankedLeagueQueue: string;
    rankedLeagueTier: string;
    rankedLosses: string;
    rankedPrevSeasonDivision: string;
    rankedPrevSeasonTier: string;
    rankedSplitRewardLevel: string;
    rankedWins: string;
    regalia: string;
    skinVariant: string;
    skinname: string;
    timeStamp: string;
  };
  masteryScore: number;
  name: string;
  note: string;
  partySummoners: string[];
  patchline: string;
  platformId: string;
  product: string;
  productName: string;
  puuid: string;
  remotePlatform: boolean;
  remoteProduct: boolean;
  remoteProductBackdropUrl: string;
  remoteProductIconUrl: string;
  statusMessage: string;
  summonerIcon: number;
  summonerId: number;
  summonerLevel: number;
}

export const LobbySummonerCard = ({
  member,
  lobby,
  searchState,
}: {
  member: IMember | null;
  lobby?: ILobby;
  searchState?: any;
}) => {
  const [rolePicker, setRolePicker] = useState<"primary" | "secondary" | null>(
    null
  );

  if (member === null)
    return <div className={"flex flex-col basis-1/5 bg-neutral-900 "}></div>;

  const summoner = useUpdatableContent<ISummonerFriendInfo>(
    `/lol-hovercard/v1/friend-info-by-summoner/${member.summonerId}`
  );

  if (!summoner || !searchState) return <>loading</>;

  return (
    <div
      className={
        "flex flex-col basis-1/5 bg-white text-black " +
        (searchState.searchState === "Invalid" && !member.ready
          ? "opacity-25"
          : "")
      }
      id={member.summonerName}
    >
      <div className="flex justify-center text-sm">
        <div className="basis-1/3 flex row grow justify-end">
          <div className="flex flex-col justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={
                "w-3 h-3 mr-0.5 " + (member.isLeader ? "" : "invisible")
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>

        <div className="font-bold">{member.summonerName}</div>
        <div className="basis-1/3 grow"></div>
      </div>

      <div className="flex flex-row ml-1 mr-1 mb-1 gap-1 h-full">
        <div className="flex flex-col gap-1 w-16">
          <AssetImage
            key={summoner.icon}
            uri={`/profileicon/${summoner.icon}.png`}
            placeholderSrc="/profileicon/29.png"
          />
          {lobby?.gameConfig.showPositionSelector ? (
            <div className="flex flex-row grow justify-evenly">
              {lobby?.localMember.summonerId === member.summonerId ? (
                <Tooltip
                  id="role-picker"
                  data-tooltip-place="right"
                  classNameExtend="absolute z-50"
                  delayHide={0}
                  isOpen={rolePicker !== null}
                  openOnClick={true}
                  noArrow={false}
                >
                  <div onMouseLeave={() => setRolePicker(null)}>
                    <RolePicker
                      currentRole={
                        rolePicker === "primary"
                          ? member.firstPositionPreference.toLowerCase()
                          : rolePicker === "secondary"
                          ? member.secondPositionPreference.toLowerCase()
                          : undefined
                      }
                      onPickRole={(newRole) => {
                        console.log("setting", rolePicker, "to", newRole);
                        let newLobby = structuredClone(lobby);
                        newLobby.localMember.firstPositionPreference = "MIDDLE";

                        let newFirst =
                          rolePicker === "primary"
                            ? newRole
                            : member.firstPositionPreference;
                        let newSecond =
                          rolePicker === "secondary"
                            ? newRole
                            : member.secondPositionPreference;

                        // if (
                        //   newFirst.toUpperCase() === newSecond.toUpperCase()
                        // ) {
                        //   newFirst = member.secondPositionPreference;
                        //   newSecond = member.firstPositionPreference;
                        // }

                        window.electron
                          .getLcuUri(
                            "/lol-lobby/v2/lobby/members/localMember/position-preferences",
                            "put",
                            {
                              firstPreference: newFirst.toUpperCase(),
                              secondPreference: newSecond.toUpperCase(),
                            }
                          )
                          .then((e: any) => console.log(e));
                        setRolePicker(null);
                      }}
                    />
                  </div>
                </Tooltip>
              ) : (
                <></>
              )}
              <div className="flex flex-col justify-center">
                <img
                  data-tooltip-id="role-picker"
                  src={`./positions/position-${member.firstPositionPreference.toLowerCase()}.svg`}
                  className="h-6 primary-role"
                  style={{
                    filter: "brightness(0)",
                  }}
                  onClick={(e: any) => {
                    setRolePicker("primary");
                  }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <img
                  data-tooltip-id="role-picker"
                  src={`./positions/position-${member.secondPositionPreference.toLowerCase()}.svg`}
                  className="h-4"
                  style={{
                    filter: "brightness(0)",
                    opacity: "75%",
                  }}
                  onClick={() => {
                    setRolePicker("secondary");
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-row grow justify-evenly h-4" />
          )}
        </div>
        <div className="flex bg-black text-white w-full divide-x divide-dashed">
          <div className="w-72 truncate"></div>
          <div className="shrink-0 relative overflow-hidden aspect-square">
            <img
              src={
                summoner !== undefined
                  ? `./ranked-emblem/emblem-${summoner?.lol.rankedLeagueTier.toLowerCase()}.png`
                  : ""
              }
              className="absolute object-scale-down h-full scale-[3.7]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
