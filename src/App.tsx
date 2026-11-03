import { useState } from "react";
import LoginScreen from "./LoginScreen";
import { isLoggedIn } from "./auth";

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

const configurator = [
  "Utwórz polisę na życie",
  "Utwórz polisę komunikacyjną",
  "Utwórz polisę na dom",
];

const contacts = [
  {
    label: "Numer telefonu",
    value: "123 456 789",
    href: "tel:+48123456789",
  },
  {
    label: "Adres email",
    value: "adres.testowy@gmail.com",
    href: "mailto:adres.testowy@gmail.com",
  },
];

const base = import.meta.env.BASE_URL;

export default function App() {
  const [authed, setAuthed] = useState(isLoggedIn);

  // Dopóki nie ma logowania, nie renderujemy treści ani zdjęć.
  if (!authed) {
    return (
      <LoginScreen
        onSuccess={() => {
          // iOS przewija stronę przy klawiaturze; po zalogowaniu wracamy na górę
          (document.activeElement as HTMLElement | null)?.blur();
          window.scrollTo(0, 0);
          setAuthed(true);
        }}
      />
    );
  }

  return (
    <>
      {/* Nieruchomy baner i pasek menu u góry */}
      <header className="header">
        <img
          className="banner"
          src={`${base}images/header.jpg`}
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

      {/* Stałe tło ze zdjęciami, pod banerem */}
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
              <div className="cards">
                {configurator.map((item) => (
                  <article key={item} className="card card--tile">
                    <h3>{item}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="kontakt" className="section">
            <div className="container">
              <h2>Kontakt</h2>
              <div className="cards">
                {contacts.map((contact) => (
                  <article key={contact.label} className="card card--tile">
                    <h3>{contact.label}</h3>
                    <p>
                      <a href={contact.href}>{contact.value}</a>
                    </p>
                  </article>
                ))}
              </div>
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
