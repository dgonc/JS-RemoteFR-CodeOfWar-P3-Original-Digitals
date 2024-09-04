import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import myAxios from "./services/myAxios";
import getMovies from "./services/request";
import MoviesList from "./pages/MoviesList";

import App from "./App";
import User from "./pages/User";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign",
        element: <SignUp />
      },
      {
        path: "/users",
        element: <User />,
        loader: async () => {
          const response = await myAxios.get("/api/users");
          return response.data;
        },
        action: async ({request}) => {
        const formData = await request.formData();
        const user = {
          email: formData.get("email"),
          password: formData.get("password"),
          firstname: formData.get("firstname"),
          lastname: formData.get("lastname")
        };
        const response = await myAxios.post("/api/users", user);
        return redirect(`/users/${response.data.insertId}`)
      }
    },
    ],
  },
  {
    path: "/movies",
    element: <MoviesList />,
    loader: getMovies,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
