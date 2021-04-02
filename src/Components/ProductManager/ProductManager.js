import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ProductManager = (props) => {
  const { name, price, _id } = props.info;

  const deleteProducts = (id) => {
    fetch(`https://powerful-badlands-93747.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Deleted item");
        }
      });
  };
  return (
    <div className="container ">
      <ul className="list-group  list-group-horizontal-md">
        <li
          style={{ width: "13rem" }}
          className="list-group-item  list-group-item-action list-group-item-primary"
        >
          <span>name: {name}</span>
        </li>
        <li
          style={{ width: "13rem" }}
          className="list-group-item   list-group-item-action list-group-item-info"
        >
          <span>price: ${price}</span>
        </li>
        <li
          style={{ width: "13rem" }}
          className="list-group-item border-0 text-center"
        >
          {" "}
          <span>
            <button
              onClick={() => deleteProducts(_id)}
              type="button"
              className="btn  btn-outline-danger"
            >
              <FaTrashAlt />
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProductManager;
