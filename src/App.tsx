const offers = [
  {
    title: "Ubezpieczenie komunikacyjne",
    text: "Opis oferty — do uzupełnienia treścią zatwierdzoną przez compliance.",
  },
  {
    title: "Ubezpieczenie mieszkania i domu",
    text: "Opis oferty — do uzupełnienia treścią zatwierdzoną przez compliance.",
  },
  {
    title: "Ubezpieczenie na życie",
    text: "Opis oferty — do uzupełnienia treścią zatwierdzoną przez compliance.",
  },
];

const base = import.meta.env.BASE_URL;

export default function App() {
  return (
    <>
      {/* Stałe tło na całej stronie: dwa zdjęcia obok siebie */}
      <div className="site-bg" aria-hidden="true">
        <div
          className="site-bg__photo"
          style={{ backgroundImage: `url(${base}images/hero-1.jpg)` }}
        />
        <div
          className="site-bg__photo"
          style={{ backgroundImage: `url(${base}images/hero-2.jpg)` }}
        />
        <div className="site-bg__overlay" />
      </div>

      <div className="page">
        <header className="header">
          <img
            className="banner"
            src={`${base}images/header.png`}
            alt="Ubezpieczenia — Marek Danilczyk, Hubert Danilczyk"
          />
          <div className="navbar">
            <div className="container navbar__inner">
              <nav>
                <a href="#oferta">Oferta</a>
                <a href="#konfigurator">Konfigurator</a>
                <a href="#kontakt">Kontakt</a>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero__content">
              <h1>Ubezpieczenie dopasowane do Ciebie</h1>
              <p>Krótki opis wartości oferty. Do uzupełnienia.</p>
              <a className="button" href="#konfigurator">
                Sprawdź ofertę
              </a>
            </div>
          </section>

          <section id="oferta" className="section">
            <div className="container">
              <h2>Oferta</h2>
              <div className="cards">
                {offers.map((offer) => (
                  <article key={offer.title} className="card">
                    <h3>{offer.title}</h3>
                    <p>{offer.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="konfigurator" className="section">
            <div className="container">
              <h2>Konfigurator polisy</h2>
              <p className="muted">Wkrótce. Tutaj pojawi się konfigurator.</p>
            </div>
          </section>

          <section id="kontakt" className="section">
            <div className="container">
              <h2>Kontakt</h2>
              <p>Dane kontaktowe do uzupełnienia.</p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <p>
              Pośrednik / towarzystwo: [dane podmiotu do uzupełnienia] · Polityka prywatności
              i klauzule RODO do uzupełnienia.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
