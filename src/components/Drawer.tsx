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
  childClassName,
  className,
}: {
  children?: any;
  visible?: boolean;
  direction?: "left" | "right" | "up" | "down";
  childClassName?: string;
  className?: string;
}) => {
  return (
    <div className={" " + className}>
      <div
        className={
          `transition-transform  ${visible ? "" : directions.get(direction)} ` +
            childClassName ?? ""
        }
      >
        {children}
      </div>
    </div>
  );
};
