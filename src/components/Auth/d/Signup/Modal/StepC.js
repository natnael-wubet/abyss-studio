import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Alert from "@mui/joy/Alert";
import GroupIcon from "@mui/icons-material/Group";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Button from "@mui/joy/Button";
import DoneIcon from "@mui/icons-material/Done";
import IconButton from "@mui/joy/IconButton";
import Chip from "@mui/joy/Chip";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Lottie from "react-lottie";
import * as org from "../../../assets/lotties/orgs.json";
import * as profileCards from "../../../assets/lotties/profileCards.json";
import styles from "./StepC.module.css";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
export default function StepC({ setActiveStep, AccountType, setAccountType }) {
  const [orgLottie, setOrgLottie] = useState({
    loop: false,
    autoplay: true,

    animationData: org,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });
  const [comLottie, setComLottie] = useState({
    loop: false,
    autoplay: true,

    animationData: profileCards,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });
  const continueAs = (x) => {
    setAccountType(x);
    setActiveStep(1);
  };
  const hover_ = (x) => {
    if (x === 0) {
      setOrgLottie({
        loop: true,
        autoplay: true,

        animationData: org,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    } else if (x === 1) {
      setComLottie({
        loop: true,
        autoplay: true,

        animationData: profileCards,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    }
  };
  const closeHover = (x) => {
    if (x === 0) {
      setOrgLottie({
        loop: false,
        autoplay: true,

        animationData: org,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    } else if (x === 1) {
      setComLottie({
        loop: false,
        autoplay: true,

        animationData: profileCards,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    }
  };
  return (
    <>
      <div className={styles.topText}>
        <Typography mb={2} level="h5" sx={{ width: "220px" }} fontWeight="xl">
          Choose your account type
        </Typography>

        <Typography
          mb={4}
          sx={{ fontSize: "md", width: "250px" }}
          level="body2"
        >
          You also can change this later in your settings.
        </Typography>
      </div>
      <center>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={6}>
            <Card
              onMouseEnter={() => hover_(0)}
              onMouseLeave={() => closeHover(0)}
              variant="outlined"
              sx={(theme) => ({
                height: 450,
                maxWidth: 310,
                gridColumn: "span 2",
                flexDirection: "row",
                flexWrap: "wrap",
                resize: "horizontal",
                overflow: "hidden",
                gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                transition: "transform 0.3s, border 0.3s",
                "&:hover": {
                  borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                  transform: "translateY(-2px)",
                },
                "& > *": {
                  minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                },
              })}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  height: 250,
                  mb: "60px",
                  maxWidth: 200,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 0,
                    mt: "auto",
                    height: 200,
                  }}
                >
                  <Lottie
                    options={comLottie}
                    className={styles.lottieBox}
                    width={"100"}
                    height="120"
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 0,
                    mt: 0,
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.cardTexts}>
                    <Typography
                      mb={1}
                      pr={1}
                      level="h6"
                      sx={{ paddingRight: "10px", width: "220px" }}
                      fontWeight="lg"
                    >
                      Join as Community
                    </Typography>

                    <Alert
                      sx={{ alignItems: "flex-start" }}
                      startDecorator={React.cloneElement(<GroupIcon />, {
                        sx: { mt: "2px", mx: "0" },
                        fontSize: "xl2",
                      })}
                      variant="outlined"
                      color="success"
                    >
                      <div>
                        <Typography fontWeight="lg" mt={0.25}>
                          with this option, you can
                        </Typography>
                        <Typography fontSize="xs" sx={{ opacity: 0.8 }}>
                          <Chip
                            size="xs"
                            sx={{ marginBottom: "1px", padding: "0 5px" }}
                            mb={1}
                            color="success"
                            variant="soft"
                            startDecorator={<DoneIcon />}
                          >
                            Join Compitations
                          </Chip>
                          <Chip
                            size="xs"
                            sx={{ marginBottom: "1px", padding: "0 5px" }}
                            mb={1}
                            color="success"
                            variant="soft"
                            startDecorator={<DoneIcon />}
                          >
                            Claim awards
                          </Chip>
                          <Chip
                            size="xs"
                            sx={{ marginBottom: "1px", padding: "0 5px" }}
                            mb={1}
                            color="success"
                            variant="soft"
                            startDecorator={<DoneIcon />}
                          >
                            Participate on hosts
                          </Chip>
                        </Typography>
                      </div>
                    </Alert>
                  </div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "contents",
                  gap: 0,
                  mt: "20px",
                }}
              >
                <Button
                  sx={{ mt: "30px", width: "100%" }}
                  size="xl"
                  variant="solid"
                  onClick={() => continueAs(0)}
                  color="success"
                >
                  Continue as Community
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={6}>
            <Card
              onMouseEnter={() => hover_(0)}
              onMouseLeave={() => closeHover(0)}
              variant="outlined"
              sx={(theme) => ({
                height: 450,
                maxWidth: 310,
                gridColumn: "span 2",
                flexDirection: "row",
                flexWrap: "wrap",
                resize: "horizontal",
                overflow: "hidden",
                gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                transition: "transform 0.3s, border 0.3s",
                "&:hover": {
                  borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                  transform: "translateY(-2px)",
                },
                "& > *": {
                  minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                },
              })}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  height: 250,
                  mb: "60px",
                  maxWidth: 200,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 0,
                    mt: "auto",
                    height: 200,
                  }}
                >
                  <Lottie
                    options={orgLottie}
                    className={styles.lottieBox}
                    width={"100"}
                    height="120"
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 0,
                    mt: 0,
                    flexDirection: "column",
                  }}
                >
                  <div className={styles.cardTexts}>
                    <Typography
                      mb={1}
                      pr={1}
                      level="h6"
                      sx={{ paddingRight: "10px", width: "220px" }}
                      fontWeight="lg"
                    >
                      Join as Organization
                    </Typography>

                    <Alert
                      sx={{ alignItems: "flex-start" }}
                      startDecorator={React.cloneElement(
                        <CorporateFareIcon />,
                        {
                          sx: { mt: "2px", mx: "0" },
                          fontSize: "xl2",
                        }
                      )}
                      variant="outlined"
                      color="success"
                    >
                      <div>
                        <Typography fontWeight="lg" mt={0.25}>
                          with this option, you can
                        </Typography>
                        <Typography fontSize="xs" sx={{ opacity: 0.8 }}>
                          <Chip
                            size="xs"
                            sx={{ marginBottom: "1px", padding: "0 5px" }}
                            mb={1}
                            color="success"
                            variant="soft"
                            startDecorator={<DoneIcon />}
                          >
                            Create compitations
                          </Chip>
                          <Chip
                            size="xs"
                            sx={{ marginBottom: "1px", padding: "0 5px" }}
                            mb={1}
                            color="success"
                            variant="soft"
                            startDecorator={<DoneIcon />}
                          >
                            Announce
                          </Chip>
                          <Chip
                            size="xs"
                            sx={{ marginBottom: "1px", padding: "0 5px" }}
                            mb={1}
                            color="success"
                            variant="soft"
                            startDecorator={<DoneIcon />}
                          >
                            Claim awards
                          </Chip>
                          <Chip
                            size="xs"
                            sx={{ marginBottom: "1px", padding: "0 5px" }}
                            mb={1}
                            color="success"
                            variant="soft"
                            startDecorator={<DoneIcon />}
                          >
                            Host and judgement
                          </Chip>
                        </Typography>
                      </div>
                    </Alert>
                  </div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "contents",
                  gap: 0,
                  mt: "20px",
                }}
              >
                <Button
                  sx={{ mt: "30px", width: "100%" }}
                  size="xl"
                  variant="solid"
                  onClick={() => continueAs(1)}
                  color="success"
                >
                  Continue as Organization
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </center>
    </>
  );
}
