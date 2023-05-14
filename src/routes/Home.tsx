import { FriendCard, IFriend } from "@/components/FriendCard";
import { updatableContent } from "@/updatableContent";
import React, { useEffect, useState } from "react";

const availabilities = [
  "offline",
  "mobile",
  "away",
  "chat",
  "dnd", // in game?
  "online", // doesn't exist?
] as const;

type Availability = (typeof availabilities)[number];

const availabilityToNumber = (av: Availability) => {
  if (!availabilities.includes(av)) console.error("unknown availability:", av);
  return availabilities.indexOf(av);
};

export const Home = () => {
  const friends = updatableContent<IFriend[]>("/lol-chat/v1/friends/", false);

  return (
    <div className="h-full bg-diagonal-lines">
      <div className="flex flex-row">
        <div className="friends-content flex flex-col basis-64 m-1 gap-1">
          {friends
            ?.sort(
              (a, b) =>
                availabilityToNumber(b.availability as Availability) -
                availabilityToNumber(a.availability as Availability)
            )
            .map((f) => (
              <FriendCard pid={f.pid} />
            ))}
        </div>
      </div>
    </div>
  );
};
