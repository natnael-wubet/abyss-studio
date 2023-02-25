import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
} from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
import NavBar from "./components/NavBar";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import styles from "./App.module.css";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import SignupPage from "./pages/Auth/SignupPage";
import WorkingView from "./pages/WorkingView";
import SignedinNavBar from "./components/SignedinNavBar";
import Dashboard from "./pages/Dashboard";
function App() {
  const [DialogState, setDialogState] = useState(0);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [Signedin, setSignedin] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.signedin === "true" && localStorage.user) {
      try {
        setUser(JSON.parse(localStorage.user));
        setSignedin(true);
      } catch (e) {
        delete localStorage.user;
      }
    }
    setMounted(true);
  }, []);
  return (
    <>
      {mounted ? (
        <div className="App">
          <Router>
            <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/projectview">
                  {Signedin ? <WorkingView /> : <Redirect to="/" />}
                </Route>
                <Route path="/">
                  {Signedin ? (
                    <>
                      {/**  <SignedinNavBar user={user} />*/}
                      <Dashboard user={user} />
                    </>
                  ) : (
                    <>
                      <NavBar
                        setOpenDialog={setOpenDialog}
                        setDialogState={setDialogState}
                      />{" "}
                      <Landing />
                    </>
                  )}
                </Route>
                <Route path="/studios/spacetimefield"></Route>
                <Route path="/users"></Route>
              </Switch>
            </div>
          </Router>{" "}
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={openDialog}
            size="lg"
            variant="soft"
            onClose={() => setOpenDialog(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                minWidth: 200,
                borderRadius: "md",
                p: 0,
                boxShadow: "lg",
              }}
            >
              <Sheet variant="outlined" className={styles.AuthDialogSheet}>
                {DialogState == 0 ? (
                  <SignupPage />
                ) : (
                  <>
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="inherit"
                      fontWeight="lg"
                      mb={1}
                    >
                      This is the modal title
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      Make sure to use <code>aria-labelledby</code> on the modal
                      dialog with an optional <code>aria-describedby</code>{" "}
                      attribute.
                    </Typography>
                  </>
                )}
              </Sheet>
              <ModalClose
                variant="outlined"
                sx={{
                  top: "calc(-1/4 * var(--IconButton-size))",
                  right: "calc(-1/4 * var(--IconButton-size))",
                  boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                  borderRadius: "50%",
                  bgcolor: "background.body",
                }}
              />
            </Sheet>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
