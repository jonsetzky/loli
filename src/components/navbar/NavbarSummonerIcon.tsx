import React, { useState } from "react";
import { AssetImage } from "../common/AssetImage";
import { ISummoner } from "electron/main/lcu/summoner";
import { Tooltip } from "../common/Tooltip";
import { FullscreenElement } from "../common/FullscreenElement";
import { useUpdatableContent } from "@/updatableContent";
import { ContextMenu } from "../context-menu/ContextMenu";
import { ContextMenuList } from "../context-menu/ContextMenuList";
import { ContextMenuListItem } from "../context-menu/ContextMenuListItem";

export interface IIcon {
  expirationDate: string;
  f2p: boolean;
  inventoryType: string;
  itemId: number;
  loyalty: boolean;
  loyaltySources: any[];
  owned: boolean;
  ownershipType: string;
  payload: any;
  purchaseDate: string;
  quantity: number;
  rental: boolean;
  uuid: string;
  wins: number;
}

const setSummonerIcon = (id: number) => {
  window.electron.getLcuUri("/lol-summoner/v1/current-summoner/icon", "put", {
    profileIconId: id,
  });
};

export const NavbarSummonerIcon = ({ summoner }: { summoner?: ISummoner }) => {
  const [iconEditorOpen, setIconEditorOpen] = useState(false);

  const ownedIcons = useUpdatableContent<IIcon[]>(
    "/lol-inventory/v2/inventory/SUMMONER_ICON"
  );
  const ownedIconIds = ownedIcons?.map((i) => i.itemId);

  const iconEditor =
    iconEditorOpen && ownedIconIds ? (
      <FullscreenElement
        className="bg-[#00000070] text-black z-50 grid place-content-center"
        onClick={() => setIconEditorOpen(false)}
      >
        <div className="ml-24 mr-24 mt-36 mb-36 overflow-y-scroll">
          <div className="grid grid-cols-7">
            {" "}
            {ownedIconIds.map((id) => (
              <AssetImage
                uri={`/profileicon/${id}.png`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSummonerIcon(id);
                  setIconEditorOpen(false);
                }}
              />
            ))}
          </div>
        </div>
      </FullscreenElement>
    ) : (
      ""
    );

  return (
    <div className="summoner-icon relative basis-24 shrink-0">
      {iconEditor}
      <ContextMenu targetId="navbar-summoner-icon" label="Summoner Icon">
        <ContextMenuList>
          <ContextMenuListItem onClick={() => setIconEditorOpen(true)}>
            Change icon
          </ContextMenuListItem>
          <ContextMenuListItem
            onClick={() =>
              window.electron.openExternal(
                `/lol-game-data/assets/v1/profile-icons/${
                  summoner?.profileIconId ?? "29"
                }.jpg`
              )
            }
          >
            Open icon in Browser
          </ContextMenuListItem>
          <ContextMenuListItem
            onClick={() =>
              window.electron.openExternal("/lol-summoner/v1/current-summoner")
            }
          >
            Open summoner in Browser
          </ContextMenuListItem>
        </ContextMenuList>
      </ContextMenu>
      <AssetImage
        id="navbar-summoner-icon"
        uri={`/profileicon/${summoner?.profileIconId ?? "29"}.png`}
      />
      <div className="xp-progress-bar relative">
        <div className="xp-progress-bar-bg absolute w-full h-1 bg-cyan-900 bottom-0">
          <div
            className={`xp-progress-bar-fg absolute h-1 bg-cyan-400 bottom-0`}
            style={{ width: summoner?.percentCompleteForNextLevel }}
          ></div>
          <div className="xp-progress-bar-level absolute flex justify-center tracking-wide w-full bottom-0 text-sm select-none">
            <p className=" font-outline-1">{summoner?.summonerLevel}</p>
          </div>
        </div>
      </div>
      <div className="xp-progress-bar-xp-tooltip">
        <Tooltip
          anchorSelect=".xp-progress-bar-level"
          className="absolute text-[10px] bg-black text-white pr-1 pl-1 whitespace-nowrap"
          offset={-16}
        >
          {summoner?.xpSinceLastLevel}
          {" / "}
          {summoner?.xpUntilNextLevel}
          {" xp"}
        </Tooltip>
      </div>
    </div>
  );
};
