import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const CreateCoworking = () => {
  const navigate = useNavigate();

  const handleCreateCoworking = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;
    const price_hour = event.target.price_hour.value;
    const price_day = event.target.price_day.value;
    const price_month = event.target.price_month.value;
    const address_number = event.target.address_number.value;
    const address_street = event.target.address_street.value;
    const address_postcode = event.target.address_postcode.value;
    const address_city = event.target.address_city.value;

    const coworkingData = {
      name: name,
      price: {
        hour: parseInt(price_hour),
        day: parseInt(price_day),
        month: parseInt(price_month),
      },
      superficy: parseInt(superficy),
      capacity: parseInt(capacity),
      address: {
        number: parseInt(address_number),
        street: address_street,
        postCode: parseInt(address_postcode),
        city: address_city,
      },
    };

    const token = Cookies.get("jwt");

    const responseCreate = await fetch("http://localhost:3010/api/coworkings", {
      method: "POST",
      body: JSON.stringify(coworkingData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseCreateJs = await responseCreate.json();
    navigate("/admin/coworkings");
  };

  return (
    <>
      <Header />
      <section className="form-section">
        <h2>Créer un coworking</h2>
        <form onSubmit={handleCreateCoworking} className="create-form">
          <div className="grid-3">
            <div className="form-element">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>

            <div className="form-element">
              <label htmlFor="superficy">Superficy</label>
              <input type="number" name="superficy" />
            </div>

            <div className="form-element">
              <label htmlFor="capacity">Capacity</label>
              <input type="number" name="capacity" />
            </div>
          </div>

          <div className="grid-3">
            <div className="form-element">
              <label htmlFor="price_hour">Price by hour</label>
              <input type="number" name="price_hour" />
            </div>
            <div className="form-element">
              <label htmlFor="price_day">Price by day</label>
              <input type="number" name="price_day" />
            </div>

            <div className="form-element">
              <label htmlFor="price_month">Price by month</label>
              <input type="number" name="price_month" />
            </div>
          </div>

          <div className="form-element">
            <label htmlFor="address_number">Address number</label>
            <input type="number" name="address_number" />
          </div>

          <div className="form-element">
            <label htmlFor="address_street">Address street</label>
            <input type="text" name="address_street" />
          </div>

          <div className="form-element">
            <label htmlFor="address_postcode">Address zipcode</label>
            <input type="number" name="address_postcode" />
          </div>

          <div className="form-element">
            <label htmlFor="address_city">Address city</label>
            <input type="text" name="address_city" />
          </div>

          <input type="submit" className="submit-btn btn" />
        </form>
      </section>
    </>
  );
};

export default CreateCoworking;
