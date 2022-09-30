import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import LinearProgress from "@mui/material/LinearProgress";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import "./Form.css";

function Form() {
  const [page, setpage] = useState(0);
  let FormTitle = [
    "Choose your plan",
    "Select your deductible amount",
    "Declaration",
    "Review and confirm payment",
  ];
  const [Formerror, setFormerror] = useState({});
  const [isvalid, setisvalid] = useState(false);
  const [isSubmited, setisSubmited] = useState(false);

  const [formdata, setformdata] = useState({
    plan: "",
    email: "",
    mobile: 0,
    addressLine01: "",
    addressLine02: "",
    pincode: 0,
    state: "",
    deduction: 0,
    dl1: false,
    dl2: false,
    dl3: false,
    dl4: false,
  });
  const validate = () => {
    console.log("valide");
    setisvalid(false);
    setFormerror(() => handleVlidation(formdata));
    console.log(isvalid);
    // if (Object.keys(Formerror).length == 0 && isvalid) {
    //   setpage((currPage) => currPage + 1);
    // }
  };
  const handleVlidation = (formdata) => {
    const error = {};
    console.log("validete called");
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if (page == 0) {
      if (!formdata.plan) {
        error.plan = "Please select a plan";
      }
      if (!formdata.email) {
        error.email = "Please enter email";
      } else if (!regex.test(formdata.email)) {
        error.email = "Please give valid email";
      }
      if (formdata.mobile.length !== 10) {
        error.mobile = "Please provide 10 digit mobile number";
      }
      if (!formdata.addressLine01) {
        error.addressLine01 = "Please enter address";
      }
      if (!formdata.addressLine02) {
        error.addressLine02 = "Please enter address";
      }
      if (formdata.pincode.length !== 6) {
        error.pincode = "Please enter 6 digit pincode";
      }
      if (!formdata.state) {
        error.state = "Please enter state";
      }
    }
    if (page == 1 && formdata.deduction == 0) {
      error.deduction = "Please select deduction amount";
    }
    if (page == 2) {
      if (!formdata.dl1 || !formdata.dl2 || !formdata.dl3 || !formdata.dl4) {
        error.dl = "Please complete all declaration";
      }
    }

    if (Object.keys(error).length == 0) {
      setisvalid(true);
    }

    return error;
  };
  const handlepage = () => {
    if (Object.keys(Formerror).length == 0 && isvalid) {
      setpage((currPage) => currPage + 1);
    }
  };
  const handlesubmit = () => {
    // console.log("insubmites");
    // FormTitle.pop();
    // console.log(FormTitle);
    // FormTitle.push("Congrations!");
    setisSubmited(true);
  };
  console.log(page);

  useEffect(() => {
    if (Object.keys(Formerror).length == 0 && isvalid) {
      setpage((currPage) => currPage + 1);
    }
  }, [Formerror]);
  const PageDisplay = () => {
    if (page == 0) {
      return (
        <Step1
          formdata={formdata}
          setformdata={setformdata}
          Formerror={Formerror}
        />
      );
    } else if (page == 1) {
      return (
        <Step2
          formdata={formdata}
          setformdata={setformdata}
          Formerror={Formerror}
        />
      );
    } else if (page == 2) {
      return (
        <Step3
          formdata={formdata}
          setformdata={setformdata}
          Formerror={Formerror}
        />
      );
    } else {
      return (
        <Step4
          formdata={formdata}
          setformdata={setformdata}
          Formerror={Formerror}
        />
      );
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <LinearProgress variant="determinate" value={(page + 1) * 25} />
      </div>
      <div className="form-container">
        <div className="head">
          <div className="prev-butn">
            {page == 0 || isSubmited ? (
              <></>
            ) : (
              <ArrowBackIosIcon
                className="top-prev-button"
                disabled={page == 0 || isSubmited}
                onClick={() => {
                  setpage((currPage) => currPage - 1);
                }}
              >
                {" "}
                Prev
              </ArrowBackIosIcon>
            )}
          </div>
          <div className="head">
            <h1>{isSubmited ? "Congrations!!" : FormTitle[page]}</h1>
          </div>
        </div>
        <div className="form-body">{PageDisplay()}</div>
        <div className="footer">
          {/* <button
            className="foot-button"
            disabled={page == 0}
            onClick={() => {
              setpage((currPage) => currPage - 1);
            }}
          >
            {" "}
            Prev
          </button> */}
          {page == FormTitle.length - 1 ? (
            <button
              className="foot-button"
              onClick={() => {
                handlesubmit();
              }}
            >
              {" "}
              submit
            </button>
          ) : (
            <button
              className="foot-button"
              disabled={page == FormTitle.length - 1}
              onClick={() => {
                validate();
              }}
            >
              {" "}
              Next
            </button>
          )}
          {/* <button
            className="foot-button"
            disabled={page == FormTitle.length - 1}
            onClick={() => {
              validate();
              //   handlepage();
              //   setpage((currPage) => currPage + 1);
            }}
            // onClick={() => {

            // }}
          >
            {" "}
            Next
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Form;
