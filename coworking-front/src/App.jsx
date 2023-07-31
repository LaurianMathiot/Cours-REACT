import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllCoworkings from "./pages/AllCoworkings";
import HandleCreateCoworking from "./pages/HandleCreateCoworking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<AllCoworkings />} />
        <Route path="/create-coworking" element={<HandleCreateCoworking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
