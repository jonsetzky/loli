import React from "react";

export const ContextMenuListItem = ({ children }: { children: any }) => {
  return (
    <div className="p-1 pt-0.5 pb-0.5 tracking-wide font-light hover:bg-neutral-800 active:bg-white active:text-black active:font-semibold">
      {children}
    </div>
  );
};
