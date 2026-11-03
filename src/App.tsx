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

export default function App() {
  return (
    <>
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
          <div className="container">
            <h1>Ubezpieczenie dopasowane do Ciebie</h1>
            <p>Krótki opis wartości oferty. Do uzupełnienia.</p>
            <a className="button" href="#konfigurator">
              Sprawdź ofertę
            </a>
          </div>
        </section>

        <section id="oferta" className="container section">
          <h2>Oferta</h2>
          <div className="cards">
            {offers.map((offer) => (
              <article key={offer.title} className="card">
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="konfigurator" className="container section">
          <h2>Konfigurator polisy</h2>
          <p className="muted">Wkrótce. Tutaj pojawi się konfigurator.</p>
        </section>

        <section id="kontakt" className="container section">
          <h2>Kontakt</h2>
          <p>Dane kontaktowe do uzupełnienia.</p>
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
    </>
  );
}
