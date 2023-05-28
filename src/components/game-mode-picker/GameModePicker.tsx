import React, {
  createContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { FullscreenNotification } from "../FullscreenNotification";
import { useLCUWatch } from "@/hooks/updatableContent";
import { ErrorPage } from "../ErrorPage";
import ReactDropdown from "react-dropdown";
import { sortText } from "@/util";
import { useClickOutsideListener } from "@/hooks/clickOutside";
import { GameModeQueue } from "./GameModeQueue";
import { GameMode } from "./GameMode";
import * as lcu from "loli-lcu-api";
import { createCustomGame } from "@/api/lobby/customGame";

export const GameModePicker = ({
  gameMode,
  visible,
  setVisible,
  setQueue,
}: {
  /** This tab opens by default */
  gameMode: string | null;
  visible: boolean;
  setVisible: (v: boolean) => void;
  setQueue: (queueId: number) => void;
}) => {
  const [current, setCurrent] = useState<string | null>(gameMode);

  // const queueInfo = useLCUWatch2(lcu.game_queues.getQueues, (err) =>
  //   console.error("error getting queue info", err), 1
  // );

  const queueInfo = useLCUWatch(lcu.game_queues.getQueues);
  const mapInfo = useLCUWatch(lcu.maps.getMaps);

  if (!queueInfo || !mapInfo) return <></>;

  const allAvailableQueues = queueInfo?.filter(
    (q) => q.queueAvailability === "Available"
  );

  const tutorialQueues = allAvailableQueues.filter((q) =>
    q.gameMode.match(/tutorial/i)
  );
  const realQueues = allAvailableQueues
    .filter((q) => !q.type.match(/tutorial/i))
    // map out queues that are player versus bots
    .map((q) => ({
      ...q,
      gameMode: q.category.match(/versusai/i) ? "CLASSIC_AI" : q.gameMode,
    }));

  const gameModes = realQueues
    .reduce<string[]>(
      (prev, current) =>
        prev.includes(current.gameMode) ? prev : [...prev, current.gameMode],
      []
    )
    .sort(sortText(["CLASSIC", "ARAM", "TFT"]));

  const categories = realQueues.reduce<string[]>(
    (prev, current) =>
      prev.includes(current.category) ? prev : [...prev, current.category],
    []
  );

  const types = realQueues.reduce<string[]>(
    (prev, current) =>
      prev.includes(current.type) ? prev : [...prev, current.type],
    []
  );

  if (!visible) return <></>;
  return (
    <div
      className="absolute w-screen h-screen top-0 left-0 z-50 bg-[#000000cb]"
      onClick={() => setVisible(false)}
    >
      <div className="grid place-content-center w-full h-screen">
        <div
          className="bg-black text-white p-4 border-white border-[0.5px] flex-col gap-2 min-w-[36rem] min-h-[26rem]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="settings-header flex flex-row justify-start uppercase">
            <h1 className="text-3xl">Select game mode</h1>
          </div>
          <div className="flex flex-row gap-1">
            {/* {availableQueues?.map((q) => (
              <div className="shrink">
                {
                  //   <QueueCard
                  //     map={mapInfo.find((m) => m.id === q.mapId)}
                  //     queue={q}
                  //   />
                }
              </div>
            ))} */}

            <div className="flex flex-col">
              {gameModes.map((gm) => (
                <GameMode key={gm} name={gm} {...{ current, setCurrent }} />
              ))}
              <GameMode
                name="Practice"
                current={""}
                setCurrent={() => {
                  createCustomGame();
                  setVisible(false);
                }}
              />
            </div>

            <div className="flex flex-col ml-3 w-full">
              {realQueues
                .filter((q) => q.gameMode === current)
                .map((q) => (
                  <GameModeQueue
                    key={q.id}
                    queue={q}
                    onSelect={(q) => {
                      // let the animation play (delau can be removed if waiting for the lobby creation here)
                      setTimeout(() => setVisible(false), 150);
                      // setVisible(false);
                      setQueue(q);
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
