import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const CocktailsList = () => {
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    const cocktailsResponse = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );
    const cocktailsJs = await cocktailsResponse.json();

    setCocktails(cocktailsJs.drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <>
      <Header />
      <div className="all-section">
        <h2>Tous nos cocktails</h2>
        {cocktails.map((cocktail) => (
          <div className="cocktail-box">
            <Link to={`/cocktails/show/${cocktail.idDrink}`}>
              <div className="cocktail-card" key={cocktail.idDrink}>
                <img src={cocktail.strDrinkThumb} alt="" />
                <h3>{cocktail.strDrink}</h3>
              </div>
            </Link>
            <Link
              className="category-btn"
              to={`/cocktailsbygategory/${cocktail.strCategory}`}
            >
              <p>Afficher la catégorie</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CocktailsList;
