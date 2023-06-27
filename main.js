const divRoot = document.querySelector("#root")
const divRoot2 = document.querySelector("#root2")

const createNodeElement = (tagType, attributes, elementText = "") => {
    const nodeElement = document.createElement(tagType)
    nodeElement.textContent = elementText

    for (const property in attributes) {
        nodeElement.setAttribute(property, attributes[property])
    }

    return nodeElement
}

const contactFormComponent = () => {

    const formElement = createNodeElement('form')
    
    const inputText = createNodeElement('input', {
        type: "text",
        class: "contact-text",
    })
    formElement.appendChild(inputText)

    const submitBtnElement = createNodeElement ('button', {
        type: "submit",
        class: "contact-submit",
        },
        "Envoyer"
    )
    formElement.appendChild(submitBtnElement)

    divRoot.appendChild(formElement)
}

contactFormComponent()

const mealsList = async () => {    
    
    const responseJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    const responseJavascript = await responseJson.json()

    const recepiesTitle = createNodeElement("h2",{class: "recepies-title"}, "Recettes")

        divRoot.appendChild(recepiesTitle)
    
    
    responseJavascript.meals.forEach(meal => {
    
        const mealTitleElement = createNodeElement("h2",
        {class: "meal-title"},
        meal.strMeal
        )
    
        divRoot.appendChild(mealTitleElement)
    
        const mealImgElement = createNodeElement("img", {
            src: meal.strMealThumb,
            });
        
            divRoot.appendChild(mealImgElement);
        });
}

mealsList()

// je créé la fonction qui concerne les catégories
const mealsCategories = async () => {
    
    // j'appelle l'API et je la traduis du Json en JS
    const responseJson = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php") 
    const responseJavascript = await responseJson.json()

        // je créé un titre "Catégories" à cette section
        const categoriesTitle = createNodeElement("h2",{class: "categories-title"}, "Catégories")

        // je l'intègre dans ma div
        divRoot2.appendChild(categoriesTitle)

    // je parcours les éléments de l'API 
    responseJavascript.categories.forEach(meal => {

        // je créé les éléments portant les noms des catégories et je leur applique une classe
        const mealCategory = createNodeElement("h2",
        {class: "meal-category"},
        meal.strCategory
        )

        // je les envoie dans ma div
        divRoot2.appendChild(mealCategory)

    })
}

// je lance la fonction
mealsCategories()