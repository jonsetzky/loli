import React from "react";

const directions = new Map<string, string>([
  ["left", "translate-x-[-100%]"],
  ["right", "translate-x-[100%]"],
  ["up", "translate-y-[-100%]"],
  ["down", "translate-y-[100%]"],
]);

export const Drawer = ({
  children,
  visible,
  direction = "right",
  className,
  baseClassName,
}: {
  children?: any;
  visible?: boolean;
  direction?: "left" | "right" | "up" | "down";
  baseClassName?: string;
  className?: string;
}) => {
  return (
    <div
      className={
        "relative w-full h-full "
        // `transition-transform z-50  ${
        //   visible ? "" : directions.get(direction)
        // } ` + className ?? ""
      }
    >
      {children}
    </div>
  );
};
