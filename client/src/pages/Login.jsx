import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/YouFilm-01.png";
import { loginUserAction } from "../services/userService";
import AuthContext from "../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const user = { email, password };

    try {
      const response = await loginUserAction(user);
      if (response) {
        setIsAuthenticated(true);
        setUser({
          id: response.id,
          email: response.email,
          role: response.role,
        });
        navigate("/");
      }
    } catch (err) {
      setError("Error during login, please try again.");
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign In</button>
        </section>
      </form>
    </section>
  );
}

export default Login;
