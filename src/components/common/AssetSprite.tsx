import React from "react";

type ImageInfo = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

const px = (n: number) => `${n}px`;

export const AssetSprite = ({
  full,
  sprite,
  group,
  x,
  y,
  w,
  h,
  scale,
  ...p
}: ImageInfo & { scale?: number } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={{
        height: px(h),
        width: px(w),
        backgroundImage: `url('/dragontail/latest/img/sprite/${sprite}')`,
        backgroundPositionX: px(-x),
        backgroundPositionY: px(-y),
        zoom: scale ?? 1,
      }}
      {...p}
    ></div>
  );
};
