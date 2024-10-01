import UserForm from "../components/UserForm";

function SignUp() {
  return (
    <section className="sign-up-page">
      <div className="sign-up-header">
        <h1 className="sign-up-text">Créer un compte</h1>
      </div>
      <UserForm />
    </section>
  );
}

export default SignUp;
