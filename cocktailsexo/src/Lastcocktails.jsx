
const Lastcocktails = ({cocktailsFromApi}) => {
    

    const cocktailsPublished = cocktailsFromApi.filter((cocktail) => {
        return cocktail.isPublished
    })

    let result = cocktailsPublished.slice(-2)

    console.log(result)
    
        return (
        <div className="ispublished-section last-cocktails-section">
        <h2>Nos derniers cocktails</h2>
        {result.map(result => (
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
            ))}
        </div>
        )
}

export default Lastcocktails