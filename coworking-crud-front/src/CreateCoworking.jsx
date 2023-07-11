import { useState } from "react"

function CreateCoworking() {

    const [coworkingData, setCoworkingData] = useState({
            title: "Pending…",
            description: "Pending…",
            address: "Pending…"
    })

    const handleSubmit = (event) =>{
        event.preventDefault()

        setCoworkingData({
           title: event.target.title.value,
           description: event.target.description.value,
           address: event.target.address.value
        })
    }

    return(
        <>
            <section className="form-section">
            <form action="" onSubmit={handleSubmit}>
                <h2>FORM</h2>
                <div className="form-element">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" required />
                </div>
                <div className="form-element">
                    <label for="description">Description </label>
                    <textarea type="text" name="description" id="description" required />
                </div>
                <div className="form-element">
                    <label for="address">Address </label>
                    <input type="text" name="address" id="address" required />
                </div>
                <div className=" form-element submit-btn">
                    <input className="btn" type="submit" name="submit" id="submit" value="Send" required />
                </div>
            </form>
        </section>
        <section className="result-section">
            <p><span>Title :</span> {coworkingData.title}</p>
            <p><span>Description :</span> {coworkingData.description}</p>
            <p><span>Address :</span> {coworkingData.address}</p>
        </section>
        </>
    )
}

export default CreateCoworking