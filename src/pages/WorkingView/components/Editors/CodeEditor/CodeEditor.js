import styles from "./CodeEditor.module.css";
import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
export default function CodeEditor({ onCodeChange }) {
  return (
    <>
      <div className={styles.parent}>
        <Editor
          height="50vh"
          onChange={onCodeChange}
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// Write your plane function below"
        />
      </div>
    </>
  );
}
