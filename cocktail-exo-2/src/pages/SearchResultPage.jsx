import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchResultPage = () => {
  const [cocktails, setCocktails] = useState([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const fetchSearchResults = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    const responseJs = await response.json();

    setCocktails(responseJs.drinks);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [search]);

  return (
    <>
      <Header />
      <div className="all-section">
        {!cocktails ? (
          <h2>Aucun résultat pour "{`${search}`}"</h2>
        ) : (
          <>
            <h2>Voici la liste des résultats pour "{`${search}`}" :</h2>

            {cocktails.map((cocktail) => (
              <Link to={`/cocktails/show/${cocktail.idDrink}`}>
                <div className="cocktail-card" key={cocktail.idDrink}>
                  <img src={cocktail.strDrinkThumb} alt="" />
                  <h3>{cocktail.strDrink}</h3>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default SearchResultPage;
