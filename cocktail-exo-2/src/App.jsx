import "./App.css";
import CocktailsDetails from "./pages/CocktailDetails";
import CocktailsByCategory from "./pages/CocktailsByCategory";
import CocktailsList from "./pages/CocktailsList";
import HomePage from "./pages/HomePage";
import RandomCocktail from "./pages/RandomCocktail";
import SearchResultPage from "./pages/SearchResultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailsList />} />
        <Route path="/cocktails/randomcocktail" element={<RandomCocktail />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/cocktails/show/:id" element={<CocktailsDetails />} />
        <Route
          path="/cocktailsbygategory/:categoryName"
          element={<CocktailsByCategory />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
