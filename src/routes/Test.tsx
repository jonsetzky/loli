import { Lobby } from "@/components/Lobby";
import { Tooltip } from "@/components/Tooltip";
import { updatableContent } from "@/updatableContent";
import React, { useEffect, useState } from "react";

export const TestRoute = () => {
  const c = updatableContent<any>(
    "/lol-lobby/v2/lobby/matchmaking/search-state"
  );

  // const [content, setContent] = useState("");

  // const fetchContent = async () => {
  //   setContent(
  //     JSON.stringify(
  //       (await window.electron.getLcuUri(
  //         "/lol-lobby/v2/lobby/matchmaking/search-state"
  //       )) as any,
  //       null,
  //       2
  //     )
  //   );
  // };

  // useEffect(() => {
  //   fetchContent();
  // }, []);

  return (
    <div
      className={
        "h-full bg-black" //+
        // (c?.searchState === "Invalid" ? "bg-black" : "bg-blue-600")
      }
    >
      <button
        className={
          "uppercase text-sm p-1 font-semibold transition-colors " +
          (c?.searchState === "Invalid" ? "bg-white" : "bg-blue-400")
        }
        onClick={() => {
          if (c?.searchState === "Invalid")
            window.electron.getLcuUri(
              "/lol-lobby/v2/lobby/matchmaking/search",
              "post"
            );
          else
            window.electron.getLcuUri(
              "/lol-lobby/v2/lobby/matchmaking/search",
              "delete"
            );
        }}
      >
        {c?.searchState === "Invalid" ? "search" : "cancel"}
      </button>

      <Lobby></Lobby>

      {/* <div className="bg-white text-sm">{JSON.stringify(c?.searchState)}</div> */}
    </div>
  );
};
