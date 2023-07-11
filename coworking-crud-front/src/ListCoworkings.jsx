import { useState } from "react";

const ListCoworkings = () => {
    const coworkings = [
      {
        id: 1,
        name: "Coworking 1",
        address: "Bordeaux",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 2,
        name: "Coworking 2",
        address: "Merignac",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 3,
        name: "Coworking 3",
        address: "Bordeaux",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 4,
        name: "Coworking 4",
        address: "Eysines",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 5,
        name: "Coworking 5",
        address: "Lormont",
        phone: "123456789",
        img: "https://picsum.photos/200/300",
      },
    ];

    const [filter, setFilter] = useState("Bordeaux");

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
                <article className="coworking-card" key={coworking.id}>
                <img src={coworking.img} alt={coworking.name} />
                <h3>{coworking.name}</h3>
                <p>{coworking.address}</p>
                <p>{coworking.phone}</p>
                </article>
          );
        })}
        </div>
      </section>
    );
  };
  
  export default ListCoworkings;