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
  const [file, setFile] = useState("");

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

  const sendMovie = async (event) => {
    event.preventDefault();
    
    const movie = {
      title,
      duration,
      synopsis,
      date,
      classification,
      picture,
      URL,
      file
    };

    try {
      console.info(movie)
      const response = await movieUpload(movie);
      if (response) {
        console.info("done", movie);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="form-upload">
      <form onSubmit={sendMovie}>
        <div className="form-group-upload">
          <label htmlFor="title">Title</label>{" "}
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your title"
            value={title}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="duration">Duration</label>{" "}
          <input
            type="number"
            id="duration"
            name="duration"
            placeholder="Enter your duration"
            value={duration}
            onChange={handleChangeDuration}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="synopsis">Synopsis</label>{" "}
          <input
            type="text"
            id="synopsis"
            name="synopsis"
            placeholder="Enter your synopsis"
            value={synopsis}
            onChange={handleChangeSynopsis}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="date">Release date</label>{" "}
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Release date"
            value={date}
            onChange={handleChangeDate}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="classification">Classification</label>{" "}
          <input
            type="number"
            id="classifaction"
            name="classification"
            placeholder="classifaction"
            value={classification}
            onChange={handleChangeClassification}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="picture">Picture</label>{" "}
          <input
            type="url"
            id="picture"
            name="picture"
            placeholder="upload a picture"
            value={picture}
            onChange={handleChangePicture}
          />
        </div>
        <div className="form-group-upload-file">
          <label htmlFor="URL">Movie</label>{" "}
          <div className="form-group-upload-file-button">
            <input
              type="url"
              id="movie-url"
              name="movie-url"
              placeholder="Enter your movie URL"
              value={URL}
              onChange={handleChangeMovieUrl}
            />
            <input
              type="file"
              id="movie-file"
              name="movie-file"
              onChange={handleChangeFile}
            />
          </div>
        </div>
        <button
          className="button-upload"
          type="submit"
          name="intent"
          value="post"
        >
          Create
        </button>
      </form>
    </section>
  );
}
