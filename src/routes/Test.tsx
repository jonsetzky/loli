import { Lobby } from "@/routes/Lobby";
import { Tooltip } from "@/components/Tooltip";
import { useUpdatableContent } from "@/updatableContent";
import React, { useEffect, useState } from "react";

export const TestRoute = () => {
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

  return <Lobby />;
};
