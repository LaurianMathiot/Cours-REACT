const button = document.querySelector("button")

//  au clique sur le bouton

button.addEventListener('click', () => {

    // je cible le container
    const divRoot = document.querySelector("#root")
    
    // je crée un article
    const articleElement = document.createElement('article')

    // j'insère l'article dans #root
    divRoot.appendChild(articleElement)

    // créer un titre
    const titleElement = document.createElement("h1")

    titleElement.textContent = "Hello !"

    articleElement.appendChild(titleElement)

    // créer une image
    const imgElement = document.createElement("img")
    imgElement.setAttribute("src", "https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg")
    articleElement.appendChild(imgElement)

    // créer un texte
    const textElement = document.createElement("p")
    textElement.textContent = "Je suis un texte"
    articleElement.appendChild(textElement)
})