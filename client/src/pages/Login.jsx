import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/YouFlim-01.png";
import { loginUserAction } from "../services/userService";
import { notifySuccess, notifyError } from "../services/utils";
import AuthContext from "../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };

    try {
      const response = await loginUserAction(user);
      if (response) {
        notifySuccess();
        setIsAuthenticated(true);
        setUser({
          id: response.id,
          email: response.email,
          role: response.role,
        });
        navigate("/");
      }
    } catch (err) {
      notifyError();
    }
  };

  return (
    <section className="signin-container">
      <img src={Logo} alt="Youflim" />
      <form onSubmit={handleSubmit}>
        <section className="login-form-fields">
          <h1 className="login-title">Login</h1>
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </section>
      </form>
    </section>
  );
}

export default Login;
