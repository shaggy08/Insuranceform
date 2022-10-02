import React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./Step3.css";

const declrations = [
  {
    label: "dl1",
    value:
      "I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.",
  },
  {
    label: "dl2",
    value:
      "I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.",
  },
  {
    label: "dl3",
    value:
      "I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)",
  },
  {
    label: "dl4",
    value: "I understand that this policy doesn't cover Pre-existing diseases.",
  },
];

function Step3({ formdata, setformdata, Formerror }) {
  const handledchecks = (event, key) => {
    setformdata({ ...formdata, [key]: event.target.checked });
  };

  return (
    <div className="step3-cont">
      {declrations.map((declare) => {
        return (
          <div className="declration">
            <Checkbox
              checked={formdata[declare.label]}
              onChange={(event) => handledchecks(event, declare.label)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <p>{declare.value}</p>
          </div>
        );
      })}
      <p className="error">{Formerror.dl}</p>
    </div>
  );
}

export default Step3;
