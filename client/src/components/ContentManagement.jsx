import { useState } from "react";
import { movieUpload } from "../services/adminService";

export default function ContentManagement() {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [date, setDate] = useState("");
  const [classification, setClassification] = useState("");
  const [picture, setPicture] = useState("");
  const [URL, setURL] = useState("");
  const [file, setFile] = useState(null);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };
  const handleChangeSynopsis = (event) => {
    setSynopsis(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  const handleChangeClassification = (event) => {
    setClassification(event.target.value);
  };
  const handleChangePicture = (event) => {
    setPicture(event.target.value);
  };
  const handleChangeMovieUrl = (event) => {
    setURL(event.target.value);
  };
  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
  };

  const sendMovie = async () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("duration", duration);
    formData.append("synopsis", synopsis);
    formData.append("date", date);
    formData.append("classification", classification);
    formData.append("picture", picture);
    formData.append("URL", URL);
    formData.append("file", file);

    try {
      const response = await movieUpload(formData);
      if (response) {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="form-upload">
      <div className="form-group-upload">
        <label htmlFor="title">Titre</label>{" "}
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Saisir le titre"
          onChange={handleChangeTitle}
        />
      </div>
      <div className="form-group-upload">
        <label htmlFor="duration">Durée (en minutes)</label>{" "}
        <input
          type="number"
          id="duration"
          name="duration"
          placeholder="Entrer la durée"
          onChange={handleChangeDuration}
        />
      </div>
      <div className="form-group-upload">
        <label htmlFor="synopsis">Synopsis</label>{" "}
        <input
          type="text"
          id="synopsis"
          name="synopsis"
          placeholder="Saisir le synopsis"
          onChange={handleChangeSynopsis}
        />
      </div>
      <div className="form-group-upload">
        <label htmlFor="date">Date de sortie</label>{" "}
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Date de sortie"
          onChange={handleChangeDate}
        />
      </div>
      <div className="form-group-upload">
        <label htmlFor="classification">Classification (age minimum)</label>{" "}
        <input
          type="number"
          id="classifaction"
          name="classification"
          placeholder="classifaction"
          onChange={handleChangeClassification}
        />
      </div>
      <div className="form-group-upload">
        <label htmlFor="picture">Image ou poster</label>{" "}
        <input
          type="url"
          id="picture"
          name="picture"
          placeholder="Lien de l'image ou du poster"
          onChange={handleChangePicture}
        />
      </div>
      <div className="form-group-upload-file">
        <label htmlFor="URL">Film</label>{" "}
        <div className="form-group-upload-file-button">
          <input
            type="url"
            id="movie-url"
            name="movie-url"
            placeholder="Lien ou URL du film"
            onChange={handleChangeMovieUrl}
          />
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChangeFile}
          />
        </div>
      </div>
      <button
        className="button-upload"
        type="submit"
        name="intent"
        value="post"
        onClick={sendMovie}
      >
        Créer
      </button>
    </section>
  );
}
