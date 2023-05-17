import React from "react";
import { Link } from "react-router-dom";

export const NavbarLink = ({ to, children }: { to: string; children: any }) => {
  return (
    <Link
      className="SummonerIcon shrink uppercase text-1xl font-light text-center hover:text-glow no-drag pr-4 pl-4"
      to={to}
    >
      <div className="flex flex-col justify-center h-full">
        <p className=" shadow-white">{children}</p>
      </div>
    </Link>
  );
};
