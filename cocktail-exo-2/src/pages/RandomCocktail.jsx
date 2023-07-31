import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  const fetchRandomCocktail = async () => {
    const randomCocktailResponse = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const randomCocktailJs = await randomCocktailResponse.json();

    setRandomCocktail(randomCocktailJs.drinks[0]);
  };

  return (
    <>
      <Header />
      <div className="random-section">
        <h1>Random Cocktail</h1>

        {randomCocktail === null && <p>Loading...</p>}

        {randomCocktail !== null && (
          <>
            <div className="cocktail-card">
              <img
                src={randomCocktail.strDrinkThumb}
                alt={randomCocktail.strDrink}
              />
              <p>{randomCocktail.strDrink}</p>
            </div>
            <Link
              className="btn detail-btn"
              to={`/cocktails/show/${randomCocktail.idDrink}`}
            >
              Voir les détails
            </Link>
          </>
        )}
        <button onClick={fetchRandomCocktail}>Changer le cocktail</button>
      </div>
    </>
  );
};

export default RandomCocktail;
