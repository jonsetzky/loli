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
  "online", // doesn't exist?
] as const;

type Availability = (typeof availabilities)[number];

const availabilityToNumber = (av: Availability) => {
  if (!availabilities.includes(av)) console.error("unknown availability:", av);
  return availabilities.indexOf(av);
};

export const Home = () => {
  const [friendsList, setFriendsList] = useState<JSX.Element[]>();
  const avs = useRef(new Map<string, string>());

  const friends = useUpdatableContent<IFriend[]>(
    "/lol-chat/v1/friends/",
    false
  );

  const updateFriendsList = () => {
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
    friendsList?.sort((a, b) => {
      return (
        availabilityToNumber(
          (avs.current.get(b.key?.toString() ?? "") ??
            "offline") as Availability
        ) -
        availabilityToNumber(
          (avs.current.get(a.key?.toString() ?? "") ??
            "offline") as Availability
        )
      );
    });
  };

  /**
   * Friend count is updated when a single friend is updated, use the friend
   * count in friendcard elements to update them
   */
  const friendCounts = useUpdatableContent<IFriendCounts>(
    "/lol-chat/v1/friend-counts",
    true,
    () => reorder()
  );

  useEffect(() => {
    reorder();
  }, [friendsList, friendCounts]);

  useEffect(() => {
    updateFriendsList();
  }, []);

  return (
    <div className="h-full bg-diagonal-lines">
      <div className="flex flex-row">
        <div className="friends-content flex flex-col basis-64 m-1 gap-1">
          {friendsList}
        </div>
      </div>
    </div>
  );
};
