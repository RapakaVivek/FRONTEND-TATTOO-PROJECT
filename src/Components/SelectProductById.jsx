import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../reduxapis";

const SelectProductById = () => {
  const Api = useSelector((state) => state.serverurl);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state || null;
  const [card, setCard] = useState({});
  const [time, setTime] = useState({ hour: "", minute: "", period: "AM" });
  const [date, setDate] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.users);

  const handlefetchdetails = async () => {
    console.log("fetching details for", id.id);
    const response = await fetch(`${Api.url}/api/designs/get/${id.id}`);
    const data = await response.json();
    console.log("Fetched data:", data);
    setCard(data);
  };

  useEffect(() => {
    if (id) {
      handlefetchdetails();
    }
  }, [id]);


  const handleaddtocart = async (designid) => {
    const body = {
      user_id: user?._id,
      design_id: designid,
      quantity: 1,
    };
    const response = await fetch(`${Api.url}/cart/add`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Accept-Language": "",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data.cart.items);
    dispatch(setCart(data.cart));
  };

  if (!id) {
    return <div>No product selected.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card shadow-lg rounded"  style={{marginTop:'50px'}}>
            <div className="row g-0" >
              <div className="col-md-6 col-12">
                <img
                  src={card.image}
                  className="img-fluid rounded-start"
                  alt={card.title}
                  style={{ objectFit: "contain", maxHeight: "400px", width: "100%" }}
                />
              </div>
              <div className="col-md-6 col-12 d-flex flex-column justify-content-between p-4">
                <div>
                  <h5 className="card-title text-primary">{card.name}</h5>
                  <h4 className="text-success">Price: ${card.price}</h4>
                  <div className="mt-5">
        <h3>Customer Reviews</h3>
        <p>⭐⭐⭐⭐⭐ (5/5)</p>
        <p>"Amazing product! Will definitely buy again."</p>
      </div>
                  <button
                    onClick={() => handleaddtocart(card._id)}
                    className="btn btn-danger w-100 mt-3"
                  >
                    Add to Cart
                  </button>
                </div>

             
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SelectProductById;
