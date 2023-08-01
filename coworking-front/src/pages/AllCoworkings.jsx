import Header from "../components/Header";
import { useEffect, useState } from "react";
import CoworkingCard from "../components/CoworkingCard";
import Cookies from "js-cookie";

const AllCoworkings = () => {
  const [coworkings, setCoworkings] = useState([]);
  const [deleteCoworkingMessage, setDeleteCoworkingMessage] = useState(null);

  const fetchCoworkings = async () => {
    const response = await fetch(`http://localhost:3010/api/coworkings`);
    const responseJS = await response.json();

    setCoworkings(responseJS.data);
  };

  useEffect(() => {
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
      <Header />
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
