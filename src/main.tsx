import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Navbar } from "./components/navbar/Navbar";
import {
  createHashRouter,
  RouterProvider,
  Outlet,
  LoaderFunction,
  useLoaderData,
  useRouteError,
  useRouteLoaderData,
  useLocation,
  NavLink,
  Link,
} from "react-router-dom";
import { Play } from "./routes/Play";
import { Root } from "./routes/Root";
import { Home } from "./routes/Home";
import { Setups } from "./routes/Setups";
import { Playground } from "./routes/Playground";
import { Lobby } from "./components/lobby/Lobby";
import { ChampSelect } from "./components/champ-select/ChampSelect";
import { ErrorPage } from "./components/ErrorPage";
import { InProgress } from "./components/InProgress";
import { PreEndOfGame } from "./components/PreEndOfGame";
import { EndOfGame } from "./components/EndOfGame";

const ErrorElement = () => {
  const loc = useLocation();
  const err = useRouteError();
  console.log(err);
  return (
    <ErrorPage>
      <div className="flex flex-col">
        <div>{(err as any).data}</div>
        <div>
          <Link to="/" className="btn">
            Go to Home
          </Link>
        </div>
      </div>
    </ErrorPage>
  );
};

const router = createHashRouter([
  {
    path: "/",
    errorElement: <ErrorElement />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/test",
        element: <Play />,
        children: [
          {
            path: "lobby",
            element: <Lobby />,
          },
          {
            path: "champselect",
            element: <ChampSelect />,
          },
          {
            path: "inprogress",
            element: <InProgress />,
          },
          {
            path: "preendofgame",
            element: <PreEndOfGame />,
          },
          {
            path: "endofgame",
            element: <EndOfGame />,
          },
        ],
      },
      {
        path: "/setups",
        element: <Setups />,
        children: [
          {
            path: "champions",
          },
        ],
      },
      {
        path: "/playground",
        element: <Playground />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
