import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import "./Step1.css";
import TextField from "@mui/material/TextField";

function Step1({ formdata, setformdata, Formerror }) {
  const handleChange = (event) => {
    setformdata({ ...formdata, plan: event.target.value });
  };
  const handleEmail = (event) => {
    setformdata({ ...formdata, email: event.target.value });
  };
  const handleMobile = (event) => {
    setformdata({ ...formdata, mobile: event.target.value });
  };
  const handleaddressLine01 = (event) => {
    setformdata({ ...formdata, addressLine01: event.target.value });
  };
  const handleaddressLine02 = (event) => {
    setformdata({ ...formdata, addressLine02: event.target.value });
  };
  const handlepincode = (event) => {
    setformdata({ ...formdata, pincode: event.target.value });
  };
  const handlestate = (event) => {
    setformdata({ ...formdata, state: event.target.value });
  };
  return (
    <div className="step1-cont">
      <div className="plan-selection">
        <p className="pdetil"> Plan detils</p>
        <hr></hr>
        <p className="font-sm"> your plan type</p>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">select Plan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formdata.plan}
            label="Select Plan"
            onChange={handleChange}
          >
            <MenuItem className="plan-option" value="self">
              {/* <div className="plan-option"> */}
              <div>
                <Avatar src="/broken-image.jpg" />{" "}
                <p className="font-sm"> self </p>
              </div>
              <div className="plan-prize ">600</div>
              {/* </div> */}
            </MenuItem>
            <MenuItem className="plan-option font-sm" value="Parent">
              <div>
                <Avatar src="/broken-image.jpg" />{" "}
                <p className="font-sm"> Parent </p>
              </div>
              <div className="plan-prize">600</div>
            </MenuItem>
            <MenuItem className="plan-option" value="self + parent">
              {/* <div className="plan-option"> */}
              <div>
                <Avatar src="/broken-image.jpg" />{" "}
                <p className="font-sm"> self + parent</p>
              </div>
              <div className="plan-prize">600</div>
              {/* </div> */}
            </MenuItem>
            <MenuItem className="plan-option" value="self + parent + kid">
              {/* <div className="plan-option"> */}
              <div>
                <Avatar src="/broken-image.jpg" />{" "}
                <p className="font-sm"> self + parent + kid </p>
              </div>
              <div className="plan-prize">600</div>
              {/* </div> */}
            </MenuItem>
          </Select>
        </FormControl>
        <p className="error">{Formerror.plan}</p>
      </div>
      <div className="basicdeatils-cont">
        <p className="detils-basic"> Basic details</p>
        <hr></hr>
        <div className="details">
          <div className="email">
            <p className="font-sm"> Email</p>
            <TextField
              required
              id="outlined-required"
              value={formdata.email}
              onChange={handleEmail}
              placeholder="Enter email"
            />
            <p className="error">{Formerror.email}</p>
          </div>

          <div className="email">
            <p className="font-sm"> Mobile number </p>
            <TextField
              required
              id="outlined-required"
              value={formdata.mobile}
              onChange={handleMobile}
              placeholder="Enter 10 digit mobile number"
            />
            <p className="error">{Formerror.mobile}</p>
          </div>
          <div className="email">
            <p className="font-sm"> Adress line 01</p>
            <TextField
              required
              id="outlined-required"
              value={formdata.addressLine01}
              onChange={handleaddressLine01}
              placeholder="Enter addressLine01"
            />
            <p className="error">{Formerror.addressLine01}</p>
          </div>
          <div className="email">
            <p className="font-sm"> Adress line 02</p>
            <TextField
              required
              id="outlined-required"
              value={formdata.addressLine02}
              onChange={handleaddressLine02}
              placeholder="Enter addressLine02"
            />
            <p className="error">{Formerror.addressLine02}</p>
          </div>
          <div className="email">
            <p className="font-sm"> Pincode</p>
            <TextField
              required
              id="outlined-required"
              value={formdata.pincode}
              onChange={handlepincode}
              placeholder="Enter 6 digit pincode"
            />
            <p className="error">{Formerror.pincode}</p>
          </div>
          <div className="email">
            <p className="font-sm"> State</p>
            <TextField
              required
              id="outlined-required"
              value={formdata.state}
              onChange={handlestate}
              placeholder="Enter state"
            />
            <p className="error">{Formerror.state}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;
