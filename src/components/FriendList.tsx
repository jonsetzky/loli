import { useUpdatableContent } from "@/updatableContent";
import React, { useEffect, useRef, useState } from "react";
import { FriendCard, IFriend } from "./FriendCard";
import { Drawer } from "./Drawer";
import { Tooltip } from "./Tooltip";
import { useRootContext } from "@/routes/Root";
import { ExternalLink } from "@/ExternalLink";
import { ErrorPage } from "./ErrorPage";

interface IFriendCounts {
  numFriends: number;
  numFriendsAvailable: number;
  numFriendsAway: number;
  numFriendsInChampSelect: number;
  numFriendsInGame: number;
  numFriendsInQueue: number;
  numFriendsMobile: number;
  numFriendsOnline: number;
}

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

  const friends = useUpdatableContent<IFriend[]>("/lol-chat/v1/friends");

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

  /**
   * Friend count is updated when a single friend is updated, use the friend
   * count in friendcard elements to update them
   */
  const friendCounts = useUpdatableContent<IFriendCounts>(
    "/lol-chat/v1/friend-counts",
    { onUpdate: () => reorder() }
  );

  useEffect(() => {
    createFriendsList();
  }, [friends]);

  useEffect(() => {
    reorder();
  }, [friendsList, friendCounts]);

  const toggleDrawer = () => setVisible(!visible);
  return (
    <div className="absolute">
      <div className="flex flex-row flex-1 w-72">
        <Drawer
          visible={visible}
          direction="left"
          className="w-full h-[80vh]"
          childClassName="h-full"
        >
          <button
            onClick={toggleDrawer}
            className="absolute right-[-14%] bg-white text-black w-min p-2 m-2 ml-0 rounded-e-md"
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
          <div className=" overflow-y-scroll friends-content flex flex-col m-1 gap-1 bg-black h-full">
            {sortedFriendsList ?? friendsList}
          </div>
        </Drawer>
        <Tooltip
          id="status-tooltip"
          classNameExtend="absolute"
          delayShow={70}
        />
        {/*<Tooltip
          id="friend-info-tooltip"
          classNameExtend="select-all absolute  whitespace-nowrap"
          clickable
          place="right"
          offset={3}
          render={({ content, activeAnchor }) => {
            return (
              <ExternalLink
                uri={`/lol-hovercard/v1/friend-info/${content}`}
              >{`/lol-hovercard/v1/friend-info/${content}`}</ExternalLink>
            );
          }}
        /> */}
      </div>
    </div>
  );
};
