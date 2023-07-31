import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <p>BDX Coworkings</p>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="link" to="/coworkings">
              Tous les coworkings
            </Link>
          </li>
          <li>
            <Link className="link" to="/create-coworking">
              Créer un coworking
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
