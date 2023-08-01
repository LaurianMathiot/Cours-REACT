import { Link } from "react-router-dom";

const CoworkingCard = ({ coworking, handleDeleteCoworking }) => {
  return (
    <article className="coworking-card">
      <div>
        <h3>{coworking.name}</h3>
        <p>
          {coworking.address.number} {coworking.address.street}
          {" - "}
          {coworking.address.postCode} {coworking.address.city}
        </p>
      </div>
      <div className="btns-container">
        <button className="btn update-btn">
          <Link to={`/admin/coworkings/${coworking.id}/update-coworking`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="27"
              viewBox="0 -960 960 960"
              width="auto"
            >
              <path d="M225-80q-44 0-74.5-30.5T120-185v-135h120v-560h600v386q-16 0-31 6t-29 17v-349H300v500h328l-60 60H180v75q0 19 13 32t31 13h296v60H225Zm355 0v-107l176-176 28 28-164 164v51h51l164-164 28 28L687-80H580Zm283-176L756-363l61-61q9-9 21-9t21 9l65 65q9 9 9 21t-9 21l-61 61ZM360-640v-60h360v60H360Zm0 120v-60h360v60H360Zm160 380H180h340Z" />
            </svg>
            <p>Modifier</p>
          </Link>
        </button>
        <button
          className="btn delete-btn"
          onClick={() => handleDeleteCoworking(coworking.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="auto"
          >
            <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
          </svg>
          <p>Supprimer</p>
        </button>
      </div>
    </article>
  );
};

export default CoworkingCard;
