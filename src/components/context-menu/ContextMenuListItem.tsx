import React, { useContext } from "react";
import { CTXContextMenuVisibility } from "./ContextMenu";

export const ContextMenuListItem = ({
  children,
  onClick,
  ...p
}: { children?: any } & React.HTMLAttributes<HTMLDivElement>) => {
  const ctx = useContext(CTXContextMenuVisibility);

  if (!children) return <>n/a</>;
  return (
    <div
      className="p-1 pt-0.5 pb-0.5 tracking-wide font-light hover:bg-neutral-800 active:bg-white active:text-black active:font-semibold"
      onClick={(e) => {
        if (onClick) onClick(e);
        ctx.setVisible(false);
      }}
      {...p}
    >
      {children}
    </div>
  );
};
