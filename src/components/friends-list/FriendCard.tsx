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

  // console.log("rerendering", puuid);

  // console.log(friend.lol);

  return (
    <>
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
        className="bg-black text-white no-drag"
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

          <div className="grow flex flex-row justify-start">
            <div
              data-tooltip-id="friend-info-tooltip"
              data-tooltip-content={friend.puuid}
            >
              {friend.name}
            </div>
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
    </>
  );
};
