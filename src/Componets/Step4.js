import React from "react";
import "./Step4.css";

const reviewDetails = [
  {
    label: "plan",
    value: "Plan selected",
  },
  {
    label: "mobile",
    value: "Mobile number",
  },
  {
    label: "addressLine01",
    value: "Address",
  },
  {
    label: "pincode",
    value: "Pincode",
  },
  {
    label: "pincode",
    value: "State",
  },
];

function Step4({ formdata }) {
  return (
    <div className="step4-cont">
      {reviewDetails.map((review) => {
        return (
          <div className="row">
            <div className="left">
              <p className="rLeft">{review.value}</p>
            </div>
            <div className="right">
              <span className="rRight">{formdata[review.label]}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Step4;
