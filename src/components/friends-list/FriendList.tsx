import { useLCUWatch } from "@/hooks/updatableContent";
import React, { useEffect, useRef, useState } from "react";
import { FriendCard } from "./FriendCard";
import { Drawer } from "../common/Drawer";
import { Tooltip } from "../common/Tooltip";
import * as lcu from "loli-lcu-api";

const availabilities = [
  "offline",
  "mobile",
  "away",
  "chat", // in client
  "dnd", // in game/queue/champion select/clash
] as const;

type Availability = (typeof availabilities)[number];

const availabilityToNumber = (av: Availability) => {
  if (!availabilities.includes(av)) console.error("unknown availability:", av);
  return availabilities.indexOf(av);
};

export const FriendList = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (v: boolean) => void;
}) => {
  const [sortedFriendsList, setSortedFriendsList] = useState<JSX.Element[]>();
  const [friendsList, setFriendsList] = useState<JSX.Element[]>();
  const avs = useRef(new Map<string, string>());

  const friends = useLCUWatch(lcu.chat.getFriends, (err) =>
    console.error("error getting friends", err)
  );

  /**
   * Friend count is updated when a single friend is updated, use the friend
   * count in friendcard elements to update them
   */
  const friendCounts = useLCUWatch(lcu.chat.getFriendCounts, (err) =>
    console.error("error getting friend counts", err)
  );

  const getFriendCardAvNumber = (fc: JSX.Element) => {
    const num = availabilityToNumber(
      (avs.current.get(fc.key?.toString() ?? "") ?? "offline") as Availability
    );
    return num;
  };

  const createFriendsList = () => {
    setFriendsList(
      friends?.map((f) => {
        avs.current.set(f.pid, f.availability ?? "offline");
        return (
          <FriendCard
            key={f.pid}
            puuid={f.puuid}
            setAvailability={(av) => avs.current.set(f.pid, av ?? "offline")}
          />
        );
      })
    );
  };

  const reorder = () => {
    setSortedFriendsList(
      friendsList?.sort(
        (a, b) => getFriendCardAvNumber(b) - getFriendCardAvNumber(a)
      )
    );
  };

  useEffect(() => createFriendsList(), [friends]);
  useEffect(() => reorder(), [friendsList, friendCounts]);

  const toggleDrawer = () => setVisible(!visible);
  return (
    <>
      <div className="absolute w-0 h-0">
        <div
          className="relative flex flex-row transition-all w-72 h-[37rem] z-30 mt-4"
          style={{
            right: visible ? "0rem" : "18rem",
          }}
        >
          <div
            className={
              "w-full h-full overflow-clip  outline outline-1 outline-white"
              // `transition-transform z-50  ${
              //   visible ? "" : directions.get(direction)
              // } ` + className ?? ""
            }
          >
            <div className="overflow-y-scroll friends-content flex flex-col gap-0.5 bg-black h-full">
              {sortedFriendsList ?? friendsList}
            </div>
          </div>
          <div className="absolute -right-11">
            <button
              onClick={toggleDrawer}
              className="  bg-white text-black w-min p-2 m-2 ml-0 rounded-e-md z-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
              </svg>
            </button>
          </div>
        </div>

        <Tooltip
          id="status-tooltip"
          classNameExtend="absolute"
          delayShow={70}
        />
      </div>
    </>
    // {/*<Tooltip
    // id="friend-info-tooltip"
    // classNameExtend="select-all absolute  whitespace-nowrap"
    // clickable
    // place="right"
    // offset={3}
    // render={({ content, activeAnchor }) => {
    // return (
    // <ExternalLink
    // uri={`/lol-hovercard/v1/friend-info/${content}`}
    // >{`/lol-hovercard/v1/friend-info/${content}`}</ExternalLink>
    // );
    // }}
    // /> */}
  );
};
