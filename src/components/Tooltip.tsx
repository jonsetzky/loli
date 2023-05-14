import { InformationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

type ReactTooltipArgsType = Parameters<typeof ReactTooltip>[0];

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

export function Tooltip(
  props: { className?: string; classNameExtend?: string } & ReactTooltipArgsType
) {
  return (
    <ReactTooltip
      {...props}
      className={
        props.className ??
        "text-xs bg-black text-white p-2 border-[1px] " + props.classNameExtend
      }
      noArrow={props.noArrow ?? true}
      clickable={true}
    ></ReactTooltip>
  );

  //   return (
  //     <div className="group relative flex justify-center ">
  //       {props.children}
  //       <span
  //         className={
  //           "flex absolute scale-0 group-hover:scale-100 transition-all text-xs bg-black text-white p-2 overflow-hidden " +
  //           (props.className ?? "")
  //         }
  //         style={{ top: props.y, left: props.x }}
  //       >
  //         {props.message}
  //       </span>
  //     </div>
  //   );
}
