const button = document.querySelector("button")

button.addEventListener("click", async () => {
    const divRoot = document.querySelector("#root")

    // Récuperer les données de l'API
    // fetch sur l'url 
    const responseJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    const responseJavascript = await responseJson.json()

    // quand j'ai récupéré les données (recettes)
    responseJavascript.meals.forEach(meal => {
        // j'affiche le titre de chacune des recettes
        const mealTitleElement = createNodeElement("h2",
        {class:"meal-title"},
        meal.strMeal
        )

        divRoot.appendChild(mealTitleElement)

        const mealImgElement = createNodeElement("img", {
            src: meal.strMealThumb,
          });
      
          // j'insère l'image dans ma div root
          divRoot.appendChild(mealImgElement);
        });
    })

const createNodeElement = (tagType, attributes, elementText = "") => {
    const nodeElement = document.createElement(tagType)
    nodeElement.textContent = elementText

    for (const property in attributes) {
        nodeElement.setAttribute(property, attributes[property])
    }

    // je retourne le résultat de ma fonction pour pouvoir l'utiliser en dehors de celle-ci
    return nodeElement
}