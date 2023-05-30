import React, { useEffect, useState } from "react";
import { XMarkIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Lockfile } from "electron/main/lcu/lockfile";
import { Link } from "react-router-dom";
import { Tooltip } from "../common/Tooltip";
import { NavbarLink } from "./NavbarLink";
import { AssetImage } from "../common/AssetImage";
import { useSetting } from "../../hooks/settings";
import { Settings } from "../../routes/Settings";
import { NavbarSummonerIcon } from "./NavbarSummonerIcon";
import { fetchLCU, useLCUWatch } from "@/hooks/updatableContent";
// import { Tooltip } from "react-tooltip";

import * as lcu from "loli-lcu-api";

export const Navbar = () => {
  const [testVisible, setTestVisible] = useSetting("testSetting");
  const [settingsVisible, setSettingsVisible] = useState(false);

  const summoner = useLCUWatch(lcu.summoner.getCurrentSummoner);

  // const summoner = useLCUWatch((conn) => lcu.summoner.getCurrentSummoner(conn));

  const [lockfile, setLockfile] = useState<Lockfile>();

  useEffect(() => {
    setInterval(() => {
      window.electron.getLockfile().then((lf) => setLockfile(lf));
    }, 1000);
    window.electron.getLockfile().then((lf) => setLockfile(lf));
  }, []);

  return (
    <>
      <Settings visible={settingsVisible} setVisible={setSettingsVisible} />
      <div className="Navbar bg-black text-white flex flex-row z-40 h-24">
        <NavbarSummonerIcon summoner={summoner} />
        <div id="drag-region" className="flex flex-row grow">
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/test">Play</NavbarLink>
          <NavbarLink to="/playground">Playground</NavbarLink>
          <NavbarLink to="/setups">Setups</NavbarLink>
          <button className="grid place-content-center h-full p-5">
            <div
              className="btn text-xs whitespace-nowrap p-2 font-bold"
              onClick={() => setTestVisible(!testVisible)}
            >
              test
            </div>
          </button>
          {testVisible ? <div className="grow bg-blue-600 mt-12" /> : <></>}
          <div className="navbar-control-buttons absolute top-0 right-0 grid grid-flow-col p-1 gap-2 z-[400]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6  cursor-pointer"
              onClick={() => {
                window.electron.windowMinimize();
              }}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 translate-y-1 cursor-pointer"
              onClick={() => {
                setSettingsVisible(!settingsVisible);
              }}
            >
              <path
                fillRule="evenodd"
                d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>

            <div className="flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer translate-y-[1px]"
                onClick={() => {
                  console.log("exiting");
                  window.electron.quit();
                }}
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="lockfile-information-circle w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                  clipRule="evenodd"
                />
              </svg>
              <Tooltip
                anchorSelect=".lockfile-information-circle"
                data-tooltip-place="left"
                classNameExtend="absolute"
                clickable
              >
                {" "}
                <>
                  <h1 className="text-bold select-none text-sm">
                    LOL Client lockfile
                  </h1>
                  <table>
                    <tbody>
                      {Object.entries(
                        Object.assign(
                          {
                            auth: btoa(`riot:${lockfile?.password ?? ""}`),
                          },
                          lockfile ?? {}
                        )
                      ).map((e) => (
                        <tr key={e[0]}>
                          <td className="select-none text-gray-400 text-right tracking-tighter pr-1">
                            {e[0]
                              .replace(/password/, "pwd")
                              .replace(/protocol/, "proto")}
                          </td>
                          <td
                            className="select-all"
                            draggable="false"
                            onClick={() =>
                              navigator.clipboard.writeText(String(e[1]))
                            }
                          >
                            {String(e[1])}
                          </td>
                        </tr>
                      ))}
                      <tr key="link">
                        <td className="select-none text-gray-400 text-right tracking-tighter pr-1">
                          in browser
                        </td>
                        <td>
                          <a
                            href="/riotclient/app-name"
                            className="text-blue-600 underline"
                            onClick={(e) => {
                              e.preventDefault();
                              window.electron.openExternal(
                                "/riotclient/app-name"
                              );
                            }}
                          >
                            /riotclient/app-name
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="basis-24 bg-black-600" />
      </div>
    </>
    // <div
    //   id="drag-region"
    //   className="Navbar h-24 bg-black text-white draggable flex flex-row"
    // >
    //   <div className="w-24 grid place-content-center">
    //     <div className="w-16 h-16 bg-white" />
    //     {/* <div className="w-16 h-16 bg-yellow-700 rounded-full" /> */}
    //   </div>
    //   Navbar
    // </div>
  );
};
