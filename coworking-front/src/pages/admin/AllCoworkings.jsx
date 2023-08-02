import HeaderAdmin from "../../components/admin/HeaderAdmin";
import { useEffect, useState } from "react";
import CoworkingCard from "../../components/admin/CoworkingCard";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AllCoworkings = () => {
  const [coworkings, setCoworkings] = useState([]);
  const [deleteCoworkingMessage, setDeleteCoworkingMessage] = useState(null);
  const navigate = useNavigate();

  const fetchCoworkings = async () => {
    const response = await fetch(`http://localhost:3010/api/coworkings`);
    const responseJS = await response.json();

    setCoworkings(responseJS.data);
  };

  useEffect(() => {
    const jwt = Cookies.get("jwt");
    if (!jwt) {
      navigate("/login");
    }
    const user = jwtDecode(jwt);
    if (user.data.role === 1) {
      navigate("/");
    }
    fetchCoworkings();
  }, [deleteCoworkingMessage]);

  const handleDeleteCoworking = async (coworkingId) => {
    const token = Cookies.get("jwt");
    const responseDelete = await fetch(
      `http://localhost:3010/api/coworkings/${coworkingId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const responseDeleteJs = await responseDelete.json();

    setDeleteCoworkingMessage(responseDeleteJs.message);
  };

  return (
    <>
      <HeaderAdmin />
      <section className="all-section">
        <h2>Tous les coworkings</h2>
        <div className="coworkings-wrap">
          {deleteCoworkingMessage && (
            <div className="pop-msg">
              <p>{deleteCoworkingMessage}</p>
            </div>
          )}
          {coworkings.map((coworking) => (
            <>
              <CoworkingCard
                coworking={coworking}
                handleDeleteCoworking={handleDeleteCoworking}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllCoworkings;
