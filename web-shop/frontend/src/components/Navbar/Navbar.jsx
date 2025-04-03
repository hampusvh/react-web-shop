import { NavLink } from "react-router-dom";
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Startsida
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Produkter
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Varukorg
        </NavLink>
      </div>
      <div className="auth-links">
        {isLoggedIn ? (
          <>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Mitt konto
            </NavLink>
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
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Registrera
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Logga in
            </NavLink>{" "}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
