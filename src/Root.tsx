import React, { useEffect, useRef, useState } from "react";
import { ClientStatus as IClientStatus } from "electron/main/lcu/client";
import { ClientStatus } from "./ClientStatus";
import { Navbar } from "./Navbar";
import { Outlet, useRevalidator } from "react-router-dom";
import { Lockfile } from "electron/main/lcu/lockfile";

export const Root = () => {
  return (
    <>
      <ClientStatus />
      <div className="flex flex-col h-full">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
