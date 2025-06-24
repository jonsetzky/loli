import {
  createCustomGame,
  startCustomGameChampSelect,
} from "@/api/lobby/customGame";
import { setRegalia } from "@/api/social/regalia";
import { matchSearch } from "@/api/lobby/search";
import { ContextMenu } from "@/components/context-menu/ContextMenu";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import * as lcu from "loli-lcu-api";
import { AssetSprite } from "@/components/common/AssetSprite";
import { fetchLCU } from "@/hooks/updatableContent";
import { RuneSelector } from "@/components/RuneSelector";

const test = () => {};
/**
 *
 * @returns Connector that only supports requests
 */

export const Playground = () => {
  const [test, setTest] = useState(false);
  const [runePickerVisible, setRunePickerVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={
        "flex flex-col h-full " +
        (test ? "bg-black text-white" : "bg-gray-400 text-black")
      }
    >
      <RuneSelector
        visible={runePickerVisible}
        setVisible={setRunePickerVisible}
        setRunes={(selectedPerkIds) => {
          console.log("setting runes TBD");
        }}
      />
      <div className="grid h-full w-full text-center place-content-center overflow-hidden place-items-center">
        playground
        <div
          id="test-context-item"
          data-context-menu
          className="btn whitespace-nowrap"
          onClick={() => setTest((c) => !c)}
        >
          right click me
        </div>
        <ContextMenu targetId="test-context-item">sus</ContextMenu>
        <div
          id="test-context-item"
          data-context-menu
          className="btn whitespace-nowrap"
          onClick={() =>
            setRegalia({
              preferredBannerType: "blank",
              preferredCrestType: "prestige",
              selectedPrestigeCrest: 1,
            })
          }
        >
          set default crest & banner
        </div>
        <div
          id="test-context-item"
          data-context-menu
          className="btn whitespace-nowrap"
          onClick={async () => {
            await createCustomGame();
            await startCustomGameChampSelect();
            navigate("/test");
          }}
        >
          start practice tool
        </div>
        <div
          id="test-context-item"
          data-context-menu
          className="btn whitespace-nowrap"
          onClick={async () => {
            await fetchLCU(lcu.simple_dialog_messages.postMessages, {
              msgBody: ["Hello world"],
              msgType: "Test",
            });
          }}
        >
          lcu.simple_dialog_messages.postMessages
        </div>
        <button
          className="btn whitespace-nowrap"
          onClick={() => setRunePickerVisible(true)}
        >
          Open rune selector
        </button>
      </div>
    </div>
  );
};
