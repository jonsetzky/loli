import React, { useEffect, useId, useState } from "react";
import { LCUAssetImage } from "../common/AssetImage";
import { fetchLCU, useLCUWatch } from "@/hooks/updatableContent";
import { Tooltip } from "../common/Tooltip";
import { Role, RolePicker } from "./RolePicker";
import { useSetting } from "@/hooks/settings";
import { setRoles } from "@/api/lobby/roles";
import { ContextMenuList } from "../context-menu/ContextMenuList";
import { ContextMenu } from "../context-menu/ContextMenu";
import { ContextMenuListItem } from "../context-menu/ContextMenuListItem";
import { RoleIcon } from "../common/RoleIcon";
import * as lcu from "loli-lcu-api";

export const LobbySummonerCard = ({
  member,
  lobby,
  searchState,
  compact,
}: {
  member: lcu.LolLobbyLobbyParticipantDto | null;
  lobby?: lcu.LolLobbyLobbyDto;
  searchState?: any;
  compact: boolean;
}) => {
  const [rolePicker, setRolePicker] = useState<{
    visible: boolean;
    position: 0 | 1;
  }>({
    visible: false,
    position: 0,
  });

  if (member === null)
    return <div className={"flex flex-col basis-1/5 bg-neutral-900 "}></div>;

  const memberIsLocal = lobby?.localMember.summonerId === member.summonerId;

  const summoner = useLCUWatch(
    lcu.hovercard.getFriendInfoBySummonerBySummonerId,
    (err) => console.error("error", err),
    member.summonerId
  );

  const [allowDoubleRole, setAllowDoubleRole] = useSetting("allowDoubleRole");
  useEffect(() => {
    if (
      member.firstPositionPreference === member.secondPositionPreference &&
      memberIsLocal
    ) {
      setRoles(member.firstPositionPreference as Role, "unselected");
    }
  }, [allowDoubleRole]);

  const setRole = (n: Role) => {
    let roles = [
      member.firstPositionPreference,
      member.secondPositionPreference,
    ];
    roles[rolePicker.position] = n.toUpperCase();

    if (roles[0] == roles[1] && !allowDoubleRole)
      [roles[0], roles[1]] = [
        member.secondPositionPreference,
        member.firstPositionPreference,
      ];

    setRoles(roles[0] as Role, roles[1] as Role);
  };

  if (!summoner || !searchState) return <>loading</>;

  // console.log(lobby?.localMember.summonerId, member.summonerId);

  return (
    <div
      className={
        "flex flex-col bg-white text-black basis-[3.5rem] " +
        (searchState.searchState === "Invalid" && !member.ready
          ? "opacity-25"
          : "")
      }
      id={member.summonerName}
      data-context-menu
    >
      <ContextMenu targetId={member.summonerName} label={member.summonerName}>
        <ContextMenuList>
          <ContextMenuListItem>😳</ContextMenuListItem>
          <ContextMenuListItem
            onClick={() =>
              window.electron.openExternal(
                `/lol-hovercard/v1/friend-info-by-summoner/${member.summonerId}`
              )
            }
          >
            Open friend in Browser
          </ContextMenuListItem>
        </ContextMenuList>
      </ContextMenu>
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
          <LCUAssetImage
            key={summoner.icon}
            uri={`/profileicon/${summoner.icon}.png`}
            placeholderSrc={"/profileicon/29.png"}
          />
          {lobby?.gameConfig.showPositionSelector ? (
            <div className="flex flex-row grow justify-center">
              {memberIsLocal ? (
                <RolePicker
                  current={
                    (rolePicker.position === 0
                      ? member.firstPositionPreference.toLowerCase()
                      : member.secondPositionPreference.toLowerCase()) as Role
                  }
                  setVisible={(n) =>
                    setRolePicker((c) => ({ ...c, visible: n }))
                  }
                  visible={rolePicker.visible}
                  setRole={setRole}
                />
              ) : (
                <></>
              )}
              <RoleIcon
                {...{
                  "data-tooltip-id": memberIsLocal ? "role-picker" : undefined,
                }}
                position={member.firstPositionPreference.toLowerCase()}
                className="h-6"
                onClick={(e: any) => {
                  if (memberIsLocal)
                    setRolePicker((c) => ({ visible: true, position: 0 }));
                }}
              />
              {member.firstPositionPreference.toLowerCase() === "fill" ? (
                <></>
              ) : (
                <div className="grid h-6 w-6 place-content-center">
                  {" "}
                  <RoleIcon
                    {...{
                      "data-tooltip-id": memberIsLocal
                        ? "role-picker"
                        : undefined,
                    }}
                    position={member.secondPositionPreference.toLowerCase()}
                    className="h-4"
                    onClick={(e: any) => {
                      if (memberIsLocal)
                        setRolePicker((c) => ({ visible: true, position: 1 }));
                    }}
                  />
                </div>
              )}
              <div className="flex flex-col justify-center"></div>
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
                  ? `/ranked-emblem/emblem-${summoner?.lol.rankedLeagueTier?.toLowerCase()}.png`
                  : ""
              }
              spellCheck
              className="absolute object-scale-down h-full scale-[3.7]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
