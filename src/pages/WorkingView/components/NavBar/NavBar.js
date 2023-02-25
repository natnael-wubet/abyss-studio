import styles from "./NavBar.module.css";
import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import L1 from "./L1";

export default function NavBar({ newTabAction, playAction }) {
  return (
    <>
      <div className={styles.parent}>
        <Navbar>
          <Navbar.Brand href="#">ASTUDIO</Navbar.Brand>
          <Nav>
            <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Nav.Item>Products</Nav.Item>
            <Nav.Menu title="About">
              <Nav.Item>Company</Nav.Item>
              <Nav.Item>Team</Nav.Item>
              <Nav.Menu title="Contact">
                <Nav.Item>Via email</Nav.Item>
                <Nav.Item>Via telephone</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
          </Nav>
        </Navbar>
        <L1 newTabAction={newTabAction} playAction={playAction} />
      </div>
    </>
  );
}
