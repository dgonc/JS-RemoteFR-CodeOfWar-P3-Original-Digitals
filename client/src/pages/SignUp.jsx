import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";

function SignUp() {
  return (
    <section className="sign-up-page">
      <div className="sign-up-header">
        <Link to="/landing" className="go-back-button">
          Go back
        </Link>
        <h1 className="sign-up-text">Sign Up !</h1>
      </div>
      <UserForm />
    </section>
  );
}

export default SignUp;
