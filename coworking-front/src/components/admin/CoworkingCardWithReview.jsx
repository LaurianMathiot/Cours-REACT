const CoworkingCardWithReview = ({
  coworking,
  handleCreateReview,
  isUserConnected,
}) => {
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
      {isUserConnected && (
        <form
          className="flex review-form"
          onSubmit={(event) => handleCreateReview(event, coworking.id)}
        >
          <div className="flex">
            <label className="review-label" htmlFor="content">
              Commenter
            </label>
            <textarea
              className="review-input"
              name="content"
              rows="3"
              cols="40"
            ></textarea>
          </div>
          <div className="flex">
            <label htmlFor="rating">Note :</label>
            <input
              className="review-input"
              type="number"
              name="rating"
              min="0"
              max="5"
            />
          </div>

          <button className="btn" type="submit">
            Envoyer
          </button>
        </form>
      )}
    </article>
  );
};

export default CoworkingCardWithReview;
