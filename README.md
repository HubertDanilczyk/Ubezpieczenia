# Ubezpieczenia

Strona promocyjna ubezpieczeń. W przyszłości z konfiguratorem polisy.

## Stack

- Vite + React + TypeScript
- Statyczny build, hosting na GitHub Pages

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Pliki produkcyjne trafiają do `dist/`.

## Wdrożenie

Po wypchnięciu na gałąź `main` workflow `.github/workflows/deploy.yml` buduje stronę i publikuje ją na GitHub Pages. W ustawieniach repozytorium trzeba włączyć **Settings → Pages → Source: GitHub Actions**.

## Do uzupełnienia przed publikacją

- Dane podmiotu (pośrednik / towarzystwo), numer rejestrowy, informacje o pośrednictwie
- Polityka prywatności i klauzule RODO
- Treści ofert zatwierdzone przez compliance
