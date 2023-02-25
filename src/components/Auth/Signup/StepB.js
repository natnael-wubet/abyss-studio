import styles from "./StepB.module.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Chip from "@mui/joy/Chip";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import StepA from "./StepA";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Typography from "@mui/joy/Typography";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";

import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import axios from "axios";

export default function StepB({
  signinMethod,
  setActiveStep,
  setSigninMethod,
  phone,
  setPhone,
  uname,
  setUname,
  fullName,
  orgName,
  orgDisc,
  setOrgDisc,
  setTaxNo,
  taxNo,
  setOrgName,
  setFullName,
  setEmail,
  email,
  AccountType,
}) {
  const addEmoji = (emoji) => () => setOrgDisc(`${orgDisc}${emoji}`);

  const continueAs = (x) => {
    let obj = { uname, orgName, fullName, orgDisc, taxNo, phone, email };
    localStorage.userObj = JSON.stringify(obj);
    localStorage.first = "done";
    let user = localStorage.user ? JSON.parse(localStorage.user) : {};
    localStorage.accountType = x;
    let axiosObj = {
      loggedInUser: {
        apiKey: user.apiKey,
        email: obj.email,
        phone: obj.phone,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        stsTokenManager: user.stsTokenManager,
      },
      user: {
        user_name: obj.uname,
        password: "",
        firstname: obj.fullName,
        middlename: "",
        lastname: "",
        email: obj.email,
        phoneNumber: obj.phone,
        org_f: [],
      },
    };
    let url =
      x == 1
        ? "http://144.202.122.124/api/account/community/remote/signup"
        : x == 2
        ? "http://144.202.122.124/api/account/org/debub/signup"
        : "";
    let config = {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "access-control-allow-origin": "*",

        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1NTVlZTdiLTY0NWYtNDkyMC05NmQ0LTA4MTY0ZWMyMjgwNyIsInVzZXJJZCI6MTQ5MjQ4MjMsInRlYW1JZCI6MTY1MTMzNCwiaXYiOiJHWGxvMGxMRG1CMS94RjhOTFRoUmhRPT0iLCJhbGdvIjoiYWVzLTEyOCIsImlhdCI6MTY3MzAyODQ4NSwiZXhwIjoxNjczMDMwMjg1fQ.t4UKCPDDiNjDVAQBipyQOpbx_nZLVACMPm9el8_RwJs",
        "content-length": 412,
        "content-type": "application/json",
        origin: "http://localhost:3000",
        "pm-h0":
          "Content-Type=application/json, User-Agent=PostmanRuntime/7.30.0, Accept=*/*, Cache-Control=no-cache, Postman-Token=decee55f-97da-4e97-8d45-478a9b64399a, Host=144.202.122.124, Accept-Encoding=gzip%2C deflate%2C br, Connection=keep-alive",

        "pm-o0":
          "method=POST, timings=true, timeout=180000, rejectUnauthorized=false",
        "pm-u": "http://144.202.122.124/api/account/community/remote/signup",
        referer: "http://localhost:3000",
        "sec-ch-ua": `"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"'`,
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "Android",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
      },
    };
    /*

        "Access-Control-Allow-Credentials": true,
        crossorigin: true,
        mode: "no-cors",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Content-Length": "<calculated when request is sent>",
        Host: "http://localhost:3000/",
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        authorization: "Basic token",
        Accept: "* /*",
        Connection: "keep-alive",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };*/
    axios
      .post(url, axiosObj, config)
      .then((response) => {
        let data = response.data;
        localStorage.reqres = JSON.stringify({
          url,
          x,
          axiosObj,
          error: "none",
          data,
        });
        window.location.href = "/";
        localStorage.signedin = true;
      })
      .catch((error, data) => {
        let tmp = {
          url,
          data,
          x,
          axiosObj,
          error,
          config,
        };
        localStorage.reqres = JSON.stringify(tmp);
        console.log(tmp);
      });
  };
  return (
    <>
      {" "}
      <Box sx={{ p: 2 }}>
        {AccountType == 0 ? (
          <>
            <Typography level="inherit" mt={2}>
              Get started with community user to join compitions only
            </Typography>
            <Typography
              textColor="success.400"
              fontSize="xl3"
              fontWeight="xl"
              my={1}
            >
              $0{" "}
              <Typography
                fontSize="sm"
                textColor="text.secondary"
                fontWeight="md"
              >
                － Free forever
              </Typography>
            </Typography>

            <TextField
              label="Full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
              color="success"
              placeholder="Type in here…"
              startDecorator={<PersonRoundedIcon fontSize="small" />}
            />
            <br />
            <TextField
              label="Short name"
              value={uname}
              onChange={(event) => setUname(event.target.value)}
              required
              color="success"
              placeholder="Type in here…"
              startDecorator={<Grid3x3Icon fontSize="small" />}
              endDecorator={
                <Chip size="sm" variant="soft">
                  Screen name
                </Chip>
              }
            />

            <br />
            <TextField
              label="Email address"
              color="success"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Type in here…"
              disabled={signinMethod == 1}
              startDecorator={<AlternateEmailOutlinedIcon fontSize="small" />}
            />
            <br />
            <TextField
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              label="Phone number"
              color="success"
              disabled={signinMethod == 0}
              value={phone}
              placeholder="Type in here…"
              startDecorator={<LocalPhoneIcon fontSize="small" />}
            />
            <br />
            <Button
              color="success"
              disabled={
                !(
                  uname.length > 3 &&
                  fullName.length > 3 &&
                  (phone.length > 6 || email.length > 5)
                )
              }
              className={styles.communityButton}
              onClick={() => continueAs(1)}
            >
              Continue as Community
            </Button>
          </>
        ) : AccountType == 1 ? (
          <>
            <Typography level="inherit" mt={2}>
              Get started as a orginization account with positing compitation
              features
            </Typography>
            <Typography
              textColor="primary.400"
              fontSize="xl3"
              fontWeight="xl"
              my={1}
            >
              <Typography
                fontSize="xl"
                borderRadius="sm"
                px={0.5}
                mr={0.5}
                sx={(theme) => ({
                  ...theme.variants.soft.danger,
                  color: "danger.400",
                  verticalAlign: "text-top",
                  textDecoration: "line-through",
                })}
              >
                $24
              </Typography>
              $15{" "}
              <Typography
                fontSize="sm"
                textColor="text.secondary"
                fontWeight="md"
              >
                / Acc / month
              </Typography>
            </Typography>

            <TextField
              label="Organization name"
              value={orgName}
              color="success"
              onChange={(event) => setOrgName(event.target.value)}
              required
              placeholder="Type in here…"
              startDecorator={<CorporateFareOutlinedIcon fontSize="small" />}
            />
            <br />
            <TextField
              label="Tax number"
              value={taxNo}
              onChange={(event) => setTaxNo(event.target.value)}
              required
              color="success"
              placeholder="Type in here…"
              startDecorator={
                <ConfirmationNumberOutlinedIcon fontSize="small" />
              }
            />
            <br />
            <TextField
              label="Full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
              color="success"
              placeholder="Type in here…"
              startDecorator={<PersonRoundedIcon fontSize="small" />}
            />
            <br />
            <TextField
              label="Short name"
              value={uname}
              color="success"
              onChange={(event) => setUname(event.target.value)}
              required
              placeholder="Type in here…"
              startDecorator={<Grid3x3Icon fontSize="small" />}
              endDecorator={
                <Chip size="sm" variant="soft">
                  Screen name
                </Chip>
              }
            />

            <br />
            <TextField
              label="Email address"
              value={email}
              color="success"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Type in here…"
              disabled={signinMethod == 1}
              startDecorator={<AlternateEmailOutlinedIcon fontSize="small" />}
            />
            <br />
            <TextField
              color="success"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              label="Phone number"
              disabled={signinMethod == 0}
              value={phone}
              placeholder="Type in here…"
              startDecorator={<LocalPhoneIcon fontSize="small" />}
            />

            <br />
            <label htmlFor="unique-id">What does your organization do</label>
            <Textarea
              required
              componentsProps={{
                textarea: {
                  id: "unique-id",
                },
              }}
              color="success"
              label=""
              placeholder="Type in here…"
              value={orgDisc}
              onChange={(event) => setOrgDisc(event.target.value)}
              minRows={2}
              maxRows={4}
              startDecorator={
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <IconButton
                    variant="outlined"
                    color="neutral"
                    onClick={addEmoji("👍")}
                  >
                    👍
                  </IconButton>
                  <IconButton
                    variant="outlined"
                    color="neutral"
                    onClick={addEmoji("🏖")}
                  >
                    🏖
                  </IconButton>
                  <IconButton
                    variant="outlined"
                    color="neutral"
                    onClick={addEmoji("😍")}
                  >
                    😍
                  </IconButton>
                </Box>
              }
              endDecorator={
                <Typography level="body3" sx={{ ml: "auto" }}>
                  {orgDisc.length} character(s)
                </Typography>
              }
              sx={{ minWidth: 200 }}
            />
            <br />
            <Button
              disabled={
                !(
                  uname.length > 3 &&
                  orgName.length > 3 &&
                  taxNo.length > 3 &&
                  orgDisc.length > 3 &&
                  fullName.length > 3 &&
                  (phone.length > 6 || email.length > 5)
                )
              }
              color="success"
              onClick={() => continueAs(2)}
              className={styles.communityButton}
            >
              Continue as Organization
            </Button>
          </>
        ) : (
          <>
            <Typography level="inherit" mt={2}>
              Get started as enterprise
            </Typography>
            <Typography
              textColor="primary.400"
              fontSize="xl3"
              fontWeight="xl"
              my={1}
            >
              <Typography
                fontSize="xl"
                borderRadius="sm"
                px={0.5}
                mr={0.5}
                sx={(theme) => ({
                  ...theme.variants.soft.danger,
                  color: "danger.400",
                  verticalAlign: "text-top",
                  textDecoration: "line-through",
                })}
              >
                $49
              </Typography>
              $37*{" "}
              <Typography
                fontSize="sm"
                textColor="text.secondary"
                fontWeight="md"
              >
                / Acc / month
              </Typography>
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}
