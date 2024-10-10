import PropTypes from "prop-types";
import { Form } from "react-router-dom";

export default function AccountManagement({ user }) {
  return (
    <section className="user-account-management">
      <div className="user-information">
        <h3>Informations utilisateur</h3>
        <div className="form-group">
          <p>Email : </p>
          <p className="user-information-field">{user.email}</p>
        </div>
        <div className="form-group">
          <p>Prénom : </p>
          <p className="user-information-field">{user.firstname}</p>
        </div>
        <div className="form-group">
          <p>Nom : </p>
          <p className="user-information-field">{user.lastname}</p>
        </div>
      </div>
      <Form method="put">
        <div className="edit-user-information">
          <h3>Changer les informations utilisateur</h3>
          <div className="form-group">
            <label htmlFor="firstname">Saisissez le nouveau prénom</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              defaultValue={user.firstname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Saisissez le nouveau nom</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              defaultValue={user.lastname}
            />
          </div>
        </div>
        <button className="edit-user-button" type="submit">
          Modifier
        </button>
      </Form>
    </section>
  );
}

AccountManagement.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};
