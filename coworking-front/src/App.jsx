import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllCoworkings from "./pages/AllCoworkings";
import CreateCoworking from "./pages/CreateCoworking";
import UpdateCoworking from "./pages/UpdateCoworking";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/coworkings" element={<AllCoworkings />} />
        <Route
          path="/admin/coworkings/create-coworking"
          element={<CreateCoworking />}
        />
        <Route
          path="/admin/coworkings/:id/update-coworking"
          element={<UpdateCoworking />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
