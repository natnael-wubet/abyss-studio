import styles from "./StepA.module.css";
import * as React from "react";
import { useState, useEffect } from "react";

import Button from "@mui/joy/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import Lottie from "react-lottie";
import Box from "@mui/joy/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/joy/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import OtpInput from "react-otp-input";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Snackbar from "@mui/material/Snackbar";
import * as animationData from "../../../assets/lotties/otp.json";
import MuiAlert from "@mui/material/Alert";
import PhoneInput from "react-phone-number-input";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import FormHelperText from "@mui/joy/FormHelperText";
//import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import GoogleIcon from "@mui/icons-material/Google";

import { auth, database } from "../../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Backdrop from "@mui/material/Backdrop";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import IconButton from "@mui/material/IconButton";
//import FilledInput from "@mui/material/FilledInput";
//import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PasswordChecklist from "react-password-checklist";
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function StepA({
  setActiveStep,
  setSigninMethod,
  setEmail,
  phone,
  email,
  setPhone,
}) {
  const [recapSolv, setrecapSolv] = useState(false);
  const [termCheck, setTermCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState(false);
  const [snackType, setSnackType] = useState("");
  const [snackMessage, setSnackMessage] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    password2: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    showPassword2: false,
  });
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [signupStep, setSignupStep] = useState(0);
  const signupWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        localStorage.user = JSON.stringify(user);
        localStorage.signinObj = JSON.stringify(result);
        console.log("ok0");
        setEmail(user.email);
        setSigninMethod(1);

        setSignupStep(signupStep + 1);
        setActiveStep(2);

        console.log("ok02");

        // ...
        setSnackType("success");
        setOtpCode("");
        setSnackMessage("Signup with google!");

        setLoading(false);
        setSnack(true);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.\

        console.log(error, 1223345);
        setLoading(false);
        // User couldn't sign in (bad verification code?)
        // ...
        setSnackType("error");
        setSnackMessage(`error authenticating: ${error} please try again.`);

        setSnack(true);
        // ...
      });
  };
  const verify = () => {
    setLoading(true);
    let phonebook = `phoneBook/${parseInt(phone)}`;
    console.log(`verify ${otpCode} ${phonebook}`);
    window.confirmationResult
      .confirm(otpCode)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        localStorage.user = JSON.stringify(user);
        localStorage.signinObj = JSON.stringify(result);
        console.log("ok0");
        setSigninMethod(0);
        setSignupStep(signupStep + 1);
        setActiveStep(2);

        console.log("ok02");

        // ...
        setSnackType("success");
        setOtpCode("");
        setSnackMessage("Code confirmed!");

        setLoading(false);
        setSnack(true);
      })
      .catch((error) => {
        console.log(error, 1223345);
        setLoading(false);
        // User couldn't sign in (bad verification code?)
        // ...
        setSnackType("error");
        setSnackMessage("Wrong code! please try again.");

        setSnack(true);
      });
  };
  const sendCode = () => {
    const appVerifier = window.recaptchaVerifier;
    setLoading(true);
    console.log(phone);

    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setSignupStep(signupStep + 1);
        console.log(confirmationResult, 12);
        // ...
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
        console.log(123, error);
        // Error; SMS not sent
        // ...
      });
  };

  useEffect(() => {
    if (signupStep == 0) {
      setrecapSolv(false);
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
          callback: (res) => {
            setrecapSolv(true);
          },
          "expired-callback": () => {
            setrecapSolv(false);
          },
        },
        auth
      );
      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  }, [signupStep]);
  return (
    <>
      <Backdrop sx={{ color: "#fff" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {signupStep == 0 ? (
        <>
          <Typography gutterBottom variant="h5" component="div">
            Choose your signup method
          </Typography>

          <Typography gutterBottom variant="h8" component="div">
            Enter your email and password to continue
          </Typography>
          <br />

          <TextField
            color="success"
            helperText="Please enter your Email"
            size="xl"
            fullWidth
            label="Email"
            placeholder="example@domain.com"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <br />
          <TextField
            helperText="Make sure to make it strong and you can remember it"
            size="xl"
            fullWidth
            label="Password"
            placeholder="Enter your strong password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={password}
            color="success"
            onChange={(event) => setPassword(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />
          <br />
          <TextField
            helperText="Make sure to make it strong and you can remember it"
            size="xl"
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your strong password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={confPassword}
            color="success"
            onChange={(event) => setConfPassword(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />
          <br />

          <PasswordChecklist
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={5}
            value={password}
            valueAgain={confPassword}
            onChange={(isValid) => {
              setPasswordCheck(isValid);
            }}
          />

          <br />
          <Button
            size="lg"
            disabled={!passwordCheck}
            variant="solid"
            color="success"
            className={styles.googleButton}
          >
            {" "}
            Sign up
          </Button>
          <br />
          <Divider orientation="horizontal">or</Divider>
          <center>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sign up with phone</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {" "}
                  <Typography gutterBottom variant="h8" component="div">
                    Choose your signup method
                  </Typography>
                  <TextField
                    InputProps={{
                      inputComponent: PhoneInput,
                    }}
                    size="xl"
                    className={styles.inputs}
                    fullWidth
                    label="Phone number"
                    placeholder="Phone number"
                    variant="outlined"
                    value={phone}
                    onChange={setPhone}
                    name="numberformat"
                    color="success"
                  />
                  <br />
                  <br />
                  <div id="recaptcha-container"></div>
                  {!recapSolv ? <p>Please solve the recaptcha first</p> : ""}
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      onChange={(event) => {
                        setTermCheck(event.target.checked);
                      }}
                      checked={termCheck}
                      disabled={!recapSolv}
                      label={
                        "I Read agree to the term and policy of niala insurance users"
                      }
                    />
                  </FormGroup>
                  <Button
                    endDecorator={<SendIcon />}
                    className={styles.sendCodeButton}
                    onClick={sendCode}
                    disabled={!recapSolv || !termCheck}
                    variant="soft"
                    size="lg"
                  >
                    Send code by sms
                  </Button>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider orientation="horizontal">or</Divider>
            <Button
              startDecorator={<GoogleIcon />}
              size="lg"
              onClick={signupWithGoogle}
              variant="outlined"
              className={styles.googleButton}
              color="success"
            >
              {" "}
              Sign up with google
            </Button>
          </center>
        </>
      ) : (
        <center>
          <Lottie options={defaultOptions} height={200} width={200} />{" "}
          <Typography variant="h6" color="text.secondary">
            <b>Verify your phone number</b>
          </Typography>
          <Typography variant="caption " color="text.secondary">
            {" "}
            We have sent 6-digit code sms to{" "}
            <b>
              <b>{phone}</b>
            </b>
          </Typography>
          <br />
          <Button
            startIcon={<ModeEditOutlinedIcon />}
            variant="text"
            color="error"
            onClick={() => setSignupStep(signupStep - 1)}
            fullWidth
          >
            Change phone number
          </Button>
          <Typography variant="body2" color="text.secondary"></Typography>
          <br />
          <OtpInput
            value={otpCode}
            onChange={(e) => setOtpCode(e)}
            numInputs={6}
            separator={<span>-</span>}
            hasError={true}
            className={styles.otpinput}
            containerStyle={styles.otpinput}
            color="success"
          />{" "}
          <br />
          <br />
          <Button
            disabled={otpCode.length < 6}
            size="lg"
            variant="soft"
            className={styles.verifyButton}
            onClick={verify}
          >
            Verify
          </Button>
          <br />
          <br />
          <Typography variant="caption " color="text.secondary">
            {" "}
            If you still didnt recieve it,
            <Button variant="text">Resend</Button>
          </Typography>
        </center>
      )}
      <Snackbar
        open={snack}
        autoHideDuration={6000}
        onClose={(event, reason) =>
          reason !== "clickaway" ? setSnack(false) : ""
        }
      >
        <Alert
          onClose={(event, reason) =>
            reason !== "clickaway" ? setSnack(false) : ""
          }
          severity={snackType}
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
