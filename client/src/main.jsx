import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getMovies from "./services/request";

import App from "./App";
import LandingPage from "./components/LandingPage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    loader: getMovies,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
