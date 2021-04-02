import React, { useContext, useState } from "react";

import { UserContext } from "../../App";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const CheckOut = () => {
  const [selectedDate, setSelectedDate] = useState({
    checkOut: new Date(),
  });
  const [checkOutInfo, setCheckOutInfo] = useContext(UserContext);

  const handleCheckOutDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkOut = date;
    setSelectedDate(newDates);
  };

  const handleOrderPlacement = () => {
    const orderPlacement = {
      ...checkOutInfo,
      ...selectedDate,
    };

    fetch("https://powerful-badlands-93747.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderPlacement),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order placed");
        }
      });
  };
  return (
    <div className="container text-center">
      <h1>Checkout</h1>
      <div style={{ border: "1px black solid", borderRadius: "5px" }}>
        <div className="card m-2 mx-auto" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="img-fluid"
                src={checkOutInfo.imageURL}
                alt={checkOutInfo.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{checkOutInfo.name}</h5>

                  <h5 className="card-text">${checkOutInfo.price}</h5>
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="CheckOut Date"
                      value={selectedDate.checkOut}
                      onChange={handleCheckOutDate}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end">
        <button
          style={{ backgroundColor: "black" }}
          type="button"
          className="btn mt-4"
        >
          <span onClick={handleOrderPlacement} style={{ color: "white" }}>
            Proceed Order
          </span>
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
