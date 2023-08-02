import HeaderAdmin from "../../components/admin/HeaderAdmin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = Cookies.get("jwt");
    if (!jwt) {
      navigate("/login");
    }
    const user = jwtDecode(jwt);
    if (user.data.role === 1) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <HeaderAdmin />
      <section>
        <h2>DASHBOARD ADMIN</h2>
      </section>
    </>
  );
};

export default Dashboard;
