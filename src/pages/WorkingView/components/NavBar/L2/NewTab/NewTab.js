import styles from "./NewTab.module.css";
import { useState, useEffect } from "react";
import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Grid4x4OutlinedIcon from "@mui/icons-material/Grid4x4Outlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
const tabTypes = [
  { name: "Animating plane", type: "planeTime", icon: <Grid4x4OutlinedIcon /> },
  { name: "Script writing", type: "note", icon: <SubjectOutlinedIcon /> },
];
export default function NewTab({ open, setOpen, createTab }) {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className={styles.parent}>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 500 }}
          >
            <Typography id="basic-modal-dialog-title" component="h2">
              Create new tab
            </Typography>
            <Typography
              id="basic-modal-dialog-description"
              textColor="text.tertiary"
            >
              Choose what kind of tab you want
            </Typography>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack spacing={2}>
                <RadioGroup
                  aria-label="platform"
                  defaultValue="Website"
                  onChange={(x, i) => setSelected(parseInt(x.target.id))}
                  overlay
                  name="platform"
                  sx={{
                    flexDirection: "row",
                    gap: 2,
                    [`& .${radioClasses.checked}`]: {
                      [`& .${radioClasses.action}`]: {
                        inset: -1,
                        border: "3px solid",
                        borderColor: "danger.500",
                      },
                    },
                    [`& .${radioClasses.radio}`]: {
                      display: "contents",
                      "& > svg": {
                        zIndex: 2,
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        bgcolor: "background.body",
                        borderRadius: "50%",
                      },
                    },
                  }}
                >
                  {tabTypes.map((value, i) => (
                    <Sheet
                      key={i}
                      variant="outlined"
                      sx={{
                        borderRadius: "md",
                        bgcolor: "background.body",
                        boxShadow: "sm",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1.5,
                        p: 2,
                        minWidth: 120,
                      }}
                    >
                      <Radio
                        id={i}
                        color="danger"
                        value={value.name}
                        checkedIcon={<CheckCircleRoundedIcon />}
                      />
                      <Avatar variant="soft" size="sm" />
                      <FormLabel htmlFor={i}>{value.name}</FormLabel>
                    </Sheet>
                  ))}
                </RadioGroup>
                <Button
                  color="danger"
                  onClick={() => {
                    createTab(tabTypes[selected]);
                    setOpen(false);
                  }}
                >
                  Create{" "}
                </Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </div>
    </>
  );
}
