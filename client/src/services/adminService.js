import { json } from "react-router-dom";
import myAxios from "./myAxios";
import formatDate from "./utils";

export async function adminUploadAction({ formData }) {
  const movie = {
    title: formData.get("title"),
    duration: formData.get("duration"),
    synopsis: formData.get("synopsis"),
    date: formData.get("date"),
    classification: formData.get("classification"),
    picture: formData.get("picture"),
    URL: formData.get("movie"),
    file: formData.get("movie-file"),
  };
  try {
    await myAxios.post("/api/movies/add", movie);
    return { success: true, message: "Le film a été ajouté avec succès." };
  } catch (error) {
    return {
      success: false,
      message: "Une erreur est survenue lors de l'ajout du film.",
    };
  }
}

export async function adminEdit({ formData }) {
  const movie = {
    id: parseInt(formData.get("id"), 10),
    title: formData.get("title"),
    duration: parseInt(formData.get("duration"), 10),
    synopsis: formData.get("synopsis"),
    date: formatDate(formData.get("date")),
    classification: parseInt(formData.get("classification"), 10),
    picture: formData.get("picture"),
    URL: formData.get("URL"),
  };
  try {
    await myAxios.put(`/api/movies/${movie.id}`, movie);
    return {
      success: true,
      message: "Les informations ont été modifié avec succès",
    };
  } catch (error) {
    return {
      success: false,
      message: "Une erreur est survenue lors de la modification du film",
    };
  }
}

export async function multiFormAction({ request }) {
  const formData = await request.formData();
  const intent = formData.get("intent");
  if (intent === "post") {
    return adminUploadAction({ formData });
  }
  if (intent === "put") {
    return adminEdit({ formData });
  }
  throw json({ message: "Invalid intent" }, { status: 400 });
}

export async function movieUpload(movie) {
  try {
    await myAxios.post("/api/movies/add", movie, {
      "Content-Type": "multipart/form-data",
    });

    return { success: true, message: "Film added successfully." };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An issue occured during movie upload.",
    };
  }
}
