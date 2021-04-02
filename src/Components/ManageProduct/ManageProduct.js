import React, { useEffect, useState } from "react";

import ProductManager from "../ProductManager/ProductManager";

const ManageProduct = () => {
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    fetch("https://powerful-badlands-93747.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProductInfo(data));
  }, []);
  return (
    <div>
      {productInfo.map((info) => (
        <ProductManager key={info._id} info={info} />
      ))}
    </div>
  );
};

export default ManageProduct;
