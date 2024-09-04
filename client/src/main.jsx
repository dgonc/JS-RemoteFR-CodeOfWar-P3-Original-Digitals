import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getMovies from "./services/request";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: getMovies,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
