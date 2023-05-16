import React from "react";

export const ContextMenuList = ({ children }: { children?: any }) => {
  return (
    <div className="flex flex-col min-w-[6rem] divide-y-[1px] divide-neutral-700 ">
      {children}
    </div>
  );
};
