import { Link } from "react-router-dom";
import { useState } from "react";
import "./RegisterPage.css";

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
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        alert(data.message || "Registrering misslyckades");
        return;
      }
      alert("Användare skapad!");
    } catch (error) {
      console.error("Fel vid registrering:", error);
      alert("Registrering misslyckades");
    }
  };

  return (
    <>
      <h3>Registrera</h3>
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
      </div>
    </>
  );
}

export default RegisterPage;
