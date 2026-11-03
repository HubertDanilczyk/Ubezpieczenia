// Prosta bramka logowania po stronie przeglądarki.
// Uwaga: strona jest statyczna, więc to tylko ukrywa treść przed przypadkowym widokiem.
// Skróty SHA-256 nie są prawdziwym zabezpieczeniem, bo kod jest publiczny.
export const USER_SHA256 = "652f213d443cd6cbabcf39e7467dffa12bf6988132998f54b9722c94e60c71a8";
export const PASS_SHA256 = "652f213d443cd6cbabcf39e7467dffa12bf6988132998f54b9722c94e60c71a8";

const SESSION_KEY = "site-auth-ok";

export function isLoggedIn(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function setLoggedIn(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* brak sessionStorage — logowanie obowiązuje tylko w tej karcie */
  }
}

export async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
