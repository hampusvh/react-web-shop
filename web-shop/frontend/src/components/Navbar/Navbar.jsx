import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav>
      <div className="main-links">
        <Link to="/">Startsida</Link>
        <Link to="/products">Produkter</Link>
        <Link to="/cart">Varukorg</Link>
      </div>
      <div className="auth-links">
        {isLoggedIn ? (
          <>
            <Link to="/profile">Mitt konto</Link>
            <span
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="logout-link"
            >
              Logga ut
            </span>
          </>
        ) : (
          <>
            <Link to="/register">Registrera</Link>
            <Link to="/login">Logga in</Link>{" "}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
