import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";

const AddProduct = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      imageURL: imageURL,
      price: data.price,
    };

    fetch("https://powerful-badlands-93747.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    }).then((res) => {
      if (res) {
        alert("Added Product");
      }
    });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "69ee8e3dd464f45460eada435d7d8652");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Add product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            name="name"
            defaultValue="New Product"
            ref={register}
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Product Price
          </label>
          <input
            placeholder="Enter Price"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            name="price"
            ref={register}
          />
        </div>
        <input
          className="form-control"
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <button className="btn btn-outline-success mt-3" type="submit">
          <span className="m-2">Upload </span>
          <FaUpload />
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
