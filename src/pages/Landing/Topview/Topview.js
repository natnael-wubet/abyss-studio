import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Grid from "@mui/material/Grid";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Button from "@mui/joy/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import * as animationData from "../../../assets/lotties/safe.json";
import AppleIcon from "@mui/icons-material/Apple";
import Stack from "@mui/material/Stack";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import styles from "./Topview.module.css";
import Lottie from "react-lottie";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import { CssVarsProvider } from "@mui/joy/styles";
import Typography from "@mui/material/Typography";
import ShowCaseSphere from "./ShowCaseSphere";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Topview() {
  return (
    <div className={styles.parent} class="topview">
      <MDBCarousel
        pause={true}
        showIndicators
        className="topi"
        showControls
        fade
      >
        <MDBCarouselItem
          className={("w-100 d-block ", styles.carouselimage)}
          itemId={1}
          sx={{ height: 10, width: 100 }}
          src="/assets/images/bg.png"
          alt="..."
        >
          <Box sx={{ flexGrow: 1 }} className={styles.innercarouselitemleft}>
            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={4} md={6}>
                <Typography variant="h3" className={styles.text} color="white">
                  Create, Explore And Build
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginTop: 20 }}
                  className={styles.text}
                  color="white"
                >
                  A general studio for simulating and creating multiple things
                  with style.
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginTop: 20 }}
                  className={styles.text}
                  color="white"
                >
                  {" "}
                  From Hobbyist to <b>Hobbyists</b>
                </Typography>
                <div style={{ marginTop: 20, display: "flex" }}>
                  <CssVarsProvider>
                    <Button
                      variant="soft"
                      endDecorator={<KeyboardArrowRightOutlinedIcon />}
                      size="lg"
                      onClick={() => window.open("#getstarted", "_self")}
                    >
                      Get started
                    </Button>{" "}
                  </CssVarsProvider>
                </div>
              </Grid>

              <Grid item xs={4} sm={6} md={6}>
                <Lottie options={defaultOptions} height={320} width={460} />{" "}
              </Grid>
            </Grid>
          </Box>
        </MDBCarouselItem>

        <MDBCarouselItem
          className={("w-100 d-block ", styles.carouselimage)}
          itemId={2}
          src="/assets/images/bg2.jpg"
          alt="..."
        >
          <Box sx={{ flexGrow: 1 }} className={styles.innercarouselitem}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={6} md={6}>
                <ShowCaseSphere />
              </Grid>
              <Grid item xs={4} sm={4} md={6}>
                <Typography className={styles.text} variant="h3" color="white">
                  Register, claim and secure your device today
                </Typography>
                <Typography
                  className={styles.text}
                  variant="body1"
                  style={{ marginTop: 20 }}
                  color="white"
                >
                  Download our application in your device to use all of our
                  mobile insurance features. works on android, apple and windows
                  devices.
                </Typography>
                <div style={{ marginTop: 30 }}>
                  <CssVarsProvider>
                    <Button
                      variant="soft"
                      endDecorator={<ShopOutlinedIcon />}
                      color="success"
                      size="lg"
                    >
                      Google playstore
                    </Button>{" "}
                    <Button
                      variant="soft"
                      size="lg"
                      endDecorator={<AppleIcon />}
                      color="neutral"
                    >
                      App store
                    </Button>
                  </CssVarsProvider>
                </div>
              </Grid>
            </Grid>
          </Box>
        </MDBCarouselItem>
      </MDBCarousel>
      {/**
      <div className={styles.videoParent}>
        <video width="640" height="480" controls className={styles.video}>
          <source
            width="640"
            height="480"
            src="https://firebasestorage.googleapis.com/v0/b/nialainsureweb.appspot.com/o/By.mp4?alt=media&token=64aae1f0-7357-45da-8d98-6fead081c80f"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.videomargin} sx={{ marginBottom: "400" }}></div> */}
    </div>
  );
}
