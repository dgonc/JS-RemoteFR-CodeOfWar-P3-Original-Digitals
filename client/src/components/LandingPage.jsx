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
        <section className="pictures-movies">
          <div className="column-1">
            <img
              src="https://static.posters.cz/image/750/affiches-et-posters/dexter-shrinkwrapped-i14382.jpg"
              alt="Affiche de la série Dexter"
            />
            <img
              src="https://m.media-amazon.com/images/I/61cYlI-qVAL._AC_UF1000,1000_QL80_.jpg"
              alt="Affiche de la série Peaky Blinders"
            />
          </div>

          <div className="column-2">
            <img
              src="https://static.posters.cz/image/750/affiches-et-posters/the-boys-sunburst-i101099.jpg"
              alt="Affiche de la série The Boys"
            />
            <img
              src="https://addons-media.operacdn.com/media/CACHE/images/themes/85/172285/1.0-rev1/images/50b41d81-8185-4a3a-9227-7553dfb4d749/11abb37935c9f6f6929ae4491255c7a3.jpg"
              alt="Affiche de la série Breaking Bad"
            />
            <img
              src="https://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/7AEAAOSwL21jk7c-/$_57.JPG?set_id=880000500F"
              alt="Affiche de la série Wednesday"
            />
          </div>
        </section>
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
