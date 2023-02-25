import styles from "./SignedinNavBar.module.css";
import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

import Box from "@mui/material/Box";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import IconButton from "@mui/joy/IconButton";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Menu from "@mui/joy/Menu";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import DeleteForever from "@mui/icons-material/DeleteForever";
import Avatar from "@mui/joy/Avatar";
import Badge from "@mui/joy/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Signout from "../Signout/Signout";
import CalendarViewDayOutlinedIcon from "@mui/icons-material/CalendarViewDayOutlined";
export default function SignedinNavBar({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [signOutDialog, setsignOutDialog] = React.useState(false);

  return (
    <>
      <div className={styles.parent}>
        {" "}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <IconButton
            id="positioned-demo-button"
            aria-controls={open ? "positioned-demo-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="plain"
            color="neutral"
            onClick={handleClick}
          >
            <CalendarViewDayOutlinedIcon />
          </IconButton>
          <IconButton
            id="positioned-demo-button"
            aria-controls={open ? "positioned-demo-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="plain"
            color="neutral"
            onClick={handleClick}
          >
            <Badge>
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton
            id="positioned-demo-button"
            aria-controls={open ? "positioned-demo-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="plain"
            color="neutral"
            onClick={handleClick}
          >
            <Badge>
              <ForumOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton
            id="positioned-demo-button"
            aria-controls={open ? "positioned-demo-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="plain"
            color="neutral"
            onClick={handleClick}
          >
            {user.photoURL ? (
              <Avatar size="sm" alt={user.displayName} src={user.photoURL} />
            ) : (
              <Avatar>{user.displayName}</Avatar>
            )}
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
          <Menu
            id="positioned-demo-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            aria-labelledby="positioned-demo-button"
            placement="bottom-end"
          >
            <MenuItem onClick={handleClose}>
              <ListItemDecorator>
                <AccountCircleOutlinedIcon />
              </ListItemDecorator>{" "}
              Account
            </MenuItem>
            <MenuItem disabled onClick={handleClose}>
              <ListItemDecorator>
                <DashboardOutlinedIcon />
              </ListItemDecorator>
              Dashboard
            </MenuItem>
            <ListDivider />
            <MenuItem
              onClick={() => {
                setsignOutDialog(true);
              }}
              variant="soft"
              color="danger"
            >
              <ListItemDecorator sx={{ color: "inherit" }}>
                <LogoutOutlinedIcon />
              </ListItemDecorator>{" "}
              Sign out
            </MenuItem>
          </Menu>
        </Box>
      </div>
      <Signout open={signOutDialog} setOpen={setsignOutDialog} />
    </>
  );
}
