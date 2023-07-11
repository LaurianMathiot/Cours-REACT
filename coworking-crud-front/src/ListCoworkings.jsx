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

    const handleFilterClickBordeaux = () => {
        setFilter("Bordeaux");
      };
    
    const handleFilterClickMerignac = () => {
    setFilter("Merignac");
    };

    const handleFilterClickLormont = () => {
    setFilter("Lormont");
    };

    const handleFilterClickEysines = () => {
    setFilter("Eysines");
    };

    const filteredCoworkings = coworkings.filter((coworking) => {
    return coworking.address === filter;
    });
    
  
    return (
      <section className="liste-coworkings">
        <h2>Liste des coworkings</h2>
        
        <div className="filter-btn-container">
            <button className="filter-btn btn" onClick={handleFilterClickBordeaux}>Bordeaux</button>
            <button className="filter-btn btn" onClick={handleFilterClickMerignac}>Mérignac</button>
            <button className="filter-btn btn" onClick={handleFilterClickLormont}>Lormont</button>
            <button className="filter-btn btn" onClick={handleFilterClickEysines}>Eysines</button>
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