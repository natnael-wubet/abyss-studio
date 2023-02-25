import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DeleteForever from "@mui/icons-material/DeleteForever";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import Typography from "@mui/joy/Typography";
export default function Signout({ open, setOpen }) {
  return (
    <Modal
      aria-labelledby="alert-dialog-modal-title"
      aria-describedby="alert-dialog-modal-description"
      open={open}
      onClose={() => setOpen(false)}
    >
      <ModalDialog variant="outlined" role="alertdialog">
        <Typography
          id="alert-dialog-modal-title"
          component="h2"
          level="inherit"
          fontSize="1.25em"
          mb="0.25em"
          startDecorator={<WarningRoundedIcon />}
        >
          Sign out?
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography
          id="alert-dialog-modal-description"
          textColor="text.tertiary"
          mb={3}
        >
          Are you sure you want to Sign out?
        </Typography>
        <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
          <Button
            variant="plain"
            color="neutral"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            color="danger"
            onClick={() => {
              delete localStorage.user;
              delete localStorage.signedin;
              setOpen(false);
              window.location.href = "/";
            }}
          >
            Yes, Signout
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
}
