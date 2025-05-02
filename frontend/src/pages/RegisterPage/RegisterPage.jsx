import { Link } from "react-router-dom";
import { useState } from "react";
import "./RegisterPage.css";
import { registerUser } from "../../services/service";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Lösenorden matchar inte");
      return;
    }
    try {
      const data = await registerUser(username, password);
      alert("Användare skapad!");
    } catch (error) {
      console.error("Fel vid registrering:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <h2>Registrera</h2>
      <div className="register-container">
        <input
          type="text"
          placeholder="Ange namn på konto"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ange ett lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Bekräfta lösenord"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Skapa konto</button>
        <p>
          Har du redan ett konto? <Link to="/login">Logga in</Link>
        </p>
      </div>
    </>
  );
}

export default RegisterPage;
