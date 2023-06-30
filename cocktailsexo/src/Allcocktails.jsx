
const Allcocktails = ({cocktailsFromApi}) => {

    return (
      <div className="ispublished-section all-section">
        <h2>Tous nos cocktails</h2>
        {cocktailsFromApi.map(element => (
                element.isPublished && (
                <article className="cocktail-infos">
                    <div className="cocktail-name-price">
                        <h3>{element.name}</h3>
                        <p>{element.price} €</p>
                    </div>
                    <ul>
                        {element.ingredients.map((ingredient) => {
                            return <li>{ingredient}</li>
                        })}
                    </ul>
                </article> 
            )))}
      </div>
    )
}

export default Allcocktails