import PropTypes from "prop-types";
import { Form } from "react-router-dom";

export default function AccountManagement({ user }) {
  return (
    <section>
      <p>{user.email}</p>
      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
      <Form method="put">
        <label htmlFor="firstname">Firstname</label>{" "}
        <input
          type="text"
          id="firstname"
          name="firstname"
          defaultValue={user.firstname}
        />
        <label htmlFor="lastname">Lastname</label>{" "}
        <input
          type="text"
          id="lastname"
          name="lastname"
          defaultValue={user.lastname}
        />
        <button type="submit">Modify</button>
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
