import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import AllCoworkings from "./pages/admin/AllCoworkings";
import CreateCoworking from "./pages/admin/CreateCoworking";
import UpdateCoworking from "./pages/admin/UpdateCoworking";
import LoginPage from "./pages/public/LoginPage";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Dashboard />} />
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
