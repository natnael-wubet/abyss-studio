import styles from "./TopLander.module.css";
import React, { useState, useEffect } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
export default function TopLander() {
  return (
    <>
      <img className={styles.bg} src="/assets/images/bg.png" />

      <div className={styles.parent}>
        <div className={styles.midContainer}>
          <div className={styles.texts}>
            <Typography textColor="danger.200" fontSize="sm" fontWeight="sm">
              - Introducing Abyss General Studio -
            </Typography>
            <Typography textColor="white.1000" level="display2" fontWeight="xl">
              A limitless General Studio for creaters and hobiests
            </Typography>
            <Typography textColor="white.800" fontSize="lg" fontWeight="sm">
              Create videos, games, software systems, audios , anything with one
              simple system to learn.
            </Typography>
          </div>
          <br />
          <Button
            sx={{ marginLeft: "30px", marginTop: "10px" }}
            variant="solid"
            endDecorator={<KeyboardArrowRightOutlinedIcon />}
            color="danger"
            size="lg"
          >
            Get started
          </Button>
        </div>
      </div>
    </>
  );
}
