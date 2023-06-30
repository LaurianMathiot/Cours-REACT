
const Allproducts = ({productsFromApi}) => {

    return (
        <section className="all-products">
            <h2>Tous nos produits</h2>
            {productsFromApi.map(element =>(
                <article className="product-card">
                    <div className="product-img"><img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="" /></div>
                <div className="card-name-price">
                <h3>{element.name}</h3>
                <p>{element.price} <span className="card-euro-symbol">€</span></p>
                </div>
                <p className="card-product-description">{element.description}</p>
                </article>

            ))}
        </section>
    )
}

export default Allproducts