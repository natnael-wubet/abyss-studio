import styles from "./Signup.module.css";
import Modal from "./Modal";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
export default function Signup() {
  return (
    <div className={styles.parent}>
      <Grid
        container
        className={styles.row}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}
      >
        <Grid
          item
          xs={0}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              xl: "block",
              lg: "block",
            },
          }}
          className={styles.col}
          sm={0}
          md={4}
          lg={6}
        >
          <div className={styles.leftcorn}>
            <Typography
              href="/"
              variant="h2"
              noWrap
              color="success"
              component="a"
              sx={{ color: "#14A44D" }}
            >
              <b>
                {" "}
                <b sx={{ color: "#14A44D" }}>Debub </b>
              </b>
            </Typography>{" "}
            <br />
            <Typography gutterBottom variant="h6" color="#fff" component="div">
              <b>Create account</b> and join us today ..
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4} sm={8} md={8} lg={6} className={styles.col}>
          <div className={styles.modal}>
            <Card className={styles.parent} raised sx={{ minWidth: 345 }}>
              <Modal />
            </Card>
          </div>
        </Grid>{" "}
      </Grid>
    </div>
  );
}
