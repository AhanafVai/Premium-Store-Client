import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const ProductContainer = (props) => {
  const { name, imageURL, price } = props.product;
  const [checkOutInfo, setCheckOutInfo] = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="col-md-3 mb-3">
      <div className="card mx-auto p-2" style={{ width: "18rem" }}>
        <img src={imageURL} className="card-img-top img-fluid" alt={name} />
        <div className="card-body ">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{name}</h5>
            <h5 className="card-text"> ${price}</h5>
          </div>

          {loggedInUser.email ? (
            <Link to="/checkOut">
              <button
                onClick={() =>
                  setCheckOutInfo({
                    name,
                    price,
                    imageURL,
                    email: loggedInUser.email,
                    Recipient: loggedInUser.name,
                  })
                }
                style={{ backgroundColor: "black" }}
                type="button"
                className="btn "
              >
                <span style={{ color: "white" }}> Buy Now</span>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button
                style={{ backgroundColor: "black" }}
                type="button"
                className="btn "
              >
                <span style={{ color: "white" }}> Login to place order</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
