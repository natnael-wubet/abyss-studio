import styles from "./Signup.module.css";
import * as React from "react";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Chip from "@mui/joy/Chip";
import StepC from "./StepC";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { CssVarsProvider } from "@mui/joy/styles";
import {
  useColorScheme,
  // Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from "@mui/material/styles";
//import { CssVarsProvider } from "@mui/joy/styles";
import StepA from "./StepA";

import { useState, useEffect } from "react";
import StepB from "./StepB";

//import { CssVarsProvider } from "@mui/joy/styles";

export default function Signup() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [orgName, setOrgName] = React.useState("");

  const [orgDisc, setOrgDisc] = React.useState("");

  const [taxNo, setTaxNo] = React.useState("");
  const [uname, setUname] = React.useState("");
  const [fullName, setFullName] = React.useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [signinMethod, setSigninMethod] = React.useState(0);
  const [AccountType, setAccountType] = useState(0);
  const [phone, setPhone] = React.useState("+251");
  useEffect(() => {
    if (
      (localStorage.theme == "light" && joymode == "dark") ||
      (localStorage.theme !== "light" && joymode == "light")
    ) {
      setJoyMode(joymode === "dark" ? "light" : "dark");
      //colorMode.toggleColorMode();
      localStorage.theme = joymode;
    }
  }, []);
  const { joymode, setJoyMode } = useColorScheme();
  const [email, setEmail] = React.useState("");
  return (
    <CssVarsProvider>
      <div className={styles.content}>
        {activeStep > 1 ? (
          <div className={styles.bottomNav}>
            <Button
              size="small"
              onClick={() => setActiveStep(activeStep - 1)}
              variant="outlined"
            >
              Go back
            </Button>
            <Button size="small">Signin instead</Button>
            <Button size="small">Learn More</Button>
          </div>
        ) : (
          ""
        )}
        {activeStep == 0 ? (
          <StepC
            setActiveStep={setActiveStep}
            AccountType={AccountType}
            setAccountType={setAccountType}
          />
        ) : activeStep == 1 ? (
          <StepA
            setPhone={setPhone}
            setEmail={setEmail}
            phone={phone}
            email={email}
            setActiveStep={setActiveStep}
            setSigninMethod={setSigninMethod}
          />
        ) : activeStep == 2 ? (
          <StepB
            setPhone={setPhone}
            uname={uname}
            setUname={setUname}
            taxNo={taxNo}
            setTaxNo={setTaxNo}
            fullName={fullName}
            AccountType={AccountType}
            setFullName={setFullName}
            signinMethod={signinMethod}
            phone={phone}
            orgDisc={orgDisc}
            setOrgDisc={setOrgDisc}
            orgName={orgName}
            setOrgName={setOrgName}
            email={email}
            setEmail={setEmail}
            setActiveStep={setActiveStep}
          />
        ) : (
          <></>
        )}{" "}
      </div>
    </CssVarsProvider>
  );
}
