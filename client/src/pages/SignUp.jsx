import { useEffect } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

function SignUp() {
  const navigate = useNavigate();
  const response = useActionData();

  useEffect(() => {
    if (response && response.status === 201) {
      navigate("/login");
    }
  }, [response, navigate]);

  return (
    <section className="sign-up-page">
      <div className="sign-up-header">
        <h1 className="sign-up-text">Sign Up !</h1>
      </div>
      <UserForm />
    </section>
  );
}

export default SignUp;
