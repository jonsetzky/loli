import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Navbar } from "./components/navbar/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  LoaderFunction,
  useLoaderData,
} from "react-router-dom";
import { TestRoute } from "./routes/Test";
import { ClientStatus } from "./ClientStatus";
import { Root } from "./routes/Root";
import { ClientStatus as IClientStatus } from "electron/main/lcu/client";
import { Home } from "./routes/Home";
import { Setups } from "./routes/Setups";
import { Playground } from "./routes/Playground";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <>sussy not found</>,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/test",
        element: <TestRoute />,
      },
      {
        path: "/setups",
        element: <Setups />,
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
