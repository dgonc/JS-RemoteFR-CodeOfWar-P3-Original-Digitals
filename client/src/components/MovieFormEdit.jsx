import PropTypes from "prop-types";
import { Form, useActionData } from "react-router-dom";

export default function MovieFormEdit({ movies }) {
  const actionData = useActionData();

  return (
    <Form method="put">
      <section className="form-upload">
        <div className="form-group-upload">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={movies.title}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            defaultValue={movies.duration}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="synopsis">Synopsis</label>
          <input
            type="text"
            id="synopsis"
            name="synopsis"
            defaultValue={movies.synopsis}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="date">Release date</label>
          <input type="date" id="date" name="date" defaultValue={movies.date} />
        </div>
        <div className="form-group-upload">
          <label htmlFor="classification">Classification</label>
          <input
            type="number"
            id="classification"
            name="classification"
            defaultValue={movies.classification}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="picture">Picture</label>
          <input
            type="url"
            id="picture"
            name="picture"
            defaultValue={movies.picture}
          />
        </div>
        <div className="form-group-upload">
          <label htmlFor="URL">Movie URL</label>
          <input type="url" id="movie" name="movie" defaultValue={movies.URL} />
        </div>
        <button className="button-upload" type="submit">
          Envoyer
        </button>
        {actionData?.success && (
          <p style={{ color: "green" }}>{actionData.message}</p>
        )}
        {actionData?.success === false && (
          <p style={{ color: "red" }}>{actionData.message}</p>
        )}
      </section>
    </Form>
  );
}

MovieFormEdit.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    classification: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
  }).isRequired,
};
