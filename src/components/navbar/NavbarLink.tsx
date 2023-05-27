import React from "react";
import { Link } from "react-router-dom";

export const NavbarLink = ({ to, children }: { to: string; children: any }) => {
  return (
    <Link
      className="shrink uppercase text-1xl font-medium text-center text-neutral-300 hover:text-white hover:text-glow no-drag pr-4 pl-4"
      to={to}
    >
      <div className="flex flex-col justify-center h-full">
        <p className=" shadow-white">{children}</p>
      </div>
    </Link>
  );
};
