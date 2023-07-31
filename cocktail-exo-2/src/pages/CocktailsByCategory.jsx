import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const CocktailsByCategory = () => {
  const { categoryName } = useParams();

  const [cocktails, setCocktails] = useState([]);

  const fetchCocktailsByCategory = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    const data = await response.json();

    setCocktails(data.drinks);
  };

  useEffect(() => {
    fetchCocktailsByCategory();
  }, []);

  return (
    <>
      <Header />
      <div className="all-section">
        <h2>Cocktails de la catégorie "{`${categoryName}`}"</h2>
        {cocktails.map((cocktail) => (
          <div className="cocktail-box">
            <Link to={`/cocktails/show/${cocktail.idDrink}`}>
              <div className="cocktail-card" key={cocktail.idDrink}>
                <img src={cocktail.strDrinkThumb} alt="" />
                <h3>{cocktail.strDrink}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CocktailsByCategory;
