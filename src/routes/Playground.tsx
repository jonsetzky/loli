import { ContextMenu } from "@/components/context-menu/ContextMenu";
import React, { useEffect, useRef, useState } from "react";

export const Playground = () => {
  return (
    <div className="flex flex-col h-full bg-black text-white">
      {/* <div
        className="absolute h-screen w-screen top-0 left-0"
        // onAuxClick={handleClick}
        // onClick={() => setIsShown(false)}
        // onClick={handleLeftClick}
      /> */}
      <div className="grid h-full w-full text-center place-content-center overflow-hidden">
        playground
        <div id="test-context-item" className="btn whitespace-nowrap">
          right click me
        </div>
        <ContextMenu targetId="test-context-item">sus</ContextMenu>
      </div>
      {/* {
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            left: position[0],
            top: position[1],
            // transform: "translateX(-50%)",
            overflow: "hidden",
            visibility: isShown ? "visible" : "hidden",
          }}
        >
          <ContextMenu />
        </div>
      } */}
    </div>
  );
};
