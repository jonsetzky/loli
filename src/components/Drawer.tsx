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
  const leftRight =
    direction === "left"
      ? "-translate-x-"
      : direction === "right"
      ? "translate-x-"
      : null;

  const upDown =
    direction === "up"
      ? "-translate-y-"
      : direction === "down"
      ? "translate-y-"
      : null;

  const dirStr = leftRight ?? upDown;
  console.log(directions.get(direction));

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
