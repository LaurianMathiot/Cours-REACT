import "./App.css";
import ArticlesList from "./ArticlesList";
import Profile from "./Profile";

const App = () => {
  return (
    <div className="container">
      <h1>Bonjour <span>!</span></h1>
      <Profile />
      <ArticlesList />
    </div>
  );
}

export default App;
