import myAxios from "./myAxios";

export async function adminUploadAction({ request }) {
  const formData = await request.formData();
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

export async function adminEdit({ request }) {
  const formData = await request.formData();
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
    await myAxios.put("/movies/:id", movie);
    return {
      sucess: true,
      message: "Les informations ont été modifié avec succès",
    };
  } catch (error) {
    return {
      success: false,
      message: "Une erreur est survenue lors de la modification du film",
    };
  }
}
