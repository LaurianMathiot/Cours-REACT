import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const CocktailsDetails = () => {
  const [cocktail, setCocktail] = useState(null);

  const { id } = useParams();

  const fetchCocktail = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const responseJs = await response.json();

    setCocktail(responseJs.drinks[0]);
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <>
      <Header />
      <section className="detail-cocktail-section flex">
        <h2>Détails du cocktail</h2>
        {cocktail && (
          <article className="flex">
            <img
              className="detail-cocktail-img"
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
            />
            <div className="detail-cocktail-content">
              <h3>{cocktail.strDrink}</h3>
              <p>{cocktail.strInstructions}</p>
            </div>
          </article>
        )}
      </section>
    </>
  );
};

export default CocktailsDetails;
