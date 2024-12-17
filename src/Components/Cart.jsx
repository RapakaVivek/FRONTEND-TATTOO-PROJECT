import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, incrementQuantity, decrementQuantity } from "./CartComp";
import { Link } from "react-router-dom";
import { clearCartFromRedux, deleteItemFromCart, incrementItemQuantity } from "../authapis";
import '../App.css'
const Cart = () => {
  const [cart, setcart] = useState([]);
  const cartdetails = useSelector((state) => state.carts);
  const userdetails = useSelector((state) => state.users);
  const serverurl = useSelector((state) => state.serverurl);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartdetails) {
      setcart(cartdetails?.items);
      console.log("cart", cartdetails);
    }
  }, [cartdetails]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Booking</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item?.design?.image}
                    alt={item.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>
                  {item?.design?.name}
                </td>
                <td>${item?.design?.price}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() =>
                        dispatch(
                          incrementItemQuantity(
                            item?.design?._id,
                            item?.quantity - 1,
                            userdetails._id,
                            serverurl?.url
                          )
                        )
                      }
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-secondary btn-sm ms-2"
                      onClick={() =>
                        dispatch(
                          incrementItemQuantity(
                            item?.design?._id,
                            item?.quantity + 1,
                            userdetails._id,
                            serverurl?.url
                          )
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${item?.subtotal}</td>
                <td>
                  <Link
                    to="/booking"
                    state={{ designid: item?.design?._id, artistid: item?.design?.artist_id }}
                  >
                    <button className="btn btn-primary btn-sm">
                      Book
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      dispatch(deleteItemFromCart(item?.design?._id, userdetails._id, serverurl?.url))
                    }
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="btn btn-danger w-100 mt-3"
        onClick={() => dispatch(clearCartFromRedux(userdetails._id, serverurl?.url))}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
