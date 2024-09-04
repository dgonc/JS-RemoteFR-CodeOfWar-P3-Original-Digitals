import "../styles/LandingPage.css";
import Logo from "../assets/images/YouFilm-02.png";

function LandingPage() {
  return (
    <div className="landing-container">
      <header>
        <img src={Logo} alt="Logo YouFlim" />
        <div className="search-area">
          <span className="search-icon">🔎</span>
          <input type="text" className="search-bar" />
        </div>
      </header>
      <section className="attract-section">
        <img
          src="https://img-4.linternaute.com/uwngHQt8ik4-hjzRznv8FLvbBu8=/1500x/smart/a0fb5b2acf2b4d83844b9d90eaa4a0f3/ccmcms-linternaute/11240996.jpg"
          alt="Affiche du film Avengers"
        />
        <p>Films et séries en ilimité.</p>
        <p>Retrouvez vos shows et franchises favorites.</p>
      </section>
      <section className="buttons">
        <button type="button">Débuter l'expérience !</button>
        <button type="button">Pas sûr ? Testez notre partie gratuite.</button>
      </section>
    </div>
  );
}

export default LandingPage;
