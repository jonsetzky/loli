import React from "react";
import { Tooltip } from "./common/Tooltip";

export const RoleIcon = (
  props: {
    position: string;
    invert?: boolean;
    opacity?: number;
  } & React.ImgHTMLAttributes<HTMLImageElement>
) => {
  const { position, invert, opacity, ...p } = props;
  return (
    <>
      <Tooltip anchorSelect="">position</Tooltip>
      <img
        {...p}
        src={`./positions/position-${position.toLowerCase()}.svg`}
        style={{
          filter: `brightness(${invert ? "1" : "0"}) grayscale(100%)`,
          opacity: opacity,
        }}
      />
    </>
  );
};
