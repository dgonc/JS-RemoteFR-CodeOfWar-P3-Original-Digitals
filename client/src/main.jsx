import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getMovies, getUsers, getMoviesByTitle } from "./services/request";
import MoviesList from "./pages/MoviesList";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import signUpUserAction from "./services/userService";
import adminUploadAction from "./services/adminService";
import Home from "./pages/Home";

import AdminPanel from "./pages/AdminPanel";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign",
        element: <SignUp />,
        action: signUpUserAction,
      },
      {
        path: "/users",
        element: <User />,
        loader: getUsers,
      },
      {
        path: "/movies",
        element: <MoviesList />,
        loader: getMovies,
      },
      {
        path: `/movies/search/:title`,
        element: <MoviesList />,
        loader: getMoviesByTitle,
      },
      {
        path: "/landing",
        element: <LandingPage />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
        action: adminUploadAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
