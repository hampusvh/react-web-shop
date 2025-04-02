import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <h2>Min profil</h2>
      <div className="profile-options">
        <Link to="/orders" className="profile-link">
          Orderhistorik
        </Link>
        <Link to="/change-password" className="profile-link">
          Byt lösenord
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;
