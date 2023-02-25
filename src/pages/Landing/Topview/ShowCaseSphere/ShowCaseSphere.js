import { createRoot } from "react-dom/client";
import React, { useEffect, useRef, useMemo, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import Button from "@mui/material/Button";
import { purple, blueGrey } from "@mui/material/colors";

import { useDrag } from "react-use-gesture";
import * as THREE from "three";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";

import Earth from "./Earth";
import {
  Text,
  OrbitControls,
  View,
  PresentationControls,
  BBAnchor,
  Html,
  Box,
  Sphere,
  TransformControls,
} from "@react-three/drei";
function randomPos() {
  let x = -1 + Math.random() * 7;

  return -5 + Math.random() * 10;
}
function randomPos2() {
  let x = -3.5 + Math.random() * 7;

  return -1.5 + Math.random() * 3;
}
function Boxy(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
function Inspector({ responsiveness = 20, children }) {
  const { size } = useThree();
  const euler = useMemo(() => new THREE.Euler(), []);
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
  }));
  const bind = useDrag(({ delta: [dx, dy] }) => {
    euler.y += (dx / size.width) * responsiveness;
    euler.x += (dy / size.width) * responsiveness;
    euler.x = THREE.MathUtils.clamp(euler.x, -Math.PI / 2, Math.PI / 2);
    set({ rotation: euler.toArray().slice(0, 3) });
  });
  return (
    <a.group {...bind()} {...spring}>
      {children}
    </a.group>
  );
}

function Spheree() {
  const [position, setPosition] = useState([-1.2, 0, 0]);
  const [rotation, setRotation] = useState([Math.PI / 2, 0, 0]);
  const [prevxy, setprevxy] = useState([0, 0]);
  const [flipflop, setFlipflop] = useState(false);
  const hundleMove = (e) => {
    // setRotation(e.x, e.y);
    // console.log("move", flipflop, e);
    if (flipflop) {
      let xy = [e.x, e.y];
      // let prevxy = [rotation[0], rotation[1]];
      let newrot = [rotation[0], rotation[1], 0];
      //if (prevxy[0] > xy[0]) newrot[1] -= 0.01;
      // if (prevxy[0] < xy[0]) newrot[1] -= 0.01;
      newrot[0] -= (prevxy[1] - xy[1]) / 200;
      newrot[1] -= (prevxy[0] - xy[0]) / 200;
      //    if (prevxy[1] > xy[1]) newrot[0] -= (prevxy[1] - xy[1]) / 200;
      // if (prevxy[1] < xy[1]) newrot[0] -= 0.01;
      setprevxy([e.x, e.y]);
      // setRotation([newrot[0], newrot[1], 0]);
    }
  };
  return (
    <mesh
      visible
      userData={{ hello: "world" }}
      position={[0, 0, 0]}
      rotation={rotation}
      onClick={(e) => console.log("click")}
      onContextMenu={(e) => console.log("context menu")}
      onDoubleClick={(e) => console.log("double click")}
      onWheel={(e) => console.log("wheel spins")}
      onPointerUp={(e) => {
        setFlipflop(false);
        console.log("up", false);
      }}
      onPointerDown={(e) => {
        setFlipflop(true);
        console.log("down", true);
      }}
      onPointerOver={(e) => console.log("over")}
      onPointerOut={(e) => {
        setFlipflop(false);
        console.log("out");
      }}
      onPointerEnter={(e) => console.log("enter")} // see note 1
      onPointerLeave={(e) => console.log("leave")} // see note 1
      onPointerMove={hundleMove}
      onPointerMissed={() => console.log("missed")}
      onUpdate={(self) => console.log("props have been updated")}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
export default function ShowCaseSphere() {
  return (
    <>
      <Canvas>
        <ambientLight /> <pointLight position={[10, 10, 10]} />
        <Inspector></Inspector>
        <PresentationControls
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        >
          <Text color="white" anchorX="end" anchorY="middle"></Text>
          <Sphere position={[0, 0, 0]} args={[1, 10, 16]} smoothness={1}>
            {/*<BBAnchor anchor={[randomPos2(), randomPos2(), randomPos2()]}>
              <Html center>
                <Button variant="contained" color={"error"}>
                  Travelz
                </Button>
              </Html>
            </BBAnchor>
            <BBAnchor anchor={[randomPos2(), randomPos2(), randomPos2()]}>
              <Html center>
                <Button variant="contained" color="error">
                  Metalic
                </Button>
              </Html>
            </BBAnchor>

            <BBAnchor anchor={[randomPos2(), randomPos2(), randomPos2()]}>
              <Html center>
                <Button variant="contained" color="error">
                  Restless
                </Button>
              </Html>
            </BBAnchor>

            <BBAnchor anchor={[randomPos2(), randomPos2(), randomPos2()]}>
              <Html center>
                <Button variant="contained" color="error">
                  Zenbil
                </Button>
              </Html>
            </BBAnchor>*/}
            <meshStandardMaterial color="red" />
          </Sphere>
          {[...Array(25).keys()].map((x) => (
            <Sphere
              position={[randomPos(), randomPos(), randomPos()]}
              args={[0.2, 5 + Math.random() * 5, 5 + Math.random() * 6]}
              smoothness={1}
            >
              <meshStandardMaterial color="red" />
            </Sphere>
          ))}
        </PresentationControls>
        <OrbitControls makeDefault />
      </Canvas>
    </>
  ); /*/
  return (
    <>
      <Canvas>
        {" "}
        <Suspense fallback={null}>
          <OrbitControls />
          <pointLight position={[10, 10, 10]} />
          <Environment preset="sunset" background />
          <Earth />
        </Suspense>
      </Canvas>
    </>
  );*/
}
