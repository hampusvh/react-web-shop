import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./ChangePasswordPage.css";

function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { isLoggedIn } = useContext(AuthContext);

  const handleChangePassword = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ currentPassword, newPassword }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Fel vid lösenordsbyte");
        return;
      }

      alert("Lösenordet har ändrats!");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Fel vid byte av lösenord:", error);
      alert("Serverfel");
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

export default ChangePasswordPage;
