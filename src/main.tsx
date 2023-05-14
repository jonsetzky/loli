import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Navbar } from "./Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  LoaderFunction,
  useLoaderData,
} from "react-router-dom";
import { TestRoute } from "./routes/Test";
import { ClientStatus } from "./ClientStatus";
import { Root } from "./Root";
import { ClientStatus as IClientStatus } from "electron/main/lcu/client";
import { Home } from "./routes/Home";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
