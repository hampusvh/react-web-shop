import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/service";

import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password); // ← nytt anrop
      login(data.token);
      alert("Inloggning lyckades!");
      navigate("/");
    } catch (error) {
      console.error("Något gick fel:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <h2>Logga in</h2>
      <div className="login-container">
        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Logga in</button>
        <p>
          Har du inget konto? <Link to="/register">Registrera</Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
