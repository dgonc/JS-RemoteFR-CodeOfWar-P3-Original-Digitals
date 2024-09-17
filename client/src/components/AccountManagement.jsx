import PropTypes from "prop-types";

export default function AccountManagement({ user }) {
  return (
    <section>
      <p>{user.email}</p>
      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
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
