import React, { useEffect, useState } from "react";
import { XMarkIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  const [summoner, setSummoner] = useState(null);

  useEffect(() => {
    window.electron.ipcRenderer.invoke("getLocalSummoner").then((s) => {
      //   console.log(s);
      setSummoner(s);
    });
  }, []);

  return (
    <>
      <div
        id="drag-region"
        className="Navbar h-24 bg-black text-white flex flex-row gap-4 p-4"
      >
        <img
          className="object-scale-down SummonerIcon w-16 rounded-full border-2"
          style={{ maxWidth: 64 }}
          src={`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/${
            summoner?.profileIconId ?? "29"
          }.png`}
        />
        {/* <div className="SummonerIcon w-16 bg-green-600" /> */}
        <div className="SummonerIcon grow bg-red-600" />
        <div className="SummonerIcon grow bg-blue-600" />
        <div className="SummonerIcon w-16 bg-black-600" />
        <div className="absolute top-0 right-0 grid grid-flow-col p-1 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 translate-y-[2px] cursor-pointer stroke-white hover:stroke-slate-300"
            onClick={() => {
              window.electron.ipcRenderer.invoke("window:minimize");
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
          <XMarkIcon
            className="h-6 w-6 stroke-white cursor-pointer hover:stroke-slate-400"
            onClick={() => {
              console.log("exiting");
              window.electron.ipcRenderer.invoke("quit");
            }}
          />
        </div>
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
