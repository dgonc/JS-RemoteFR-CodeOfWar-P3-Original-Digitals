import PropTypes from "prop-types";
import { Form } from "react-router-dom";

export default function AccountManagement({ user }) {
  return (
    <section className="user-account-management">
      <div className="user-information">
        <h3>User Information</h3>
        <div className="form-group">
          <p>Email : </p>
          <p className="user-information-field">{user.email}</p>
        </div>
        <div className="form-group">
          <p>Firstname : </p>
          <p className="user-information-field">{user.firstname}</p>
        </div>
        <div className="form-group">
          <p>Lastname : </p>
          <p className="user-information-field">{user.lastname}</p>
        </div>
      </div>
      <Form method="put">
        <div className="edit-user-information">
          <h3>Edit User Information</h3>
          <div className="form-group">
            <label htmlFor="firstname">Enter new firstname</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              defaultValue={user.firstname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Enter new lastname</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              defaultValue={user.lastname}
            />
          </div>
        </div>
        <button className="edit-user-button" type="submit">
          Modify
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
