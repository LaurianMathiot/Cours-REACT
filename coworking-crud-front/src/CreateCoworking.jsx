function CreateCoworking() {

    const hundleSubmit = (event) =>{
        event.preventDefault()
        const title = event.target.title.value;
        const description = event.target.description.value;
        const address = event.target.address.value;

        console.log("title : " + title + " / description : " + description + " / adress : " + address)
    }

    return(
        <section className="form-section">
            <form action="" onSubmit={hundleSubmit}>
                <div className="form-input">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" required />
                </div>
                <div className="form-input">
                    <label for="description">Description </label>
                    <textarea type="text" name="description" id="description" required />
                </div>
                <div className="form-input">
                    <label for="address">Address </label>
                    <input type="text" name="address" id="address" required />
                </div>
                <div className=" form-input submit-btn">
                    <input type="submit" name="submit" id="submit" value="Send" required />
                </div>
            </form>
        </section>
    )
}

export default CreateCoworking