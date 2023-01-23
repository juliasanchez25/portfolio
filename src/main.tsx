import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from './routes/Navbar';
import MainTitle from './routes/MainTitle';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Navbar />
      },
      {
        path: "/",
        element: <MainTitle />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
