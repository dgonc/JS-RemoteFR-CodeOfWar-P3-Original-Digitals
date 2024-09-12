import { Form } from "react-router-dom";

function UserForm() {
  return (
    <Form method="post">
      <section className="form-fields">
        <div className="form-group">
          <label htmlFor="email">Email</label>{" "}
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>{" "}
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>{" "}
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter your firstname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>{" "}
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter your lastname"
          />
        </div>
        <button type="submit">Sign Up</button>
        <p className="sign-in-text">Already have an account ? Sign in</p>
      </section>
    </Form>
  );
}

export default UserForm;
