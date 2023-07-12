import { useState } from "react";
import ShowCoworking from "./ShowCoworking";

const ListCoworkings = () => {

      
      const [coworkings, setCoworkings] = useState([])

      const FetchCoworkings = async () => {
        if (coworkings.length === 0) {
          const coworkingsResponse = await fetch("/coworkings.json");
          setCoworkings(await coworkingsResponse.json()); 
        }
      }

      FetchCoworkings()


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
        {filteredCoworkings.map((coworking) => {
          return (
            <>
              <ShowCoworking coworking={coworking}/>
            </>
          );
        })}
        </div>
      </section>
    );
  };
  
  export default ListCoworkings;