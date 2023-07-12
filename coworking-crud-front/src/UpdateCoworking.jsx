function UpdateCoworking( {coworking} ) {

    const handleUpdateSubmit = (event) => {
        event.preventDefault();

        const coworkingRequest = {
            name: event.target.title.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
          };

        console.log(coworkingRequest)
    }


    return(
        <div className="update-container">
            <h6>Modifier</h6>
            <form className="update-form" onSubmit={handleUpdateSubmit}>
            <div className="form-element">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" defaultValue={coworking.name} required />
            </div>
            <div className="form-element">
                <label for="address">Address</label>
                <input type="text" name="address" id="address" defaultValue={coworking.address} required />
            </div>
            <div className="form-element">
                <label for="phone">Phone</label>
                <input type="text" name="phone" id="phone" defaultValue={coworking.phone} required />
            </div>
            <div className=" form-element submit-btn">
                <input className="btn" type="submit" name="submit" id="submit" value="Send" required />
            </div>
        </form>
        </div>

)
}

export default UpdateCoworking