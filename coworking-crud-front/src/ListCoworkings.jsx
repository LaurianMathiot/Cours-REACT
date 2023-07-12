import { useState } from "react";
import ShowCoworking from "./ShowCoworking";

const ListCoworkings = () => {
     
      const [coworkings, setCoworkings] = useState([])

      const fetchCoworkings = async () => {
        if (coworkings.length === 0) {

          setTimeout(async () => {
          const coworkingsResponse = await fetch("/coworkings.json");
          setCoworkings(await coworkingsResponse.json());

        }, 1500);
      }
    }
    
    fetchCoworkings();

      const [filter, setFilter] = useState(null);

      const handleFilterClick = (value) => {
          setFilter(value);
        };

      const filteredCoworkings = coworkings.filter((coworking) => {

      if (filter === null) {
          return true;
      }
      return coworking.address === filter;
      });
  
    return (
      <section className="liste-coworkings">
        <h2>Liste des coworkings</h2>
        
        <div className="filter-btn-container">
            <button className="filter-btn btn" onClick={() => handleFilterClick(null)}>All</button>
            <button className="filter-btn btn" onClick={() => handleFilterClick("Bordeaux")}>Bordeaux</button>
            <button className="filter-btn btn" onClick={() => handleFilterClick("Merignac")}>Mérignac</button>
            <button className="filter-btn btn" onClick={() => handleFilterClick("Lormont")}>Lormont</button>
            <button className="filter-btn btn" onClick={() => handleFilterClick("Eysines")}>Eysines</button>
        </div>
  
        

        <div className="articles-container">
        {filteredCoworkings.length === 0 ? (
          <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
          </svg>
        ) : (
        <>
          {filteredCoworkings.map((coworking) => {
            return <ShowCoworking coworking={coworking} />;
          })}
        </>
      )}
        </div>
      </section>
    );
  };
  
  export default ListCoworkings;