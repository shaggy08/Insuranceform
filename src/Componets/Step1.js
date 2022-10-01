import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import "./Step1.css";
import TextField from "@mui/material/TextField";

const menuOptions = [
  {
    label: "Self",
    value: 600,
  },
  {
    label: "Parent",
    value: 800,
  },
  {
    label: "Self + Parent",
    value: 1000,
  },
  {
    label: "Self + Parent + kids",
    value: 1800,
  },
];

function Step1({ formdata, setformdata, Formerror }) {
  const handleChange = (event) => {
    setformdata({ ...formdata, plan: event.target.value });
  };
  const handledetail = (event, key) => {
    setformdata({ ...formdata, [key]: event.target.value });
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
            sx={{
              ".MuiSelect-select": {
                display: "flex",
                justifyContent: "space-between",
              },
            }}
          >
            {menuOptions.map((option) => {
              return (
                <MenuItem
                  className="plan-option"
                  value={option.label}
                  sx={{
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Avatar src="/broken-image.jpg" />{" "}
                    <p className="font-sm">{option.label} </p>
                  </div>
                  <div className="plan-prize ">{option.value}</div>
                </MenuItem>
              );
            })}
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
              onChange={(event) => handledetail(event, "email")}
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
              onChange={(event) => handledetail(event, "mobile")}
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
              onChange={(event) => handledetail(event, "addressLine01")}
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
              onChange={(event) => handledetail(event, "addressLine02")}
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
              onChange={(event) => handledetail(event, "pincode")}
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
              onChange={(event) => handledetail(event, "state")}
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
