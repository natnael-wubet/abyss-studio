import styles from "./WorkingView.module.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import L2 from "./components/NavBar/L2";
import GridLayout from "react-grid-layout";
import TinyNavBar from "./components/TinyNavBar";
import Sidenav from "./components/Sidenav";
import SideTabsSystem from "./components/SideTabsSystem";
import { Grid, Row, Col } from "rsuite";
import TimeFrame from "../../Fields/SpaceTimes/Plane/TimeFrame";
import CodeEditor from "./components/Editors/CodeEditor";
import Variables from "./components/Variables";
import NewTab from "./components/NavBar/L2/NewTab";

import { db } from "../../db.js";
const defaultItems = [
  { eventKey: "A", label: "Plane field", type: "plane2D" },
  { eventKey: "B", label: "Scripts" },
];
function getKey() {
  return (Math.random() * 1e18).toString(36).slice(0, 5).toUpperCase() + "";
}

export default function WorkingView() {
  const [width, setWidth] = useState(window.screen.width);
  const [height, setHeight] = useState(window.screen.height);
  const [newTabModalOpen, setNewTabModalOpen] = useState(false);
  const [sourceCode, setSourceCode] = useState("");
  const [passedFunction, setPassedFunction] = useState("");
  //x, timeFramesCount, setTimeFramesCount
  const [activeKey, setActiveKey] = React.useState("A");

  const [timeFramesCount, setTimeFramesCount] = useState(1);
  const [x, setX] = useState(0);

  const [items, setItems] = React.useState(defaultItems);
  useEffect(() => {
    console.log(db.projects, db.projects[0]);
  });
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 0, y: 1, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 7, y: 0, w: 1, h: 2 },
  ];
  const playFunction = () => {
    setPassedFunction(sourceCode);
    //  console.log("playing function", passedFunction);
  };
  const onCodeChange = (value, event) => {
    setSourceCode(value);
    //  console.log("here is the current model value:", value);
  };
  const newTab = (x) => {
    const itemKey = getKey();
    const nextItems = [
      ...items,
      {
        eventKey: `${itemKey}`,
        type: x.type,
        icon: x.icon,
        label: `${x.name} ${itemKey}`,
      },
    ];
    setItems(nextItems);
  };
  return (
    <>
      <NewTab
        createTab={newTab}
        open={newTabModalOpen}
        setOpen={setNewTabModalOpen}
      />
      <div className={styles.parent}>
        <NavBar
          newTabAction={() => setNewTabModalOpen(true)}
          playAction={playFunction}
        />
        <SideTabsSystem />
        <div className={styles.gridparent}>
          <div className={styles.navList}>
            <L2
              items={items}
              setItems={setItems}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          </div>
          {activeKey == "A" ? (
            <GridLayout
              className="layout"
              layout={layout}
              allowOverlap={false}
              cols={12}
              preventCollision={true}
              width={1400}
            >
              <div key="a" className={styles.fieldContainer}>
                <TimeFrame
                  x={x}
                  setX={setX}
                  timeFramesCount={timeFramesCount}
                  setTimeFramesCount={setTimeFramesCount}
                  passedFunction={passedFunction}
                  width={width / 2}
                  height={height / 2}
                />
              </div>
              <div key="b" className={styles.CodeEditorContainer}>
                <CodeEditor onCodeChange={onCodeChange} />
              </div>
              <div key="c" className={styles.variablesContainer}>
                <Variables
                  x={x}
                  timeFramesCount={timeFramesCount}
                  setTimeFramesCount={setTimeFramesCount}
                />
              </div>
            </GridLayout>
          ) : activeKey == "B" ? (
            <></>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
