import React from "react";
import { Outlet } from "react-router-dom";

export const FullscreenNotification = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
}) => {
  return (
    <div className="absolute w-full h-screen z-[20] bg-[#000000cb]">
      <div className="grid place-content-center w-full h-screen">
        <div className=" bg-black text-white w-96 h-48 p-4 border-white border-[0.5px]">
          {children}
        </div>
      </div>
    </div>
  );
};
