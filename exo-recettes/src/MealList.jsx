
function MealList() {

    const mealsListResponseFromFakeApi = [
        {
          id: 1,
          title: "Poulet au légumes",
          image: "https://picsum.photos/200/300",
          description: "Un bon poulet avec des légumes",
          isPublished: true
        },
        {
          id: 2,
          title: "Boeuf bourguignon",
          image: "https://picsum.photos/200/300",
          description: "Un bon boeuf bourguignon",
          isPublished: false
        },
        {
          id: 3,
          title: "Poisson aux légumes",
          image: "https://picsum.photos/200/300",
          description: "Un bon poisson avec légumes",
          isPublished: true
        },
      ];

    return (
        <div className="meals-container">
            {mealsListResponseFromFakeApi.map((element) => (
                element.isPublished === false ? null : 
                <article>
                    <img src={element.image} alt={element.title} />
                    <div className="text-content">
                    <h2>{element.title}</h2>
                    <p>{element.description}</p>
                    </div>
                </article> 
            ))}
        </div>
    )
}

export default MealList