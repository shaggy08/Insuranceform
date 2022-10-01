import React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./Step3.css";

const declrations = [
  {
    label: "dl1",
    value:
      "I hereby decalre that none of the propsed member are habitual consumer of alcohol, tobacco, gukta or any recreational drug.",
  },
  {
    label: "dl2",
    value:
      "I hereby declare that all members are in good heath and entilrely free from any mental pf physical impairements or deformited, disease/contion.",
  },
  {
    label: "dl3",
    value:
      "I hereby declare that all members are in good heath and entilrely free from any mental pf physical impairements or deformited, disease/contion.",
  },
  {
    label: "dl4",
    value: "I understand that this policy doesn't cover Pre-existung diseases.",
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
