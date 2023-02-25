import styles from "./SnackAlert.module.css";
import { useState, useEffect } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

import MuiAlert from "@mui/material/Alert";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackAlert({
  message,
  type,
  vertical,
  horizontal,
  open,
  setOpen,
}) {
  if (!vertical | (vertical == "")) vertical = "top";
  if (!horizontal | (horizontal == "")) horizontal = "center";
  useEffect(() => {
    console.log(
      "snack args",
      message,
      type,
      vertical,
      horizontal,
      open,
      setOpen
    );
  }, [open]);
  return (
    <CssVarsProvider>
      <div className={styles.parent}>
        <div>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={() => setOpen(false)}
            key={vertical + horizontal}
            autoHideDuration={1000}
          >
            <Alert
              onClose={() => setOpen(false)}
              severity={type}
              sx={{ width: "100%" }}
            >
              {message}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </CssVarsProvider>
  );
}
