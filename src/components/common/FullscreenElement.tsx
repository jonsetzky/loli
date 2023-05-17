import React from "react";

export const FullscreenElement = ({
  children,
  className,
  ...p
}: { children: any } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={"absolute top-0 left-0 w-screen h-screen " + className}
      {...p}
    >
      {children}
    </div>
  );
};
