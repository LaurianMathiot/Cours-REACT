import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../../components/public/Header";
import CoworkingCardWithReview from "../../components/admin/CoworkingCardWithReview";
import jwtDecode from "jwt-decode";

const PublicAllCoworkings = () => {
  const [coworkings, setCoworkings] = useState([]);

  let isUserConnected = false;

  const jwt = Cookies.get("jwt");

  if (jwt) {
    const decodedJwt = jwtDecode(jwt);
    const role = decodedJwt.data.role;

    if (role === 1 || role === 2 || role === 3) {
      isUserConnected = true;
    }
  }

  const fetchCoworkings = async () => {
    const response = await fetch(`http://localhost:3010/api/coworkings`);
    const responseJS = await response.json();

    setCoworkings(responseJS.data);
  };

  useEffect(() => {
    fetchCoworkings();
  }, []);

  const handleCreateReview = async (event, coworkingId) => {
    event.preventDefault();

    const content = event.target.content.value;
    const rating = event.target.rating.value;

    const reviewCreateData = {
      content: content,
      rating: parseInt(rating),
    };

    const jwt = Cookies.get("jwt");

    const responseReview = await fetch(
      `http://localhost:3010/api/reviews/${coworkingId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(reviewCreateData),
      }
    );

    const responseReviewJs = await responseReview.json();

    console.log(responseReviewJs);
  };

  return (
    <>
      <Header />
      <section className="all-section">
        <h2>Tous les coworkings</h2>
        <div>
          {coworkings.map((coworking) => (
            <>
              <CoworkingCardWithReview
                coworking={coworking}
                handleCreateReview={handleCreateReview}
                isUserConnected={isUserConnected}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default PublicAllCoworkings;
