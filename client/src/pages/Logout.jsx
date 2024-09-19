import { Link } from "react-router-dom";

function Logout() {
  return (
    <section className="logout-window">
      <p className="logout-text">You are now logged out.</p>
      <Link to="/landing" className="go-back-button"> Go back to Landing page</Link>
    </section>
  );
}

export default Logout;
