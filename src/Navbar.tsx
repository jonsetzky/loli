import React, { useEffect, useState } from "react";
import { XMarkIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Lockfile } from "electron/main/lcu/lockfile";
import { ISummoner } from "electron/main/lcu/summoner";
import { Link } from "react-router-dom";
import { Tooltip } from "./components/Tooltip";

export const Navbar = () => {
  const [summonerImg, setSummonerImg] = useState<string>();
  const [summoner, setSummoner] = useState<ISummoner>();
  const [lockfile, setLockfile] = useState<Lockfile>();

  const fetchImage = async () => {
    const img = await window.electron.getLcuAsset(
      `/lol-game-data/assets/v1/profile-icons/${
        summoner?.profileIconId ?? "29"
      }.jpg`
    );
    setSummonerImg(img);
  };

  useEffect(() => {
    window.electron.onUpdateLcuUri(
      "/lol-summoner/v1/current-summoner",
      (e, newSummoner) => setSummoner(newSummoner)
    );
    window.electron
      .getLcuUri("/lol-summoner/v1/current-summoner")
      .then((newSummoner: ISummoner) => setSummoner(newSummoner));

    setInterval(() => {
      window.electron.getLockfile().then((lf) => setLockfile(lf));
    }, 1000);
    window.electron.getLockfile().then((lf) => setLockfile(lf));
  }, []);

  useEffect(() => {
    fetchImage();
  }, [summoner]);

  return (
    <>
      <div className="Navbar bg-black text-white flex flex-row">
        <div className="SummonerIcon w-[96px]">
          <img
            className="object-scale-down h-[96px]"
            style={{ maxWidth: 96 }}
            src={summonerImg !== undefined ? `data:;base64,${summonerImg}` : ""}
          />
          <div className="XpProgressBar relative">
            <div className="absolute w-[96px] h-[4px] bg-cyan-900 bottom-0">
              <div
                className={`absolute h-[4px] bg-cyan-400 bottom-0`}
                style={{ width: summoner?.percentCompleteForNextLevel }}
              ></div>
              <div className="relative flex justify-center tracking-wide bottom-3.5 text-sm select-none">
                <div />
                <Tooltip
                  className="text-[10px] bg-black text-white pr-1 pl-1 whitespace-nowrap "
                  y={"17px"}
                  message={
                    <>
                      {summoner?.xpSinceLastLevel}
                      {" / "}
                      {summoner?.xpUntilNextLevel}
                      {" xp"}
                    </>
                  }
                >
                  <p className="font-outline-1">{summoner?.summonerLevel}</p>
                </Tooltip>
                <div />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="SummonerIcon w-16 bg-green-600" /> */}
        <div id="drag-region" className="flex flex-row grow">
          <Link
            className="shrink uppercase text-1xl font-light text-center hover:text-glow no-drag pr-4 pl-4"
            to="/"
          >
            <div className="flex flex-col justify-center h-full">
              <p className=" shadow-white">Home</p>
            </div>
          </Link>
          <Link
            className="SummonerIcon shrink uppercase text-1xl font-light text-center hover:text-glow no-drag pr-4 pl-4"
            to="/test"
          >
            <div className="flex flex-col justify-center h-full">
              <p className=" shadow-white">Test</p>
            </div>
          </Link>
          <div className="SummonerIcon grow bg-blue-600 mt-12" />
          <div className="absolute top-0 right-0 grid grid-flow-col p-1 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-6 h-6 translate-y-[2px] cursor-pointer stroke-white hover:stroke-slate-300"
              onClick={() => {
                window.electron.windowMinimize();
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-6 h-6 scale-[0.8] cursor-pointer stroke-white hover:stroke-slate-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="flex flex-col">
              <XMarkIcon
                className="h-6 w-6 stroke-white cursor-pointer hover:stroke-slate-400"
                onClick={() => {
                  console.log("exiting");
                  window.electron.quit();
                }}
              />

              <Tooltip
                x="-18rem"
                message={
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
                            lockfile
                          )
                        ).map((e) => (
                          <tr key={e[0]}>
                            <td className="select-none text-gray-400 text-right tracking-tighter pr-1">
                              {e[0]
                                .replace(/password/, "pwd")
                                .replace(/protocol/, "proto")}
                            </td>
                            <td className="select-all" draggable="false">
                              {String(e[1])}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                }
              >
                <InformationCircleIcon className="h-6 w-6 cursor-help scale-75" />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="SummonerIcon basis-24 bg-black-600" />
      </div>
    </>
    // <div
    //   id="drag-region"
    //   className="Navbar h-24 bg-black text-white draggable flex flex-row"
    // >
    //   <div className="w-24 grid place-content-center">
    //     <div className="SummonerIcon w-16 h-16 bg-white" />
    //     {/* <div className="SummonerIcon w-16 h-16 bg-yellow-700 rounded-full" /> */}
    //   </div>
    //   Navbar
    // </div>
  );
};
