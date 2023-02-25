import Radio from "@mui/joy/Radio";

import RadioGroup from "@mui/joy/RadioGroup";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FormControl from "@mui/joy/FormControl";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import Button from "@mui/joy/Button";

import FormLabel from "@mui/joy/FormLabel";
import FormatLineSpacingOutlinedIcon from "@mui/icons-material/FormatLineSpacingOutlined";
import { radioClasses } from "@mui/joy/Radio";
import FormHelperText from "@mui/joy/FormHelperText";
import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function StepB({
  projectType,
  setProjectType,
  createProject,
  projectField,
  setProjectField,
}) {
  return (
    <>
      {" "}
      <FormControl>
        <FormLabel>Project type</FormLabel>
        <RadioGroup
          value={projectType}
          onChange={(event) => {
            setProjectType(event.target.value);
          }}
          name="radio-buttons-group-focus"
          sx={{ my: 1 }}
        >
          <Radio value="single" defaultChecked label="Single" />
          <Radio
            value="group"
            label="Group (collection)"
            sx={{ [`& .${radioClasses.radio}`]: { position: "relative" } }}
          />
        </RadioGroup>
        <FormHelperText>
          Select an option and use keyboard ↑↓ to see the focus outline
        </FormHelperText>
      </FormControl>
      {projectType === "single" ? (
        <>
          <br />
          <FormControl>
            <FormLabel>Project field</FormLabel>
            <RadioGroup
              aria-label="platform"
              defaultValue="Website"
              value={projectField}
              onChange={(event) => {
                setProjectField(event.target.value);
              }}
              overlay
              name="platform"
              sx={{
                flexDirection: "row",
                gap: 2,
                [`& .${radioClasses.checked}`]: {
                  [`& .${radioClasses.action}`]: {
                    inset: -1,
                    border: "3px solid",
                    borderColor: "primary.500",
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
              <Sheet
                key={0}
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
                  id={0}
                  value="planeTime"
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
                <Avatar variant="soft" size="sm">
                  <FormatLineSpacingOutlinedIcon />
                </Avatar>
                <FormLabel htmlFor="planeTime">Simple Plane-time</FormLabel>
              </Sheet>
              <Sheet
                key={1}
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
                  id={1}
                  value="spaceTime"
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
                <Avatar variant="soft" size="sm">
                  <PublicOutlinedIcon />
                </Avatar>
                <FormLabel htmlFor="spaceTime"> Space-time</FormLabel>
              </Sheet>
              <Sheet
                key={2}
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
                  id={2}
                  value="waves"
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
                <Avatar variant="soft" size="sm">
                  <WavesOutlinedIcon />
                </Avatar>
                <FormLabel htmlFor="waves"> Waves field</FormLabel>
              </Sheet>
            </RadioGroup>
          </FormControl>
        </>
      ) : (
        ""
      )}
      <br />
      <Button onClick={() => createProject()} variant="solid">
        Create project
      </Button>
      <br />
    </>
  );
}
