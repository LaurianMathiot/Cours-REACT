function Article({element}) {

     return(
        <>
            <article>
                <div className="article-img-container">
                    <img src={element.image} alt="" />
                </div>
                <div className="titre-rating">
                    <h3>{element.name}</h3>
                    <p>{element.rating}/5</p>
                </div>
                <p>{element.adresse}</p>
                <p>{element.city}</p>
            </article>
        </>)
}

export default Article