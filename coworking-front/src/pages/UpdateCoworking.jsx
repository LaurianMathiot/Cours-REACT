import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UpdateCoworking = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [coworking, setCoworking] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexTime, setIndexTime] = useState(3);

  const fetchCoworking = async () => {
    const responseCoworking = await fetch(
      `http://localhost:3010/api/coworkings/${id}`
    );

    const responseCoworkingJs = await responseCoworking.json();

    setCoworking(responseCoworkingJs.data);
  };

  const handleUpdateCoworking = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;
    const price_hour = event.target.price_hour.value;
    const price_day = event.target.price_day.value;
    const price_month = event.target.price_month.value;
    const address_number = event.target.address_number.value;
    const address_street = event.target.address_street.value;
    const address_postCode = event.target.address_postcode.value;
    const address_city = event.target.address_city.value;

    const coworkingDataUpdate = {
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
        postCode: parseInt(address_postCode),
        city: address_city,
      },
    };

    const token = Cookies.get("jwt");

    const responseCreateApi = await fetch(
      `http://localhost:3010/api/coworkings/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(coworkingDataUpdate),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const responseCreateApiJS = await responseCreateApi.json();

    setInterval(() => {
      setIndexTime((indexTime) => indexTime - 1);
    }, 1000);

    setIsUpdate(true);

    setTimeout(() => {
      navigate("/admin/coworkings");
    }, 3000);
  };

  useEffect(() => {
    fetchCoworking();
  }, [coworking]);

  return (
    <>
      <Header />
      <section className="form-section">
        <h2>Modifier un coworking</h2>
        <form className="create-form" onSubmit={handleUpdateCoworking}>
          <div className="grid-3">
            <div className="form-element">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={coworking && coworking.name}
              />
            </div>

            <div className="form-element">
              <label htmlFor="superficy">Superficy</label>
              <input
                type="number"
                name="superficy"
                defaultValue={coworking && coworking.superficy}
              />
            </div>

            <div className="form-element">
              <label htmlFor="capacity">Capacity</label>
              <input
                type="number"
                name="capacity"
                defaultValue={coworking && coworking.capacity}
              />
            </div>
          </div>

          <div className="grid-3">
            <div className="form-element">
              <label htmlFor="price_hour">Price by hour</label>
              <input
                type="number"
                name="price_hour"
                defaultValue={coworking && coworking.price.hour}
              />
            </div>
            <div className="form-element">
              <label htmlFor="price_day">Price by day</label>
              <input
                type="number"
                name="price_day"
                defaultValue={coworking && coworking.price.day}
              />
            </div>

            <div className="form-element">
              <label htmlFor="price_month">Price by month</label>
              <input
                type="number"
                name="price_month"
                defaultValue={coworking && coworking.price.month}
              />
            </div>
          </div>

          <div className="form-element">
            <label htmlFor="address_number">Address number</label>
            <input
              type="number"
              name="address_number"
              defaultValue={coworking && coworking.address.number}
            />
          </div>

          <div className="form-element">
            <label htmlFor="address_street">Address street</label>
            <input
              type="text"
              name="address_street"
              defaultValue={coworking && coworking.address.street}
            />
          </div>

          <div className="form-element">
            <label htmlFor="address_postcode">Address zipcode</label>
            <input
              type="number"
              name="address_postcode"
              defaultValue={coworking && coworking.address.postCode}
            />
          </div>

          <div className="form-element">
            <label htmlFor="address_city">Address city</label>
            <input
              type="text"
              name="address_city"
              defaultValue={coworking && coworking.address.city}
            />
          </div>

          <input type="submit" className="submit-btn btn" />
        </form>
        {isUpdate && (
          <>
            <div className="pop-msg">
              <p>Le coworking à bien était modifié.</p>
            </div>
            <div className="pop-line"></div>
          </>
        )}
      </section>
    </>
  );
};

export default UpdateCoworking;
