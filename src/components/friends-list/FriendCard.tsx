import { fetchLCU, useLCUWatch } from "@/hooks/updatableContent";
import React, { memo, useEffect, useId, useState } from "react";

import { ExternalLink } from "@/components/ExternalLink";
import { ContextMenu } from "../context-menu/ContextMenu";
import { ContextMenuList } from "../context-menu/ContextMenuList";
import { ContextMenuListItem } from "../context-menu/ContextMenuListItem";
import * as lcu from "loli-lcu-api";
import { AssetSprite } from "../common/AssetSprite";
import pfpData from "@/assets/dragontail/data/en_GB/profileicon.json";

export const FriendCard = ({
  puuid,
  setAvailability,
}: {
  puuid: string;
  setAvailability: (av: string | undefined) => void;
}) => {
  const id = useId();
  const [tooltip, setTooltip] = useState<string | null>(null);

  const friend = useLCUWatch(
    lcu.hovercard.getFriendInfoByPuuid,
    (err) => console.error("error getting friend info", err),
    puuid
  );
  useEffect(() => {
    setAvailability(friend?.availability);
    setTooltip(
      Object.keys(friend?.lol ?? {}).length > 0
        ? `${friend?.lol?.gameStatus} ${friend?.lol?.gameQueueType} as ${friend?.lol?.skinname}`
        : null
    );
  }, [friend]);

  if (!friend) return <></>;

  return (
    <div>
      <ContextMenu targetId={id} label={friend.name}>
        <ContextMenuList>
          <ContextMenuListItem
            onClick={() => {
              fetchLCU(lcu.lobby.lobby.postInvitations, [
                {
                  toSummonerId: friend.summonerId,
                } as any,
              ])
                .get()
                .catch((err) =>
                  console.error("error inviting", friend.name, err)
                );
            }}
          >
            Invite to Lobby
          </ContextMenuListItem>
        </ContextMenuList>
        <ContextMenuListItem>
          <div>
            <ExternalLink
              uri={`/lol-hovercard/v1/friend-info/${friend?.puuid}`}
            >
              View as JSON
            </ExternalLink>
          </div>
        </ContextMenuListItem>
      </ContextMenu>
      <div
        key={"sus"}
        id={id}
        data-context-menu
        className=" text-white no-drag"
      >
        <div className="flex w-full">
          {(() => {
            const pfpd = Object.entries(pfpData.data).find(
              ([id, data]) => id === String(friend.icon)
            )?.[1];
            if (!pfpd) {
              console.error("couldn't find profile icon with id", friend.icon);
              return <></>;
            }
            return (
              <div className="w-6 " key={friend.icon}>
                <AssetSprite {...pfpd.image} scale={0.5} />
              </div>
            );
          })()}

          <div className="grow flex flex-col justify-center">
            <div
              data-tooltip-id="friend-info-tooltip"
              data-tooltip-content={friend.puuid}
              className="flex items-center"
            >
              <span className="px-1 font-semibold text-white text-base">
                {friend.gameName}
              </span>
              <span
                className="text-xs text-gray-400 bg-gray-900 px-1 py-0.5 rounded"
                style={{ position: "relative", top: "1px" }}
              >
                {friend.gameTag}
              </span>
            </div>
            <div className="text-xs text-gray-300 mt-1">{friend.name}</div>
          </div>
          <div
            data-tooltip-id={tooltip !== null ? "status-tooltip" : ""}
            data-tooltip-content={tooltip ?? ""}
            data-tooltip-place="right"
            className="text-xs"
          >
            {friend.availability.replace(/dnd/, "playing") +
              " " +
              friend.productName.replace(/league\s+of\s+legends/i, "")}
          </div>
        </div>
      </div>
    </div>
  );
};
