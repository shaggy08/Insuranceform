import React from "react";
import "./Step4.css";

function Step4({ formdata }) {
  return (
    <div className="step4-cont">
      <div className="row">
        <div className="left">
          <p className="rLeft">Plan selected</p>
        </div>
        <div className="right">
          <span className="rRight">{formdata.plan}</span>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <p className="rLeft">Mobile number</p>
        </div>
        <div className="right">
          <span className="rRight">{formdata.mobile}</span>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <p className="rLeft">Address</p>
        </div>
        <div className="right">
          <span className="rRight">{formdata.addressLine01}</span>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <p className="rLeft">Pincode</p>
        </div>
        <div className="right">
          <span className="rRight">{formdata.pincode}</span>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <p className="rLeft">State</p>
        </div>
        <div className="right">
          <span className="rRight">{formdata.state}</span>
        </div>
      </div>
    </div>
  );
}

export default Step4;
