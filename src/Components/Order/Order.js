import React, { useContext, useEffect, useState } from "react";
import OrderContainer from "../OrderContainer/OrderContainer";
import { UserContext } from "../../App";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(
      "https://powerful-badlands-93747.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <OrderContainer key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Order;
