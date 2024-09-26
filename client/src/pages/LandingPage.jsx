import { Link } from "react-router-dom";
import Banner from "../assets/images/films-banner.png";
import ExitLogo from "../assets/images/exit-logo.png";
import Screen from "../assets/images/desktop-mobile-tab.png";
import Logo from "../assets/images/YouFlim-01.png";

function LandingPage() {
  return (
    <>
      <div className="desktop-content">
        <section className="youflim-landing">
          <img src={Logo} alt="Logo du site" />
        </section>

        <section className="intro-landing">
          <h2>Films et séries en illimités</h2>
          <p>Où que vous soyez. Annulez à tout moment</p>
          <section className="buttons">
            <Link to="/sign">Débuter l'expérience !</Link>
            <Link to="/movies/free">
              Pas sûr ? Testez notre partie gratuite.
            </Link>
          </section>
        </section>
        <div className="separator"> </div>
        <section className="screen-landing">
          <h2>Où que vous soyez</h2>
          <p>
            Regardez des films et séries en illimités sur votre ordinateur,
            smartphone et tablette.
          </p>
          <img
            src={Screen}
            alt="Version desktop, smartphone et tablette de Youflim"
          />
        </section>
        <div className="separator"> </div>
        <section className="subscribe-landing">
          <h2>Abonnez vous dès aujourd'hui</h2>
          <p>Annulez à tout moment.</p>
          <img src={ExitLogo} alt="dessin d'un bonhomme qui sort" />
        </section>
        <div className="separator"> </div>
        <section className="testing-landing">
          <h2>Pas encore sûr ?</h2>
          <p>Testez notre liste de films sans abonnement.</p>
          <img src={Banner} alt="Affiches de films et séries" />
        </section>
      </div>
      <div className="landing-container">
        <section className="attract-section">
          <section className="pictures-movies">
            <img src={Banner} alt="Affiches de films et séries" />
          </section>
          <p>Films et séries en ilimité.</p>
          <p>Retrouvez vos shows et franchises favorites.</p>
        </section>
        <section className="buttons">
          <Link to="/sign">Débuter l'expérience !</Link>
          <Link to="/movies/free">Pas sûr ? Testez notre partie gratuite.</Link>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
