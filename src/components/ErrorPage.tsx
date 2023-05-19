import React from "react";

export const ErrorPage = ({ children }: any) => {
  return (
    <div className="grid uppercase font-bold tracking-wider h-full w-full bg-black text-white text-3xl place-content-center no-drag place-items-center">
      {children}
    </div>
  );
};
