import { useState } from "react";
function Welcome() {

    const [displayMessage, setDisplayMessage] = useState(false);

    const handleClick = () => {
        setDisplayMessage(!displayMessage)
      };

    return(
        <>
            <a onClick={handleClick} className="button" href="#">{displayMessage ? "Afficher message" : "Cacher message"}</a>

            {(displayMessage == true) && 

                <h1>Bienvenue !</h1>
            }
        </>
    )
}

export default Welcome
