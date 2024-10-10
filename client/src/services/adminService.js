import myAxios from "./myAxios";

export async function adminEdit(movie) {
  try {
    await myAxios.put(`/api/movies/${movie.id}`, movie);
    return {
      success: true,
      message: "Les informations ont été modifié avec succès.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Une erreur est survenue lors de la modification du film.",
    };
  }
}

export async function movieUpload(movie) {
  try {
    await myAxios.post("/api/movies/add", movie, {
      "Content-Type": "multipart/form-data",
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'ajout du film.",
    };
  }
}
