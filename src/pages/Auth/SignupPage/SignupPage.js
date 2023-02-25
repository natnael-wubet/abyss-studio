import styles from "./SignupPage.module.css";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Logo from "../../../components/Logo";
import Signup from "../../../components/Auth/Signup";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SignupPage() {
  return (
    <CssVarsProvider>
      {" "}
      <Box className={styles.parent} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 8, sm: 12, md: 18 }}
        >
          <Grid item className={styles.leftBox} xs={5} sm={7} md={10} key={0}>
            <img className={styles.leftImage} src="/assets/images/bg3.jpg" />
            <div className={styles.logoPlace}>
              <Logo color="light" />
            </div>
            <div className={styles.leftContent}>
              <Typography variant="h5" className={styles.text} color="white">
                Create, Explore And Build
              </Typography>
              <Typography
                variant="caption"
                style={{ marginTop: 20 }}
                className={styles.text}
                color="white"
              >
                A general studio for simulating and creating multiple things
                with style.
              </Typography>
              <br />
              <Typography
                variant="caption"
                style={{ marginTop: 6 }}
                className={styles.text}
                color="white"
              >
                {" "}
                From Hobbyist to <b>Hobbyists</b>
              </Typography>
            </div>
          </Grid>
          <Grid item className={styles.rightGrid} xs={3} sm={5} md={8} key={1}>
            <Signup />
          </Grid>
        </Grid>
      </Box>
    </CssVarsProvider>
  );
}
