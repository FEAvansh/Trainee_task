import React from "react";
import "./Cart.css";
import { URL } from "../../utils/helper";

const Cartproduct = (props) => {
  return (
    <div className="col-md-10 main pt-2" key={props.card.id}>
      <div className="row border rounded">
        <div className="col-md-3 mt-1">
          <img
            className="img-fluid img-responsive rounded product-image"
            src={URL + props.card.img}
            alt="cardimg"
          />
        </div>
        <div className="col-md-6 mt-3">
          <h5>{props.card.name}</h5>
          <div className="mt-1 mb-1 spec-1">
            <p>Product Quantity : {props.card.quantity}</p>
            <p>Specification: {props.card.specification}</p>
          </div>
        </div>
        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
          <div className="d-flex flex-row align-items-center mt-2">
            <h4 className="mr-1">&#x20b9; {props.card.price}</h4>
          </div>
          <div className="d-flex flex-column mt-3 ">
            <button
              className="dbutton"
              type="button"
              onClick={() => props.onDelete(props.card.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cartproduct;
