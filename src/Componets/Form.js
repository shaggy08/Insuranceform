import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
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
    mobile: "",
    addressLine01: "",
    addressLine02: "",
    pincode: "",
    deduction: 0,
    deductioncheck: false,
    dl1: false,
    dl2: false,
    dl3: false,
    dl4: false,
  });

  const validate = () => {
    setisvalid(false);
    setFormerror(() => handleVlidation(formdata));
  };
  const handleVlidation = (formdata) => {
    const error = {};

    const hasNumber = /\d/;
    const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    const isnum = /^\d+$/;
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
      } else if (!isnum.test(formdata.mobile)) {
        error.mobile = "Please enter a valid 10 digit mobile number";
      }
      if (!formdata.addressLine01) {
        error.addressLine01 = "Please enter address";
      } else if (formdata.addressLine01.length > 80) {
        error.addressLine01 = "adrress should be less than 80 characters";
      }
      if (!formdata.addressLine02) {
        error.addressLine02 = "Please enter address";
      } else if (formdata.addressLine02.length > 80) {
        error.addressLine02 = "adrress should be less than 80 characters";
      }
      if (formdata.pincode.length !== 6) {
        error.pincode = "Please enter 6 digit pincode";
      } else if (!isnum.test(formdata.pincode)) {
        error.pincode = "Please enter a valid 6 digit pincode";
      }
      if (!formdata.state) {
        error.state = "Please enter state";
      } else if (hasNumber.test(formdata.state)) {
        error.state = "state can not have number";
      }
    }
    if (page == 1 && formdata.deduction == 0) {
      error.deduction = "Please select deduction amount";
    }
    if (page == 1 && !formdata.deductioncheck) {
      error.deductioncheck = "Please declare deduction";
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

  const handlesubmit = () => {
    setisSubmited(true);
  };

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
      return <Step4 formdata={formdata} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div className="pbar">
          <div className="step active"></div>
          <div className={page > 0 ? "step active" : "step"}></div>
          <div className={page > 1 ? "step active" : "step"}></div>
          <div className={page > 2 ? "step active" : "step"}></div>
        </div>
      </div>
      <div className="form-container">
        <div className="fomr-cont1">
          <div className="head">
            <div className="prev-butn title-font">
              {page == 0 || isSubmited ? (
                <></>
              ) : (
                <div
                  className="prev-arrow"
                  onClick={() => {
                    setpage((currPage) => currPage - 1);
                  }}
                >
                  <div className="svgi">
                    <ArrowBackIosNewRoundedIcon
                      className="top-prev-button"
                      disabled={page == 0 || isSubmited}
                    ></ArrowBackIosNewRoundedIcon>
                  </div>
                </div>
              )}
              <p>{isSubmited ? "Congratulations!!" : FormTitle[page]}</p>
            </div>
            <div className="head-intro">
              {page == 0 ? (
                <>
                  <p>
                    Hello Sahil,
                    <br /> Increase yours and your family's health insurance
                    cover by
                    <span style={{ fontWeight: "bold" }}> ₹20 lakhs</span> with
                    with Super top-up!
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="form-body">{PageDisplay()}</div>
        </div>
        {page == 3 ? (
          <></>
        ) : (
          <div className="preview">
            <p className="fp-font"> Form preview</p>
            <hr></hr>
            <div className="preview-detail preview-font">
              <p>Personal email address</p>
              <p>{formdata.email}</p>
              <p>Mobile number</p>
              <p>{formdata.mobile}</p>
              <p>Address line 01</p>
              <p>{formdata.addressLine01}</p>
              <p>Address line 02</p>
              <p>{formdata.addressLine02}</p>
              <p>Pincode</p>
              <p>{formdata.pincode}</p>
              <p>State</p>
              <p>{formdata.state}</p>
            </div>
          </div>
        )}
      </div>
      {isSubmited ? (
        <></>
      ) : (
        <div className="footer">
          {page == FormTitle.length - 1 ? (
            <button
              className="foot-button"
              onClick={() => {
                handlesubmit();
              }}
            >
              {" "}
              Submit
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
        </div>
      )}
    </div>
  );
}

export default Form;
