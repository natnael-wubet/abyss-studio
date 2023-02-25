import styles from "./Variables.module.css";
import { useState, useEffect } from "react";
import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import IconButton from "@mui/joy/IconButton";
import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import Slider from "@mui/joy/Slider";

export default function Variables({ x, timeFramesCount, setTimeFramesCount }) {
  return (
    <>
      <div className={styles.parent}>
        {" "}
        <Typography
          id="ellipsis-list-demo"
          level="body4"
          textTransform="uppercase"
          fontWeight="xl"
          mb={1}
          sx={{ letterSpacing: "0.15rem" }}
        >
          Global variables
        </Typography>
        <List
          sx={{ maxWidth: 300, "--List-decorator-size": "56px" }}
          aria-labelledby="ellipsis-list-demo"
        >
          <ListItem endAction={x}>
            <ListItemContent>
              <Typography>x</Typography>
              <Typography level="body2" noWrap>
                an int variable that increments every frame
              </Typography>
            </ListItemContent>
          </ListItem>
          <ListItem endAction={<>{timeFramesCount}</>}>
            <ListItemContent>
              <Typography>timeFrameCount</Typography>
              <Typography level="body2" noWrap>
                Time visiualizer quantity
              </Typography>
              <Slider
                color="primary"
                marks={[
                  {
                    value: 0,
                    label: "0",
                  },
                  {
                    value: 5,
                    label: "5",
                  },
                  {
                    value: 10,
                    label: "10",
                  },
                  {
                    value: 15,
                    label: "15",
                  },
                  {
                    value: 20,
                    label: "20",
                  },
                ]}
                size="md"
                max={20}
                valueLabelDisplay="auto"
                value={timeFramesCount}
                onChange={(event, newValue) => {
                  setTimeFramesCount(newValue);
                }}
                variant="solid"
              />
            </ListItemContent>
          </ListItem>
        </List>
        <br />
        <Typography
          id="ellipsis-list-demo"
          level="body4"
          textTransform="uppercase"
          fontWeight="xl"
          mb={1}
          sx={{ letterSpacing: "0.15rem" }}
        >
          Your variables
        </Typography>
        <List
          sx={{ maxWidth: 300, "--List-decorator-size": "56px" }}
          aria-labelledby="ellipsis-list-demo"
        >
          <ListItem
            startAction={
              <IconButton
                aria-label="Add"
                size="sm"
                variant="plain"
                color="neutral"
              >
                <Add />
              </IconButton>
            }
          >
            <ListItemButton>var</ListItemButton>
          </ListItem>
          <ListItem
            endAction={
              <IconButton aria-label="Delete" size="sm" color="danger">
                <Delete />
              </IconButton>
            }
          >
            <ListItemButton>Item 2</ListItemButton>
          </ListItem>
        </List>
      </div>
    </>
  );
}
