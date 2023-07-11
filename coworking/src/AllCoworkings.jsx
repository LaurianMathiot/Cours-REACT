import { useState } from "react";
import Article from "./Article"

function AllCoworkings({coworkingsFromFakeApi}) {

    const [displayCoworkings, setDisplayCoworkings] = useState(false);

    const handleClick = () => {
        setDisplayCoworkings(!displayCoworkings)
      };

    return(
        <section className="coworkings-section">
            <button onClick={handleClick} className="button">{displayCoworkings ? "Afficher moins" : "Afficher tout"}</button>

            {(displayCoworkings == true) && 
                <>
                    <h2>Tous les coworkings</h2>
                    {coworkingsFromFakeApi.map((coworking) => (
                    <Article coworking={coworking}/>
                    ))}
                </>
            }
        </section>
    )
}

export default AllCoworkings