import styles from "./Todo.module.css";
import React, { useState, useEffect } from "react";

import Typography from "@mui/joy/Typography";
import { Todo as TodoComponent } from "react-todo-component";
export default function Todo() {
  return (
    <>
      <div className={styles.parent}>
        <Typography textColor="neutral.1000" fontSize="xl" fontWeight="xl">
          Todo list
        </Typography>
        <TodoComponent />
      </div>
    </>
  );
}
