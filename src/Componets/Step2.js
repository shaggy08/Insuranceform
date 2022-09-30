import React from "react";
import Avatar from "@mui/material/Avatar";
import Slider from "@mui/material/Slider";
import "./Step2.css";

function Step2({ formdata, setformdata, Formerror }) {
  const marks = [
    {
      value: 1,
      label: "₹1L",
    },
    {
      value: 2,
      label: "₹2L",
    },
    {
      value: 3,
      label: "₹3L",
    },
    {
      value: 5,
      label: "₹5L",
    },
  ];
  function valuetext(value) {
    console.log(formdata.deduction);
    return `${value}°C`;
  }
  const handlechange = (event) => {
    setformdata({ ...formdata, deduction: event.target.value });
  };

  return (
    <div className="step2-cont">
      <div className="s2-detial">
        <h4>{formdata.plan}</h4>
        <div className="s2name">
          <Avatar src="/broken-image.jpg" />
          <p>Sahil Malik</p>
        </div>
      </div>
      <hr></hr>
      <div className="s2-deduction">
        <p>
          Sum insured of ₹20,00,000 with a deduction of{" "}
          <span style={{ fontWeight: "bold" }}>
            {" "}
            ₹{formdata.deduction * 100000}{" "}
          </span>
        </p>
      </div>
      <div className="s2slider">
        <Slider
          aria-label="Custom marks"
          defaultValue={2}
          getAriaValueText={valuetext}
          value={formdata.deduction}
          onChange={handlechange}
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          min={1}
          max={5}
        />
      </div>
      <p className="error">{Formerror.deduction}</p>
    </div>
  );
}

export default Step2;
