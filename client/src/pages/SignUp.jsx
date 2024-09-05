import UserForm from "../components/UserForm";

function SignUp() {
  return(
    <div>
  <div className="sign-up-header">
    <button type="button" className="go-back-button">Go back</button>
    <h1 className="sign-up-text">Sign Up !</h1>
    </div>
    <UserForm />
    </div>
  )
}

export default SignUp;
