import React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./Step3.css";

function Step3({ formdata, setformdata, Formerror }) {
  const handledl1 = (event) => {
    setformdata({ ...formdata, dl1: event.target.checked });
  };
  const handledl2 = (event) => {
    setformdata({ ...formdata, dl2: event.target.checked });
  };
  const handledl3 = (event) => {
    setformdata({ ...formdata, dl3: event.target.checked });
  };
  const handledl4 = (event) => {
    setformdata({ ...formdata, dl4: event.target.checked });
  };

  return (
    <div className="step3-cont">
      <div className="declration">
        <Checkbox
          checked={formdata.dl1}
          onChange={handledl1}
          inputProps={{ "aria-label": "controlled" }}
        />
        <p>
          I hereby decalre that none of the propsed member are habitual consumer
          of alcohol, tobacco, gukta or any recreational drug.
        </p>
      </div>
      <div className="declration">
        <Checkbox
          checked={formdata.dl2}
          onChange={handledl2}
          inputProps={{ "aria-label": "controlled" }}
        />
        <p>
          I hereby declare that all members are in good heath and entilrely free
          from any mental pf physical impairements or deformited,
          disease/contion.
        </p>
      </div>
      <div className="declration">
        <Checkbox
          checked={formdata.dl3}
          onChange={handledl3}
          inputProps={{ "aria-label": "controlled" }}
        />
        <p>
          I have understood that there is a 30 day waiting period for all
          diseased and 2 year of named ailments. (list of named ailemnts)
        </p>
      </div>
      <div className="declration">
        <Checkbox
          checked={formdata.dl4}
          onChange={handledl4}
          inputProps={{ "aria-label": "controlled" }}
        />
        <p>
          I understand that this policy doesn't cover Pre-existung diseases.
        </p>
      </div>
      <p className="error">{Formerror.dl}</p>
    </div>
  );
}

export default Step3;
