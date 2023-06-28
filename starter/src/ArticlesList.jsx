const ArticlesList = () => {
    return (
        <div className="articles-container">
            <h2>Articles</h2>
            <article className="article">
                <div className="article-img">
                    <img src="https://images.unsplash.com/photo-1635492491273-455af7728453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1560&q=80" />
                </div>
                <h3>Article 1</h3>
                <p>Je suis le texte de l'article.</p>
            </article>
            <article className="article">
                <div className="article-img">
                    <img src="https://images.unsplash.com/photo-1643228995868-bf698f67d053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </div>
                <h3>Article 2</h3>
                <p>Je suis le texte de l'article.</p>
            </article>
            <article className="article">
                <div className="article-img">
                    <img src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" />
                </div>
                <h3>Article 3</h3>
                <p>Je suis le texte de l'article.</p>
            </article>
        </div>
    )
}

export default ArticlesList