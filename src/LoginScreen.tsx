import { FormEvent, useState } from "react";
import { PASS_SHA256, USER_SHA256, sha256Hex, setLoggedIn } from "./auth";

type Props = {
  onSuccess: () => void;
};

export default function LoginScreen({ onSuccess }: Props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const [userHash, passHash] = await Promise.all([
      sha256Hex(login.trim()),
      sha256Hex(password),
    ]);
    setBusy(false);
    if (userHash === USER_SHA256 && passHash === PASS_SHA256) {
      setLoggedIn();
      onSuccess();
    } else {
      setError("Nieprawidłowy login lub hasło.");
      setPassword("");
    }
  }

  return (
    <div className="login">
      <form className="login__card" onSubmit={handleSubmit}>
        <h1>Logowanie</h1>
        <label>
          Login
          <input
            type="text"
            autoComplete="username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            autoFocus
          />
        </label>
        <label>
          Hasło
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="login__error" role="alert">{error}</p>}
        <button type="submit" disabled={busy}>
          {busy ? "Sprawdzam…" : "Zaloguj"}
        </button>
      </form>
    </div>
  );
}
