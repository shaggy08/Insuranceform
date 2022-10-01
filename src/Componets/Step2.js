import React from "react";
import Avatar from "@mui/material/Avatar";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
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
  const handlecheck = (event) => {
    setformdata({ ...formdata, deductioncheck: event.target.checked });
  };
  return (
    <div className="step2-maincont">
      <div className="step2-cont">
        <div className="s2-detial">
          <p className="s2plan">{formdata.plan}</p>
          <div className="s2name">
            <Avatar src="/broken-image.jpg" className="s2avtar" />
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
            className="changes"
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
            sx={{
              ".MuiSlider-thumb": {
                color: "#d44c46",
              },
              ".MuiSlider-rail": {
                backgroundColor: "#ffde9e",
              },
              ".MuiSlider-track": {
                color: "#d44c46",
              },
            }}
          />
        </div>
        <p className="error">{Formerror.deduction}</p>
      </div>
      <div className="s2declration">
        <Checkbox
          checked={formdata.deductioncheck}
          onChange={handlecheck}
          inputProps={{ "aria-label": "controlled" }}
        />
        <p>
          I understand that the insurance will not be utilized until ₹
          {formdata.deduction * 100000} is exhausted
        </p>
      </div>
      <p className="error">{Formerror.deductioncheck}</p>
    </div>
  );
}

export default Step2;
