import styles from "./SideNav.module.css";
import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import "rsuite/dist/rsuite.min.css";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import "rsuite/styles/index.less";
import React from "react";
const CustomSidenav = ({
  appearance,
  openKeys,
  expanded,
  onOpenChange,
  onExpand,
  ...navProps
}) => {
  return (
    <div className={styles.custom}>
      <Sidenav
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        className={styles.drawerParent}
      >
        <Sidenav.Body className={styles.drawerParent}>
          <Nav {...navProps} className={styles.drawerParent}>
            <Nav.Item
              eventKey="1"
              className={styles.firstItem}
              active
              icon={<DashboardIcon />}
            >
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle className={styles.lastItem} onToggle={onExpand} />
      </Sidenav>
    </div>
  );
};

export default function SideNav() {
  const [activeKey, setActiveKey] = React.useState("1");
  const [openKeys, setOpenKeys] = React.useState(["3", "4"]);
  const [expanded, setExpand] = React.useState(false);

  return (
    <>
      <CustomSidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onSelect={setActiveKey}
        expanded={expanded}
        onExpand={setExpand}
        appearance="inverse"
      />
    </>
  );
}
