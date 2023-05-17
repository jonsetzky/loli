import { useUpdatableContent } from "@/updatableContent";
import React, { memo, useEffect, useId, useState } from "react";
import { AssetImage } from "../common/AssetImage";
import { ExternalLink } from "@/ExternalLink";
import { ContextMenu } from "../context-menu/ContextMenu";
import { ContextMenuList } from "../context-menu/ContextMenuList";
import { ContextMenuListItem } from "../context-menu/ContextMenuListItem";

export interface IFriend {
  availability: string;
  displayGroupId: number;
  displayGroupName: string;
  gameName: string;
  gameTag: string;
  groupId: number;
  groupName: string;
  icon: number;
  id: string;
  isP2PConversationMuted: boolean;
  lastSeenOnlineTimestamp: number | null;
  lol?: {
    bannerIdSelected: string;
    challengeCrystalLevel: string;
    challengePoints: string;
    challengeTitleSelected: string;
    challengeTokensSelected: string;
    championId: string;
    companionId: string;
    damageSkinId: string;
    gameMode: string;
    gameQueueType: string;
    gameStatus: string;
    iconOverride: string;
    isObservable: string;
    level: string;
    mapId: string;
    mapSkinId: string;
    masteryScore: string;
    profileIcon: string;
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
  name: string;
  note: string;
  patchline: string;
  pid: string;
  platformId: string;
  product: string;
  productName: string;
  puuid: string;
  statusMessage: string;
  summary: string;
  summonerId: number;
  time: number;
}

export interface IFriendHoverCard {
  accountId: number;
  availability: string;
  gameName: string;
  gameTag: string;
  icon: number;
  id: string;
  lol?: {
    bannerIdSelected: string;
    challengeCrystalLevel: string;
    challengePoints: string;
    challengeTitleSelected: string;
    challengeTokensSelected: string;
    championId: string;
    companionId: string;
    damageSkinId: string;
    gameMode: string;
    gameQueueType: string;
    gameStatus: string;
    iconOverride: string;
    isObservable: string;
    level: string;
    mapId: string;
    mapSkinId: string;
    masteryScore: string;
    profileIcon: string;
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
  partySummoners: any[];
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

export const FriendCard = memo(
  ({
    puuid,
    setAvailability,
  }: {
    puuid: string;
    setAvailability: (av: string | undefined) => void;
  }) => {
    const id = useId();
    const [tooltip, setTooltip] = useState<string | null>(null);

    const friend = useUpdatableContent<IFriendHoverCard>(
      "/lol-hovercard/v1/friend-info/" + puuid,
      {
        onUpdate: (f) => {
          setAvailability(f.availability);
          setTooltip(
            Object.keys(f.lol ?? {}).length > 0
              ? `${f.lol?.gameStatus} ${f.lol?.gameQueueType} as ${f.lol?.skinname}`
              : null
          );
        },
      }
    );

    useEffect(() => {
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
            <ContextMenuListItem>hihh</ContextMenuListItem>
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
        <div key={"sus"} id={id} className="bg-black text-white no-drag">
          <div className="flex w-full">
            <div className="w-6">
              <AssetImage
                key={friend.icon}
                uri={`/profileicon/${friend.icon}.png`}
                placeholderSrc="/profileicon/29.png"
              />
            </div>
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
  }
);
