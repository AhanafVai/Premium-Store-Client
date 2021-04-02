import React from "react";
import { FaQrcode, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const OrderContainer = (props) => {
  const { name, checkOut, price, email, Recipient, _id } = props.order;

  return (
    <div
      className="card text-dark bg-light mb-3 mx-auto mt-5"
      style={{ maxWidth: "20rem", height: "30rem" }}
    >
      <div className="card-header">
        <h2 className="text-center">Premium Shop</h2>
      </div>
      <div className="card-body">
        <div className="border-bottom border-2 mb-2">
          <h5 className="card-title">Customer: {Recipient}</h5>
          <h6 className="card-title">Email: {email}</h6>
        </div>
        <div className="border-bottom border-2 ">
          <h6>
            <small className="d-flex justify-content-between">
              <span> YY/MM/DD:</span>
              <span className="text-end">{checkOut}</span>
            </small>
          </h6>
          <h6>
            <small className="d-flex justify-content-between">
              <span> Product:</span> <span>{name}</span>
            </small>
          </h6>
          <h6>
            <small className="d-flex justify-content-between">
              <span> Price: $</span>
              <span>{price}</span>
            </small>
          </h6>
        </div>
        <div className="mt-2 text-center">
          <h4>Thank You For Shopping</h4>
          <span style={{ fontSize: "3rem" }}>
            <FaQrcode />
          </span>
          <p>Id: {_id}</p>

          <p> follow us on </p>
          <h4>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
