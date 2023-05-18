import { IQueue } from "@/components/lobby/Lobby";
import { useState } from "react";
import { Drawer } from "../common/Drawer";

export const GameModeQueue = ({
  queue,
  onSelect,
}: {
  queue: IQueue;
  onSelect: (queueId: number) => void;
}) => {
  const [arrowVisible, setArrowVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  return (
    <div
      className="text-xl p-0.5 relative w-full"
      onMouseEnter={() => setArrowVisible(true)}
      onMouseLeave={() => setArrowVisible(false)}
      onClick={() => {
        onSelect(queue.id);
        setPressed(true);
      }}
    >
      <div className="absolute left-[-0.8rem]">{arrowVisible ? ">" : " "}</div>
      <Drawer visible={!pressed} direction="right" className="overflow-clip">
        {queue.description}
      </Drawer>
    </div>
  );
};
