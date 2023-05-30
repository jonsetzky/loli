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

const test = () => {};
/**
 *
 * @returns Connector that only supports requests
 */

export const Playground = () => {
  const [test, setTest] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={
        "flex flex-col h-full " +
        (test ? "bg-black text-white" : "bg-gray-400 text-black")
      }
    >
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
      </div>
    </div>
  );
};
