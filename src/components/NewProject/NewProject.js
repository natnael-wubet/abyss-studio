import styles from "./NewProject.module.css";
import React, { useState, useEffect } from "react";
import { Steps, Panel, Placeholder, ButtonGroup, Button } from "rsuite";
import { db } from "../../db.js";
import StepA from "./Steps/StepA";
import StepB from "./Steps/StepB";
import SnackAlert from "../SnackAlert";
export default function NewProject({ setOpen }) {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("");

  const [discription, setDiscription] = useState("");
  const [projectType, setProjectType] = React.useState("single");
  const [projectField, setProjectField] = React.useState("planeTime");
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  //Snackbar properties
  const [snackMessage, setSnackMessage] = useState("");
  const [snackType, setSnackType] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackVertical, setSnackVertical] = useState("");
  const [snackHorizontal, setSnackHorizontal] = useState("");

  // end of snack
  const createProject = () => {
    console.log("creating project");
    let createdAt = Date.now();
    let obj = {
      title,
      discription,
      projectType,
      projectField,
      createdAt,
      tabs: {},
    };
    db.projects.add(obj);
    let allProjects = [];
    if (localStorage.projects) {
      try {
        allProjects = JSON.parse(localStorage.projects);
      } catch (e) {
        //
      }
    }
    let id = allProjects.length + 1;
    obj.id = id;
    allProjects.push(obj);

    localStorage.projects = JSON.stringify(allProjects);
    //Snack bar alerting
    setSnackMessage(`Project [${id}] successfully created!`);
    setSnackType("success");
    // setSnackVertical('top');
    //setSnackHorizontal('center');
    setSnackOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
    //end alerting
  };
  return (
    <>
      <SnackAlert
        message={snackMessage}
        color="danger"
        type={snackType}
        open={snackOpen}
        setOpen={setSnackOpen}
        verical={snackVertical}
        horizontal={snackHorizontal}
      />
      <div>
        <Steps color="danger" current={step}>
          <Steps.Item
            color="danger"
            title="General info"
            description="Example: identifiers"
          />
          <Steps.Item color="danger" title="Project composition" />
        </Steps>
        <hr />

        {step === 0 ? (
          <StepA
            title={title}
            setTitle={setTitle}
            discription={discription}
            setDiscription={setDiscription}
          />
        ) : step === 1 ? (
          <StepB
            projectField={projectField}
            setProjectField={setProjectField}
            projectType={projectType}
            createProject={createProject}
            setProjectType={setProjectType}
          />
        ) : (
          <></>
        )}
        <br />
        <ButtonGroup>
          <Button onClick={onPrevious} disabled={step === 0}>
            Previous
          </Button>
          <Button onClick={onNext} disabled={step === 1}>
            Next
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
