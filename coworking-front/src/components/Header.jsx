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
            <Link className="link flex-link" to="/login">
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="auto"
              >
                <path d="M353.775-383Q331-383 315.5-398.725q-15.5-15.726-15.5-38.5Q300-460 315.725-475.5q15.726-15.5 38.5-15.5Q377-491 392.5-475.275q15.5 15.726 15.5 38.5Q408-414 392.275-398.5q-15.726 15.5-38.5 15.5Zm253 0Q584-383 568.5-398.725q-15.5-15.726-15.5-38.5Q553-460 568.725-475.5q15.726-15.5 38.5-15.5Q630-491 645.5-475.275q15.5 15.726 15.5 38.5Q661-414 645.275-398.5q-15.726 15.5-38.5 15.5ZM480-140q142.375 0 241.188-98.948Q820-337.895 820-480.465 820-506 816-531q-4-25-10-46-20 5-43.262 7-23.261 2-48.738 2-97.115 0-183.557-40Q444-648 383-722q-34 81-97.5 141.5T140-487v7q0 142.375 98.812 241.188Q337.625-140 480-140Zm0 60q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-92-727q88 103 162.5 141T714-628q24 0 38-1t31-6q-45-81-122.5-133T480-820q-27 0-51 4t-41 9ZM149-558q48-18 109.5-81.5T346-793q-87 39-131.5 99.5T149-558Zm239-249Zm-42 14Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
