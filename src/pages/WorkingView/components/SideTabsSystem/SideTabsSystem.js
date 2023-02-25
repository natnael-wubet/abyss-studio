import styles from "./SideTabsSystem.module.css";
import { useState, useEffect } from "react";
import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import TabList from "@mui/joy/TabList";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import Tab from "@mui/joy/Tab";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import TabPanel from "@mui/joy/TabPanel";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
export default function SideTabsSystem() {
  return (
    <>
      <div className={styles.parent}>
        <Tabs
          aria-label="Vertical tabs"
          orientation="vertical"
          sx={{
            minWidth: 240,
            height: "100%",
            alignItems: "baseline",
            borderRadius: "sm",
          }}
        >
          <TabList>
            <Tab>
              <FileCopyOutlinedIcon />
            </Tab>
            <Tab>
              <ViewInArOutlinedIcon />
            </Tab>
            <Tab>
              <WorkspacesOutlinedIcon />
            </Tab>
            <Tab>
              <GroupsOutlinedIcon />
            </Tab>
            <Tab>
              <FolderOutlinedIcon />
            </Tab>
            <Tab>
              <FileUploadOutlinedIcon />
            </Tab>
            <Tab>
              <AudiotrackOutlinedIcon />
            </Tab>
            <Tab>
              <AutoStoriesOutlinedIcon />
            </Tab>
          </TabList>
          <TabPanel value={0} sx={{ p: 2, minHeight: 200 }}>
            <b>First</b> tab panel
          </TabPanel>
          <TabPanel value={1} sx={{ p: 2, minHeight: 200 }}>
            <b>Second</b> tab panel
          </TabPanel>
          <TabPanel value={2} sx={{ p: 2, minHeight: 200 }}>
            <b>Third</b> tab panel
          </TabPanel>
          <TabPanel value={3} sx={{ p: 2, minHeight: 200 }}>
            <b>First 4</b> tab panel
          </TabPanel>
          <TabPanel value={4} sx={{ p: 2, minHeight: 200 }}>
            <b>Second 5</b> tab panel
          </TabPanel>
          <TabPanel value={5} sx={{ p: 2, minHeight: 200 }}>
            <b>Third 6</b> tab panel
          </TabPanel>
          <TabPanel value={6} sx={{ p: 2, minHeight: 200 }}>
            <b>First 7</b> tab panel
          </TabPanel>
          <TabPanel value={7} sx={{ p: 2, minHeight: 200 }}>
            <b>Second 8</b> tab panel
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
