import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  getLogout,
  getMovies,
  getMoviesByTitle,
  getMoviesWithCategories,
  getUserById,
} from "./services/request";
import adminUploadAction from "./services/adminService";
import {
  signUpUserAction,
  editUserAction,
} from "./services/userService";
import { AuthProvider } from "./contexts/AuthContext";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import MoviesList from "./pages/MoviesList";
import Logout from "./pages/Logout";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getMoviesWithCategories,
      },
      {
        path: "/sign",
        element: <SignUp />,
        action: signUpUserAction,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
        loader: getLogout,
      },
      {
        path: "/user/:id",
        element: <User />,
        action: editUserAction,
        loader: getUserById,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
