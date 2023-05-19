import { setRegalia } from "@/api/regalia";
import { ContextMenu } from "@/components/context-menu/ContextMenu";
import React, { useEffect, useRef, useState } from "react";

export const Playground = () => {
  const [test, setTest] = useState(false);
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
      </div>
    </div>
  );
};
