import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

export async function signUpUserAction({ request }) {
  try {
    const formData = await request.formData();
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
    };

    const response = await myAxios.post("api/sign", user);

    if (response.status === 201) {
      return redirect("/login");
    }
  } catch (error) {
    console.error("Error during sign up:", error);
  }
  return null;
}

export async function loginUserAction(user) {
  try {
    const response = await myAxios.post("api/login", user);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }

  return null;
}

export async function editUserAction({ request }) {
  try {
    const formData = await request.formData();
    const user = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
    };
    const response = await myAxios.put("/api/user", user);

    if (response.status === 204) {
      return redirect("/user");
    }
  } catch (error) {
    console.error("Error during update", error);
  }
  return null;
}
