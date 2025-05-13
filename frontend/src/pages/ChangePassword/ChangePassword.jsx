import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./ChangePassword.css";
import { changePassword } from "../../services/service";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { isLoggedIn } = useContext(AuthContext);

  const handleChangePassword = async () => {
    const token = localStorage.getItem("token");

    try {
      await changePassword(token, currentPassword, newPassword);
      alert("Lösenordet har ändrats!");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Fel vid byte av lösenord:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <h3>Byt lösenord</h3>
      <div className="change-password-container">
        <input
          type="password"
          placeholder="Nuvarande lösenord"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nytt lösenord"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Byt lösenord</button>
      </div>
    </>
  );
}

export default ChangePassword;
