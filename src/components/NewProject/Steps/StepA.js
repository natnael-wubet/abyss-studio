import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
export default function StepA({
  title,
  setTitle,
  discription,
  setDiscription,
}) {
  const [text, setText] = React.useState("");
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  return (
    <>
      {" "}
      <Typography
        id="basic-modal-dialog-title"
        component="h2"
        level="inherit"
        fontSize="1.25em"
        mb={0}
      >
        Create new project
      </Typography>
      <Typography
        id="basic-modal-dialog-description"
        mt={0}
        mb={2}
        textColor="text.tertiary"
      >
        Fill in the information of the project.
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Stack spacing={2}>
          <TextField
            label="Project name(Title)"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            placeholder="Example: Natnael wubet"
            startDecorator={<></>}
          />
          <FormControl>
            <FormLabel>Discription</FormLabel>
            <Textarea
              label="Discription"
              placeholder="Type in here…"
              value={discription}
              onChange={(event) => setDiscription(event.target.value)}
              minRows={2}
              maxRows={4}
              startDecorator={
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <IconButton
                    variant="outlined"
                    color="neutral"
                    onClick={addEmoji("👍")}
                  >
                    👍
                  </IconButton>
                  <IconButton
                    variant="outlined"
                    color="neutral"
                    onClick={addEmoji("🏖")}
                  >
                    🏖
                  </IconButton>
                  <IconButton
                    variant="outlined"
                    color="neutral"
                    onClick={addEmoji("😍")}
                  >
                    😍
                  </IconButton>
                </Box>
              }
              endDecorator={
                <Typography level="body3" sx={{ ml: "auto" }}>
                  {discription.length} character(s)
                </Typography>
              }
              sx={{ minWidth: 300 }}
            />
          </FormControl>
        </Stack>
      </form>
    </>
  );
}
