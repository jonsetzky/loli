import { FriendCard, IFriend } from "@/components/FriendCard";
import { useUpdatableContent } from "@/updatableContent";
import React, { useEffect, useRef, useState } from "react";

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

export const Home = () => {
  const [sortedFriendsList, setSortedFriendsList] = useState<JSX.Element[]>();
  const [friendsList, setFriendsList] = useState<JSX.Element[]>();
  const avs = useRef(new Map<string, string>());

  const friends = useUpdatableContent<IFriend[]>("/lol-chat/v1/friends/", {
    update: false,
  });

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
            pid={f.pid}
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
    reorder();
  }, [friendCounts]);

  useEffect(() => {
    createFriendsList();
  }, [friends]);

  useEffect(() => {
    reorder();
  }, [friendsList]);

  return (
    <div className="h-full bg-diagonal-lines">
      <div className="flex flex-row">
        <div className="friends-content flex flex-col basis-64 m-1 gap-1">
          {sortedFriendsList ?? friendsList}
        </div>
      </div>
    </div>
  );
};
