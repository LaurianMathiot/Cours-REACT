
const Lastcocktails = ({cocktailsFromApi}) => {
    
    let table = []

    cocktailsFromApi.map(element => (
        element.isPublished && (table.push(element))
    ))

    let result = table.slice(-2)

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
                    <p className="ingredients">{result.ingredients}</p>
                </article> 
            ))}
        </div>
        )
}

export default Lastcocktails