const CoworkingCard = ({ coworking, handleDeleteCoworking }) => {
  return (
    <article className="coworking-card">
      <h3>{coworking.name}</h3>
      <p>
        {coworking.address.number} {coworking.address.street}
        {" - "}
        {coworking.address.postCode} {coworking.address.city}
      </p>
      <button
        className="btn delete-btn"
        onClick={() => handleDeleteCoworking(coworking.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          viewBox="0 -960 960 960"
          width="auto"
        >
          <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
        </svg>
        <p>Supprimer</p>
      </button>
    </article>
  );
};

export default CoworkingCard;