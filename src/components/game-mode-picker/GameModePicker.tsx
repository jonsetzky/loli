import React, {
  createContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { FullscreenNotification } from "../FullscreenNotification";
import { useUpdatableContent } from "@/updatableContent";
import { IQueue } from "@/routes/Lobby";
import { ErrorPage } from "../ErrorPage";
import ReactDropdown from "react-dropdown";
import { sortText } from "@/sortText";
import { useClickOutsideListener } from "@/clickOutside";
import { GameModeQueue } from "./GameModeQueue";
import { GameMode } from "./GameMode";

export interface IMap {
  assets: {
    [key: string]: string;
  };
  categorizedContentBundles: any;
  description: string;
  gameMode: string;
  gameModeDescription: string;
  gameModeName: string;
  gameModeShortName: string;
  gameMutator: string;
  id: number;
  isDefault: boolean;
  isRGM: boolean;
  locStrings: {
    tutorial_subheader: string;
    tutorial_title: string;
  };
  mapStringId: string;
  name: string;
  perPositionDisallowedSummonerSpells: any;
  perPositionRequiredSummonerSpells: any;
  platformId: string;
  platformName: string;
  properties: {
    suppressRunesMasteriesPerks: boolean;
  };
  tutorialCards: {
    description: string;
    footer: string;
    header: string;
    imagePath: string;
  }[];
}

const Label = ({ text }: any) => (
  <div className="btn text-xs whitespace-nowrap tracking-tight font-bold">
    {text}
  </div>
);

const QueueCard = ({ queue, map }: { queue?: IQueue; map?: IMap }) => {
  return (
    <div className="flex flex-row">
      <Label text={queue?.gameMode} />
      <Label text={map?.name} />
      <Label text={queue?.description} />
      <Label text={queue?.category} />
      {queue?.isRanked ? <Label text="Ranked" /> : <></>}
    </div>
  );
};

const GameModeDropdown = ({
  name,
  queues,
}: {
  name: string;
  /**
   * Queues for this gamemode
   */
  queues: IQueue[];
}) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  const ref = useRef(null);

  useClickOutsideListener(ref, (e: any) => {
    if (e.target?.className.includes("gamemode-button")) {
      // e.currentTarget.onclick.apply();
      setOpen(false);
    }
  });

  return (
    <div ref={ref}>
      <button
        className="gamemode-button btn text-sm tracking-normal font-bold bg-white text-black"
        onClick={() => setOpen((c) => !c)}
      >
        {name}
      </button>
      {!open ? (
        <></>
      ) : (
        <div className="flex flex-col text-xs whitespace-nowrap tracking-tight font-bold bg-black text-white ml-5">
          {queues.map((q) => (
            <div>syus</div>
            // <div className="leading-8 p-0.5 text-lg">{q.name}</div>
          ))}
        </div>
      )}
      {/* <ReactDropdown
        ref={ref}
        value={_name}
        options={queues.map((q) => q.name)}
        onChange={(arg) => setName(name)}
        menuClassName="leading-8 p-2 text-lg"
        className="text-xs whitespace-nowrap tracking-tight font-bold bg-black text-white"
        controlClassName="hidden" //"btn text-sm tracking-normal font-bold bg-white text-black"
      /> */}
    </div>
  );
};

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

  const queueInfo = useUpdatableContent<IQueue[]>("/lol-game-queues/v1/queues");
  const mapInfo = useUpdatableContent<IMap[]>("/lol-maps/v1/maps");

  if (!queueInfo || !mapInfo) return <ErrorPage>Loading</ErrorPage>;

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
