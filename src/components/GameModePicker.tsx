import React from "react";
import { FullscreenNotification } from "./FullscreenNotification";
import { useUpdatableContent } from "@/updatableContent";
import { IQueue } from "@/routes/Lobby";
import { ErrorPage } from "./ErrorPage";

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

export const GameModePicker = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (v: boolean) => void;
}) => {
  if (!visible) return <></>;
  const queueInfo = useUpdatableContent<IQueue[]>("/lol-game-queues/v1/queues");
  const mapInfo = useUpdatableContent<IMap[]>("/lol-maps/v1/maps");

  if (!queueInfo || !mapInfo) return <ErrorPage>Loading</ErrorPage>;

  const allAvailableQueues = queueInfo?.filter(
    (q) => q.queueAvailability === "Available"
  );

  const tutorialQueues = allAvailableQueues.filter((q) =>
    q.gameMode.match(/tutorial/i)
  );
  const realQueues = allAvailableQueues.filter(
    (q) => !q.gameMode.match(/tutorial/i)
  );

  const gameModes = realQueues.reduce<string[]>(
    (prev, current) =>
      prev.includes(current.gameMode) ? prev : [...prev, current.gameMode],
    []
  );

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

  return (
    <div
      className="absolute w-screen h-screen z-50 bg-[#000000cb]"
      onClick={() => setVisible(false)}
    >
      <div className="grid place-content-center w-full h-screen">
        <div
          className="bg-black text-white p-4 border-white border-[0.5px] flex-col gap-2 min-w-[360px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="settings-header flex flex-row justify-start uppercase">
            <h1 className="text-3xl">Select game mode</h1>
          </div>
          <div className="flex flex-col gap-1">
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

            {gameModes.map((gm) => (
              <Label text={gm} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
