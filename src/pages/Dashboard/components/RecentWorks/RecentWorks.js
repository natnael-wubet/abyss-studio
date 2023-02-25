import styles from "./RecentWorks.module.css";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import DisplayCard from "./DisplayCard";
import Button from "@mui/joy/Button";

import IconButton from "@mui/joy/IconButton";
import { Grid, Row, Col } from "rsuite";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import ModalOpener from "../../../../components/NewProject/ModalOpener";
import { useEffect, useState } from "react";
export default function RecentWorks({ user }) {
  const [newProjectModal, setNewProjectModal] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (
      localStorage.projects &&
      localStorage.projects !== JSON.stringify(projects)
    )
      setProjects(JSON.parse(localStorage.projects));
  });
  return (
    <>
      <ModalOpener open={newProjectModal} setOpen={setNewProjectModal} />
      <div className={styles.parent}>
        <Typography textColor="neutral.1000" fontSize="xl" fontWeight="xl">
          Hello, {user.displayName}
        </Typography>

        <Typography textColor="neutral.500" fontSize="sm" fontWeight="md">
          Here are your left overs, you can start from new or continue from
          where you left off.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            py: 1,
            overflow: "auto",
            width: "70vw",
            scrollSnapType: "x mandatory",
            "& > *": {
              scrollSnapAlign: "center",
            },
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Card variant="outlined" sx={{ width: 120 }}>
            <Typography level="h2" fontSize="sm" sx={{ mb: 1.5 }}>
              New AStudio project
            </Typography>{" "}
            <AspectRatio minHeight="50px" maxHeight="200px" sx={{ my: 0 }}>
              <IconButton
                color="danger"
                onClick={() => setNewProjectModal(true)}
                variant="outlined"
                size="lg"
              >
                <AddOutlinedIcon
                  minHeight="120px"
                  size="lg"
                  maxHeight="200px"
                />
              </IconButton>
            </AspectRatio>
          </Card>
        </Box>
        <br />
        <Typography textColor="neutral.1000" fontSize="md" fontWeight="md">
          Recent projects{" "}
          <Chip variant="outlined" color="neutral" size="sm">
            {projects.length}
          </Chip>
        </Typography>
        <br />
        <div className={styles.projects}>
          <Row className="show-grid">
            {projects.map((x, i) => (
              <Col lg={6} xl={8} xxl={6} className={styles.project}>
                <DisplayCard object={x} index={i} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
