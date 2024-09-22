import { json } from "react-router-dom";
import myAxios from "./myAxios";
import formatDate from "./utils";

export async function adminUploadAction({ formData }) {
  console.info("FormData received in adminUploadAction:", formData);

  const movie = {
    title: formData.get("title"),
    duration: formData.get("duration"),
    synopsis: formData.get("synopsis"),
    date: formData.get("date"),
    classification: formData.get("classification"),
    picture: formData.get("picture"),
    URL: formData.get("movie"),
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
  console.info("FormData received in adminEdit:", formData);

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
  console.info("multiFormAction called");

  // Lire formData une seule fois
  const formData = await request.formData();
  const intent = formData.get("intent");

  console.info("Intent:", intent);

  if (intent === "post") {
    console.info("Calling adminUploadAction");
    return adminUploadAction({ formData }); // Passer formData directement
  }

  if (intent === "put") {
    console.info("Calling adminEdit");
    return adminEdit({ formData }); // Passer formData directement
  }

  throw json({ message: "Invalid intent" }, { status: 400 });
}
