import { useState } from "react";
import { Form, Link } from "react-router-dom";

function UserForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Form method="post">
      <section className="form-fields">
        {/* Champ pour l'email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Saisissez votre email"
          />
        </div>
        {/* Champ pour le mot de passe */}
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>{" "}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Créez votre mot de passe"
            onChange={handlePasswordChange}
          />
          {password ? (
            <div className="password-strength-sign">
              {password.length >= 8 ? "✅" : "❌"} minimum 8 caractères
            </div>
          ) : (
            ""
          )}
        </div>
        {/* Champ pour la confirmation du mot de passe */}
        <div className="form-group">
          <label htmlFor="password-confirm">Confirmez votre mot de passe</label>{" "}
          <input
            type="password"
            id="password-confirm"
            name="password-confirm"
            placeholder="Saisissez à nouveau votre mot de passe"
            onChange={handleConfirmPasswordChange}
          />
          {password ? (
            <div className="password-confirm-sign">
              {" "}
              {password === confirmPassword && password.length > 0
                ? "✅"
                : "❌"}
            </div>
          ) : (
            ""
          )}
        </div>
        {/* Champ pour le prénom */}
        <div className="form-group">
          <label htmlFor="firstname">Prénom</label>{" "}
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Saisissez votre prénom"
          />
        </div>
        {/* Champ pour le nom */}
        <div className="form-group">
          <label htmlFor="lastname">Nom</label>{" "}
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Saisissez votre nom"
          />
        </div>
        {/* Bouton pour la soumission du formulaire */}
        <button type="submit">S'inscrire</button>
        <p className="sign-in-text">
          Déjà inscrit ? <Link to="/login">Se connecter</Link>
        </p>
      </section>
    </Form>
  );
}

export default UserForm;
