import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContainer from "../ProductContainer/ProductContainer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://powerful-badlands-93747.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const style = {
    marginRight: "20px",
    padding: "5px",
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className=" container ">
      <nav className="navbar  navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand">
            {" "}
            <b>Premium Store</b>{" "}
          </a>
          <div className="d-flex m-2 p-2">
            <Link style={style} to="/home">
              Home
            </Link>
            <Link style={style} to="/order">
              Order
            </Link>
            <Link style={style} to="/admin">
              Admin
            </Link>
            <Link to="/login">
              <button
                style={{ backgroundColor: "black" }}
                type="button"
                className="btn "
              >
                <span style={{ color: "white" }}> Login</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className=" container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductContainer key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
