
const Asidecart = ({cartFromApi}) => {
    

    return (
        <>
        <article className="aside-cart">
            <h2>Panier :</h2>
            <div className="cart-product-img"><img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="" /></div>
            {cartFromApi.items.map(element =>(
                <>
                    <div className="cart-product-quantity">
                    <h3>{element.product}</h3><p className="cart-quantity"> x{element.quantity}</p>
                    </div>
                    <p className="product-amount"> {element.amount} €</p>
                </>
            ))}
        </article>
        <div className="total-price">
        <p className="total">Total : </p><h4>{cartFromApi.totalAmount} <span className="euro-symbol">€</span></h4>
        </div>
        </>


    )
}

export default Asidecart