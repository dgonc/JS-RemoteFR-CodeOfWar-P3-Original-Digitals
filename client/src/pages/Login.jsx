import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/YouFlim-01.png";
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
      setError("Erreur durant la connexion.");
    }
  };

  return (
    <section className="signin-container">
      <img src={Logo} alt="Youflim" />
      <form onSubmit={handleSubmit}>
        <section className="login-form-fields">
          <h1 className="login-title">Accéder à son compte</h1>
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Saisissez votre adresse email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Saisissez votre mot de passe"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Se connecter</button>
        </section>
      </form>
    </section>
  );
}

export default Login;
