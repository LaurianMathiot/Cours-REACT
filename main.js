const button = document.querySelector("button")

button.addEventListener("click", () => {
    
    // j'appelle la div #root
    const divRoot = document.querySelector("#root")

    // // je crée mon article
    // const articleElement = document.createElement("article")

    // // je place l'article dans #root
    // divRoot.appendChild(articleElement)

    // // je créé les éléments de mon article
    // const elementTitle = document.createElement("h1")
    // elementTitle.textContent = "Mon titre"
    // articleElement.appendChild(elementTitle)

    // const elementImg = document.createElement("img")
    // elementImg.setAttribute("src", "https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg")
    // articleElement.appendChild(elementImg)

    // const elementText = document.createElement("p")
    // elementText.textContent = "Mon texte"
    // articleElement.appendChild(elementText)


// FACTORISATION

    // je crée l'article
    const articleElement = createNodeElement("div")
    divRoot.appendChild(articleElement)

    // je crée le titre 
    const elementTitle = createNodeElement("h1", "Titre")
    divRoot.appendChild(elementTitle)

    // je crée l'img
    const elementImg = createNodeElement("img", "", "https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg")
    divRoot.appendChild(elementImg)

    // je crée le texte
    const elementText = createNodeElement("p", "Mon texte")
    divRoot.appendChild(elementText)

})

    // je crée une fonction avec les paramètres modifiables dont j'ai besoin, ici : 
    // le type de balise, le contenu texte et la source des images
    
const createNodeElement = (tagType, elementText = "", imgSrc) => {
    const nodeElement = document.createElement(tagType)
    nodeElement.textContent = elementText
    nodeElement.setAttribute("src", imgSrc)

    // je retourne le résultat de ma fonction pour pouvoir l'utiliser en dehors de celle-ci
    return nodeElement
}