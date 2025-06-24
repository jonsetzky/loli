import { lcu } from "@/api/lcu";
import { useLCUWatch } from "@/hooks/updatableContent";
import { TeamBuilderDirectChampSelectMySelection } from "lcu-api/dist/cjs";
import { LCUAssetImage } from "./common/LCUAssetImage";
import { useLCUGlobalCache } from "@/hooks/useLCUGlobalCache";
import { useEffect, useState } from "react";
import { ContextMenu } from "./context-menu/ContextMenu";
import { ContextMenuList } from "./context-menu/ContextMenuList";
import { ContextMenuListItem } from "./context-menu/ContextMenuListItem";
import { ExternalLink } from "./ExternalLink";
import { DragontailAssetImage } from "./common/AssetImage";
import { PerkImage } from "./common/PerkImage";

export const RuneSelector = ({
  championId,
  position,
  mapId,
  visible,
  setVisible,
  setRunes,
}: {
  championId?: number;
  position?: string;
  mapId?: number;
  visible: boolean;
  setVisible: (v: boolean) => void;
  setRunes: (selectedPerkIds: number[]) => void;
}) => {
  const pages = useLCUWatch(lcu.perks.getPages, console.error);

  let styles = useLCUGlobalCache(lcu.perks.getStyles);
  let perks = useLCUGlobalCache(lcu.perks.getPerks);
  if (perks.value) perks.value = perks.value.filter((p) => p.styleId !== -1);

  const [currentPrimaryStyleId, setCurrentPrimaryStyleId] = useState<
    number | null
  >(null);
  const [currentSecondaryStyleId, setCurrentSecondaryStyleId] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (currentPrimaryStyleId === currentSecondaryStyleId) {
      setCurrentSecondaryStyleId(null);
    }
  }, [currentPrimaryStyleId]);

  useEffect(() => {}, [pages]);

  const getPerkById = (id: number) => {
    return perks.value?.find((perk) => perk.id === id);
  };

  console.log("pages", pages);
  console.log("perks", perks);
  console.log("styles", styles);

  if (!pages) return <>loading</>;

  const currentPage = pages[0];
  const selectedPerkIds = currentPage.selectedPerkIds;
  const selectedStyleId = currentPage.primaryStyleId;
  const selectedSubStyleId = currentPage.subStyleId;

  const currentPrimaryStyle: lcu.LolPerksPerkUIStyle | undefined =
    styles.value?.find((style) => style.id === selectedStyleId);
  const currentSecondaryStyle: lcu.LolPerksPerkUIStyle | undefined =
    styles.value?.find((style) => style.id === selectedSubStyleId);

  //   lcu.perks.postPages;
  if (!visible) return <></>;

  if (!pages || pages.length === 0) {
    return (
      <div
        className="absolute w-screen h-screen top-0 left-0 z-50 bg-[#000000cb]"
        onClick={() => setVisible(false)}
      >
        <div className="grid place-content-center w-full h-screen">
          <div className="bg-black text-white p-4 border-white border-[0.5px] flex-col gap-2 min-w-[36rem] min-h-[26rem]">
            <div className="settings-header flex flex-row justify-start uppercase">
              <h1 className="text-3xl">No rune pages</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-50 bg-[#000000cb]">
      <ContextMenu targetId="rune-selector" label={"Rune Selector"}>
        <ContextMenuList>
          <ContextMenuListItem>
            <ExternalLink uri={`/lol-perks/v1/perks`}>
              View Perks in Browser
            </ExternalLink>
          </ContextMenuListItem>
          <ContextMenuListItem>
            <ExternalLink uri={`/lol-perks/v1/styles`}>
              View Styles in Browser
            </ExternalLink>
          </ContextMenuListItem>
          <ContextMenuListItem>
            <ExternalLink uri={`/lol-perks/v1/pages`}>
              View your Pages in Browser
            </ExternalLink>
          </ContextMenuListItem>
        </ContextMenuList>
      </ContextMenu>
      <div
        className="grid place-content-center w-full h-screen"
        id="rune-selector"
        data-context-menu
        onClick={(e) => {
          // Only close if the click is on the backdrop itself, not a child
          if (e.target === e.currentTarget) {
            setVisible(false);
          }
        }}
      >
        <div
          className="bg-black text-white p-4 border-white border-[0.5px] flex-col gap-2 min-w-[36rem] min-h-[26rem]"
          // onClick={(e) => e.stopPropagation()}
        >
          <div className="settings-header flex flex-row justify-start uppercase">
            <h1 className="text-3xl">Rune Selector</h1>
            <span className="m-1.5">{currentPage.name}</span>
          </div>
          <div className="flex flex-row gap-2 justify-start w-full m-2">
            <div
              className="flex flex-col"
              id={`primary-runes-${String(currentPrimaryStyleId)}`}
            >
              <div className="flex flex-row gap-2 justify-between items-center w-56 m-2 ">
                {styles.value?.map((style) => (
                  <PerkImage
                    active={selectedStyleId === style.id}
                    size={6}
                    uri={style.iconPath}
                    onClick={() => setCurrentPrimaryStyleId(style.id)}
                  />
                ))}
              </div>
              <div className="flex flex-row m-2 justify-evenly gap-2 w-56">
                {currentPrimaryStyle?.slots[0].perks.map((perkId) => {
                  const perk = getPerkById(perkId);
                  const perkIconPath =
                    perk?.iconPath ||
                    "/lol-game-data/assets/v1/profile-icons/29";
                  return (
                    <PerkImage
                      active={selectedPerkIds.includes(perkId)}
                      size={12}
                      uri={perkIconPath}
                      // onClick={() => setCurrentKeystone(perkId)}
                    />
                  );
                })}
              </div>
              <div className="grid grid-rows-3 grid-cols-3 mt-0 m-2 justify-evenly items-center gap-2 w-56 h-48">
                {currentPrimaryStyle?.slots[1].perks
                  .concat(
                    currentPrimaryStyle?.slots[2].perks,
                    currentPrimaryStyle?.slots[3].perks
                  )
                  .map((perkId) => {
                    const perk = getPerkById(perkId);
                    const perkIconPath =
                      perk?.iconPath ||
                      "/lol-game-data/assets/v1/profile-icons/29";
                    return (
                      <PerkImage
                        active={selectedPerkIds.includes(perkId)}
                        size={8}
                        uri={perkIconPath}
                        // onClick={() => setCurrentSecondaryStyleId(style.id)}
                      />
                    );
                  })}
              </div>
            </div>
            <div
              className="flex flex-col items-start h-full justify-start"
              id={`secondary-runes-${String(currentSecondaryStyleId)}`}
            >
              <div className="flex flex-row items-start gap-2 justify-evenly w-56 m-2">
                {styles.value
                  ?.filter((style) => style.id !== currentPrimaryStyleId)
                  .map((style) => (
                    <PerkImage
                      active={selectedSubStyleId === style.id}
                      size={6}
                      uri={style.iconPath}
                      onClick={() => setCurrentSecondaryStyleId(style.id)}
                    />
                  ))}
              </div>
              <div className="grid grid-rows-3 grid-cols-3 m-2 justify-evenly items-center gap-2 w-56 h-48">
                {currentSecondaryStyle?.slots[1].perks
                  .concat(
                    currentSecondaryStyle?.slots[2].perks,
                    currentSecondaryStyle?.slots[3].perks
                  )
                  .map((perkId) => {
                    const perk = getPerkById(perkId);
                    const perkIconPath =
                      perk?.iconPath ||
                      "/lol-game-data/assets/v1/profile-icons/29";
                    return (
                      <PerkImage
                        active={selectedPerkIds.includes(perkId)}
                        size={8}
                        uri={perkIconPath}
                        // onClick={() => setCurrentSecondaryStyleId(style.id)}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
