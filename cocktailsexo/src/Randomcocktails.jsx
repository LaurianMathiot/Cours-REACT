
const Randomcocktails = ({cocktailsFromApi}) => {

    let table = []

    cocktailsFromApi.map(element => (
        element.isPublished && (table.push(element))
    ))

    let result = table[Math.floor(Math.random()*table.length)]

    
    
        return (
        <div className="ispublished-section random-section">
        <h2>Le cocktail du moment</h2>
    
            <article className="cocktail-infos">
                <div className="cocktail-name-price">
                    <h3>{result.name}</h3>
                    <p>{result.price} €</p>
                </div>
                <ul>
                    {result.ingredients.map((ingredient) => {
                        return <li>{ingredient}</li>
                    })}
                </ul>
            </article> 
      </div>
    )
}

export default Randomcocktails