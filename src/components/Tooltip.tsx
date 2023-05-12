import { InformationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

export function Tooltip(props: {
  message: any;
  children?: any;
  x?: string;
  y?: string;
  className?: string;
}) {
  return (
    <div className="group relative flex justify-center">
      {props.children}
      <span
        className={
          "absolute scale-0 group-hover:scale-100 " +
          (props.className ?? "transition-all text-xs bg-black text-white p-2")
        }
        style={{ top: props.y, left: props.x }}
      >
        {props.message}
      </span>
    </div>
  );
}
