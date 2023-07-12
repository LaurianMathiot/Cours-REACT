
function ShowCoworking({coworking}) {

    const handleDelete = () => {
        console.log("coworking supprimé", coworking.id)
      }

    return (
        <article className="coworking-card" key={coworking.id}>
            <img src={coworking.img} alt={coworking.name} />
            <h3>{coworking.name}</h3>
            <p>{coworking.address}</p>
            <p>{coworking.phone}</p>
            
            <button className="btn suppr-article-btn" onClick={handleDelete}>X</button>
        </article>
    )
}

export default ShowCoworking