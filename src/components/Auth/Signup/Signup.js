import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import styles from "./Signup.module.css";
import { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import GoogleIcon from "@mui/icons-material/Google";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/joy/Divider";
import Checkbox from "@mui/joy/Checkbox";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import Done from "@mui/icons-material/Done";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TextField from "@mui/joy/TextField";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Backdrop from "@mui/material/Backdrop";
import { database, ref, child, get, set } from "../../../firebase.js";

export default function Signup() {
  const signupWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        localStorage.user = JSON.stringify(user);
        localStorage.signinObj = JSON.stringify(result);
        console.log("ok0");
        setEmail(user.email);
        setLoading(false);
        let userObj = {
          email: user.email,
          uid: user.uid,
          name: user.displayName,
          photoUrl: user.photoURL,
        };
        localStorage.user = JSON.stringify(user);
        set(ref(database, "users/" + user.uid), userObj)
          .then((snapshot) => {
            localStorage.signedin = true;
            window.location.href = "/";
          })
          .catch((error) => {
            console.error(error);
            window.location.href = "/";
          });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.\
        setLoading(false);
        console.log(error, 1223345);
        // ...
      });
  };
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <>
      <Backdrop sx={{ color: "#fff" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <CssVarsProvider>
        <div className={styles.parent}>
          <div className={styles.child}>
            <div className={styles.TopTexts}>
              <Typography level="h3" mt={2}>
                <b>Hey, hello</b>
              </Typography>
              <Typography level="body1" mt={1}>
                Join us for free with simple authentication
              </Typography>
            </div>
            <div className={styles.form}>
              <TextField
                label="Full name"
                color="danger"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
                placeholder="Example: Natnael wubet"
                startDecorator={<AccountCircleOutlinedIcon fontSize="small" />}
              />
              <TextField
                mt={1}
                className={styles.formInput}
                color="danger"
                label="Email address"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Example: name@mail.com"
                startDecorator={<AlternateEmailOutlinedIcon fontSize="small" />}
              />
              <TextField
                color="danger"
                mt={1}
                className={styles.formInput}
                label="Password"
                required
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="Make sure to make is long"
                startDecorator={<PasswordOutlinedIcon fontSize="small" />}
              />
              <br />
              <Checkbox
                color="danger"
                uncheckedIcon={<Done />}
                label="I have read and accept the term and policy of users"
                slotProps={{
                  root: ({ checked, focusVisible }) => ({
                    sx: !checked
                      ? {
                          "& svg": { opacity: focusVisible ? 0.32 : 0 },
                          "&:hover svg": {
                            opacity: 0.32,
                          },
                        }
                      : {},
                  }),
                }}
              />
              <Button
                color="danger"
                fullWidth
                className={styles.formInput}
                onClick={function () {}}
                size="md"
                variant="solid"
              >
                Create account
              </Button>
            </div>
            <Divider>Or</Divider>

            <Button
              fullWidth
              color="danger"
              className={styles.formInput}
              onClick={signupWithGoogle}
              size="md"
              variant="outlined"
              startDecorator={<GoogleIcon />}
            >
              {"  "}Signup with Google
            </Button>
          </div>
        </div>
      </CssVarsProvider>
    </>
  );
}
