import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

export async function signUpUserAction({ request }) {
  const formData = await request.formData();
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
  };
  const response = await myAxios.post("api/sign", user);

  if (response.status === 201) {
    return redirect("/");
  }
  return console.info(response);
}

export async function loginUserAction({ request }) {
  const formData = await request.formData();
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const response = await myAxios.post("api/login", user);
  if (response.status === 401) {
    return redirect("/");
  }
  return console.info(response);
}
