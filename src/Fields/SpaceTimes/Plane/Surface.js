import React from "react";
import Sketch from "react-p5";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import { CssVarsProvider } from "@mui/joy/styles";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import Button from "@mui/joy/Button";
import styles from "./Surface.module.css";
import { useState, useEffect } from "react";
let x = 50;
let y = 50;

export default function Surface({ chapter, setChapter }) {
  const [width, setWidth] = useState(window.screen.width);
  const [height, setHeight] = useState(window.screen.height);
  const [answer, setAnswer] = useState(0);
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(width / 2, height / 2).parent(canvasParentRef);
    p5.fill(0, 0, 0, 0);
    p5.strokeWeight(1);
    p5.stroke(255, 255, 255);
  };
  const funA = (p5) => {
    for (let i = 0; i < 25; i++) {
      if (i > 0) {
        p5.fill(100, 100, 100, 0);
        p5.stroke(80, 80, 80, 80);
      } else {
        //        p5.fill(255);
      }
      p5.ellipse(
        width / 4,
        height / 4 + Math.sin((x - i) / 22.4) * (height / 6),
        width / 3 - i * 10,
        height / 3 - i * 10
      );
    }
    p5.stroke(255);
    p5.ellipse(
      width / 4,
      height / 4 + Math.sin(x / 22.4) * (height / 6),
      width / 3,
      height / 3
    );
  };
  const funB = (p5) => {
    for (let i = 0; i < 50; i++) {
      if (i > 0) {
        p5.fill(100, 100, 100, 10);
        p5.stroke(80, 80, 80);
      } else {
        p5.fill(255);
      }
      p5.ellipse(
        (width / 4 + (width / 4 + Math.cos((x - i) / 22.4) * (width / 6))) / 2,
        (height / 4 + height / 4 + Math.sin((x - i) / 22.4) * (height / 6)) / 2,
        15 - i / 4,
        15 - i / 4
      );
    }
    p5.stroke(255);

    p5.fill(0, 0, 0, 0);
  };
  const funC = (p5) => {
    for (let i = 0; i < 25; i++) {
      if (i > 0) {
        p5.fill(100, 100, 100, 0);
        p5.stroke(80, 80, 80, 80);
      } else {
        //        p5.fill(255);
      }
      p5.line(
        width / 4,
        height / 4 + Math.sin((x - i) / 22.4) * (height / 6),
        width / 4 + Math.cos((x - i) / 22.4) * (width / 6),
        height / 4
      );
    }
    p5.stroke(255);
    p5.line(
      width / 4,
      height / 4 + Math.sin(x / 22.4) * (height / 6),
      width / 4 + Math.cos(x / 22.4) * (width / 6),
      height / 4
    );
  };
  const funD = (p5) => {
    p5.fill(100, 100, 100, 0);
    p5.stroke(180, 180, 180, 80);
    p5.line(width / 4, 0, width / 4, height / 2);
    p5.line(0, height / 4, width / 2, height / 4);
    p5.stroke(255);
    for (let i = 0; i < 25; i++) {
      if (i > 0) {
        p5.fill(100, 100, 100, 0);
        p5.stroke(80, 80, 80, 80);
      } else {
        //        p5.fill(255);
      }

      p5.ellipse(
        width / 4,
        height / 4 + Math.sin((x - i) / 22.4) * (height / 6),
        10 - i / 4,
        10 - i / 4
      );
      p5.ellipse(
        width / 4 + Math.cos((x - i) / 22.4) * (width / 6),
        height / 4,
        10 - i / 4,
        10 - i / 4
      );
    }
  };
  const funE = (p5) => {
    for (let i = 0; i < 25; i++) {
      if (i > 0) {
        p5.fill(100, 100, 100, 0);
        p5.stroke(80, 80, 80, 80);
      } else {
        //        p5.fill(255);
      }
      p5.ellipse(
        (width / 4 + (width / 4 + Math.cos((x - i) / 22.4) * (width / 6))) / 2,
        (height / 4 + height / 4 + Math.sin((x - i) / 22.4) * (height / 6)) / 2,
        width / 6 - i * 2,
        height / 6 - i * 2
      );
    }
    p5.stroke(255);
    p5.ellipse(
      (width / 4 + (width / 4 + Math.cos(x / 22.4) * (width / 6))) / 2,
      (height / 4 + height / 4 + Math.sin(x / 22.4) * (height / 6)) / 2,
      width / 6,
      height / 6
    );
  };
  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(
      width / 4,
      height / 4 + Math.sin(x / 22.4) * (height / 6),
      10,
      10
    );
    p5.ellipse(
      width / 4 + Math.cos(x / 22.4) * (width / 6),
      height / 4,
      10,
      10
    );
    if (answer == 1) funA(p5);
    else if (answer == 2) funB(p5);
    else if (answer == 3) funC(p5);
    else if (answer == 4) funD(p5);
    else if (answer == 5) funE(p5);
    else if (answer == 6) {
      funA(p5);
      funB(p5);
      funC(p5);
      funD(p5);
      funE(p5);
    }

    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x = x + 1;
  };

  return (
    <CssVarsProvider>
      <div className={styles.chapterParent}>
        <Card
          className={styles.chapterCard}
          sx={{
            width: width / 2,
            bgcolor: "initial",
            heightk: height / 2,
            boxShadow: "none",
            "--Card-padding": "0px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <Sketch setup={setup} draw={draw} />
              </figure>
            </AspectRatio>
            <CardCover
              className="gradient-cover"
              sx={{
                "&:hover, &:focus-within": {
                  opacity: 1,
                },
                opacity: 0,
                transition: "0.1s ease-in",
                background:
                  "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
              }}
            >
              {/* The first box acts as a container that inherits style from the CardCover */}
              <Box>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    flexGrow: 1,
                    alignSelf: "flex-end",
                  }}
                >
                  <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                    <Link
                      href="#dribbble-shot"
                      overlay
                      underline="none"
                      sx={{
                        color: "#fff",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "block",
                      }}
                    >
                      Chapter 1
                    </Link>
                  </Typography>
                  <IconButton size="sm" color="neutral" sx={{ ml: "auto" }}>
                    <CreateNewFolder />
                  </IconButton>
                  <IconButton size="sm" color="neutral">
                    <Favorite />
                  </IconButton>
                </Box>
              </Box>
            </CardCover>
          </Box>
          <Box sx={{ display: "flex", gap: 1, mt: 1.5, alignItems: "center" }}>
            <Avatar
              src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
              size="sm"
              sx={{ "--Avatar-size": "1.5rem" }}
            />
            <Typography
              sx={{ fontSize: "sm", fontWeight: "md", color: "#fff" }}
            >
              Describe what you see
            </Typography>
            <Chip
              variant="outlined"
              color="danger"
              onClick={() => setAnswer(0)}
              size="sm"
              sx={{
                borderRadius: "sm",
                py: 0.25,
                px: 0.5,
              }}
            >
              Clear{" "}
            </Chip>
            <Link
              href="#dribbble-shot"
              level="body3"
              underline="none"
              startDecorator={<Favorite />}
              sx={{
                fontWeight: "md",
                ml: "auto",
                color: "text.secondary",
                "&:hover": { color: "danger.plainColor" },
              }}
            >
              117
            </Link>
            <Link
              href="#dribbble-shot"
              level="body3"
              underline="none"
              startDecorator={<Visibility />}
              sx={{
                fontWeight: "md",
                color: "text.secondary",
                "&:hover": { color: "primary.plainColor" },
              }}
            >
              10.4k
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: 1, mt: 1.5, alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
                  gap: 1,
                }}
              >
                <Button
                  onClick={() => {
                    if (answer == 1) setAnswer(0);
                    else setAnswer(1);
                  }}
                  variant={answer == 1 ? "solid" : "outlined"}
                  color={answer == 1 ? "success" : "primary"}
                >
                  One circle orbiting the other
                </Button>
                <Button
                  onClick={() => {
                    if (answer == 2) setAnswer(0);
                    else setAnswer(2);
                  }}
                  variant={answer == 2 ? "solid" : "outlined"}
                  color={answer == 2 ? "success" : "primary"}
                >
                  Both circles orbiting a hidden point
                </Button>
                <Button
                  onClick={() => {
                    if (answer == 3) setAnswer(0);
                    else setAnswer(3);
                  }}
                  variant={answer == 3 ? "solid" : "outlined"}
                  color={answer == 3 ? "success" : "primary"}
                >
                  swinging to each other
                </Button>
                <Button
                  onClick={() => {
                    if (answer == 4) setAnswer(0);
                    else setAnswer(4);
                  }}
                  variant={answer == 4 ? "solid" : "outlined"}
                  color={answer == 4 ? "success" : "primary"}
                >
                  They going one dimentional movment
                </Button>
                <Button
                  onClick={() => {
                    if (answer == 5) setAnswer(0);
                    else setAnswer(5);
                  }}
                  variant={answer == 5 ? "solid" : "outlined"}
                  color={answer == 5 ? "success" : "primary"}
                >
                  Both circles making a bigger circle
                </Button>
                <Button
                  onClick={() => {
                    if (answer == 6) setAnswer(0);
                    else setAnswer(6);
                  }}
                  variant={answer == 6 ? "solid" : "outlined"}
                  color={answer == 6 ? "success" : "primary"}
                >
                  All
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </div>
    </CssVarsProvider>
  );
}
