import styles from "./L2.module.css";
import React, { useState, useEffect } from "react";
import { Button } from "rsuite";
import ResponsiveNav from "@rsuite/responsive-nav";
import MoreIcon from "@rsuite/icons/More";

const defaultItems = [
  { eventKey: "A", label: "Item A" },
  { eventKey: "B", label: "Item B" },
  { eventKey: "C", label: "Item C" },
  { eventKey: "D", label: "Item D" },
  { eventKey: "E", label: "Item E" },
  { eventKey: "F", label: "Item F" },
];

export default function L2({ items, setItems, activeKey, setActiveKey }) {
  return (
    <>
      <div className={styles.parent}>
        <>
          <ResponsiveNav
            removable
            appearance="tabs"
            moreText={<MoreIcon />}
            moreProps={{ noCaret: true }}
            activeKey={activeKey}
            onSelect={setActiveKey}
            onItemRemove={(eventKey) => {
              const nextItems = [...items];
              nextItems.splice(
                nextItems.map((item) => item.eventKey).indexOf(eventKey),
                1
              );
              setItems(nextItems);
              setActiveKey(nextItems[0] ? nextItems[0].eventKey : null);
            }}
          >
            {items.map((item) => (
              <ResponsiveNav.Item key={item.eventKey} eventKey={item.eventKey}>
                {item.label}
              </ResponsiveNav.Item>
            ))}
          </ResponsiveNav>
        </>
      </div>
    </>
  );
}
