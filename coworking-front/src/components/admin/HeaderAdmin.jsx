import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const HeaderAdmin = () => {
  const navigate = useNavigate();

  const handleClickDeleteCookies = () => {
    Cookies.remove("jwt");
    navigate("/");
  };

  const jwt = Cookies.get("jwt");
  const userData = jwtDecode(jwt);

  return (
    <header className="main-header">
      <p>{`Bienvenue ${userData.data.username}`}</p>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/admin">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/admin/coworkings">
              Tous les coworkings
            </Link>
          </li>
          <li>
            <Link className="link" to="/admin/coworkings/create-coworking">
              Créer un coworking
            </Link>
          </li>
          <li>
            <button
              className="btn header-btn flex"
              onClick={handleClickDeleteCookies}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z" />
              </svg>
              Déconnexion
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
