import React from "react";

export const GameMode = ({
  name,
  current,
  setCurrent,
}: {
  name: string;
  current: string | null;
  setCurrent: (n: string) => void;
}) => {
  return (
    <button
      className={
        (current === name ? "btn-active" : "btn") +
        " gamemode-option text-sm tracking-normal font-bold"
      }
      onClick={() => setCurrent(name)}
    >
      {name}
    </button>
  );
};
