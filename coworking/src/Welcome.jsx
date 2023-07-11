import { useState } from "react";
function Welcome() {

    const [displayMessage, setDisplayMessage] = useState(true);

    const handleClick = () => {
        setDisplayMessage(!displayMessage)
      };

    return(
        <>

            {(displayMessage == true) && 
                <div className="banner">
                    <button onClick={handleClick} className="button">X</button>
                    <h1>Bienvenue !</h1>
                /</div>
            }
        </>
    )
}

export default Welcome
