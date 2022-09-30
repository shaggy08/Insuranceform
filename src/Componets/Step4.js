import React from "react";
import "./Step4.css";

function Step4({ formdata, setformdata, Formerror }) {
  return (
    <div className="step4-cont">
      <div className="row">
        <div className="left">
          <p>Plan selected</p>
        </div>
        <div className="right">
          <span style={{ fontWeight: "bold" }}>{formdata.plan}</span>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <p>Mobile number</p>
        </div>
        <div className="right">
          <span style={{ fontWeight: "bold" }}>{formdata.mobile}</span>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <p>Address</p>
        </div>
        <div className="right">
          <span style={{ fontWeight: "bold" }}>{formdata.addressLine01}</span>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <p>Pincode</p>
        </div>
        <div className="right">
          <span style={{ fontWeight: "bold" }}>{formdata.pincode}</span>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <p>State</p>
        </div>
        <div className="right">
          <span style={{ fontWeight: "bold" }}>{formdata.state}</span>
        </div>
      </div>
    </div>
  );
}

export default Step4;
