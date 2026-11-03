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
    <div className="page">
      <header className="header">
        <div className="container header__inner">
          <span className="logo">Nazwa firmy</span>
          <nav>
            <a href="#oferta">Oferta</a>
            <a href="#konfigurator">Konfigurator</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero__photos" aria-hidden="true">
            <div
              className="hero__photo"
              style={{ backgroundImage: `url(${base}images/hero-1.jpg)` }}
            />
            <div
              className="hero__photo"
              style={{ backgroundImage: `url(${base}images/hero-2.jpg)` }}
            />
          </div>
          <div className="hero__overlay" aria-hidden="true" />
          <div className="container hero__content">
            <h1>Ubezpieczenie dopasowane do Ciebie</h1>
            <p>Krótki opis wartości oferty. Do uzupełnienia.</p>
            <a className="button" href="#konfigurator">
              Sprawdź ofertę
            </a>
          </div>
        </section>

        <section id="oferta" className="section section--tinted">
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

        <section id="konfigurator" className="container section">
          <h2>Konfigurator polisy</h2>
          <p className="muted">Wkrótce. Tutaj pojawi się konfigurator.</p>
        </section>

        <section id="kontakt" className="section section--tinted">
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
  );
}
