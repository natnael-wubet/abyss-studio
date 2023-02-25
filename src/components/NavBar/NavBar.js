import * as React from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo";
import Button from "@mui/joy/Button";
export default function NavBar({ setOpenDialog, setDialogState }) {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.logoPlace}>
          <Logo color="light" />
        </div>
        <div className={styles.buttons}>
          <Button variant="plain" color="danger">
            Sign in
          </Button>
          <Button
            variant="soft"
            color="danger"
            onClick={() => {
              setOpenDialog(true);
              setDialogState(0);
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
}
/*

*/
