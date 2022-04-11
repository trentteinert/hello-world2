import './App.css';
import { Suspense } from "react";
import React from "react"
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model2 from "./components/Model2";

function Stand() {
  return (
    <mesh position={[-0.1, -0.47, -.07]} rotation={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[.7, 0.02, 1.4]} />
      <meshLambertMaterial attach="material" color="#002800" />
    </mesh>
  );
}

function Wall1() {
  return (
    <mesh position={[-0.1, 0.23, 2]} rotation={[Math.PI / 2, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[5, 0.02, 1.4]} />
      <meshLambertMaterial attach="material" color="#002800" />
    </mesh>
  );
}

function Wall2() {
  return (
    <mesh position={[-0.1, 0.23, 3.2]} rotation={[Math.PI / 2, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[5, 0.02, 1.4]} />
      <meshLambertMaterial attach="material" color="#002800" />
    </mesh>
  );
}

function Sidewalk() {
  return (
    <mesh position={[-1, -0.48, 11.8]} rotation={[Math.PI / 1, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[10, .2, 20]} />
      <meshLambertMaterial attach="material" color="#666666" />
    </mesh>
  );
}

function Sidewalk2() {
  return (
    <><mesh position={[15, -0.48, 11.8]} rotation={[Math.PI / 1, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[10, .2, 20]} />
      <meshLambertMaterial attach="material" color="#666666" />
    </mesh><mesh position={[31, -0.48, 11.8]} rotation={[Math.PI / 1, 0, 0]}>
        <boxBufferGeometry attach="geometry" args={[10, .2, 20]} />
        <meshLambertMaterial attach="material" color="#666666" />
      </mesh></>



  );
}

function Plane() {
  return (
    <mesh position={[0, -0.48, 0]} rotation={[Math.PI / -2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="#333333" />
    </mesh>
  );
}

export default function App() {
  return (
    <Wrapper className="App">
      <Canvas clasName="canvas" camera={{ fov: 40, position: [2, 1, 0] }}>
        <OrbitControls target={[0, 0, 0]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[3, 3, 1]} angle={0.3} />
        <Stand />
        <Wall1 />
        <Wall2 />
        <Sidewalk />
        <Sidewalk2 />
        <Plane />
        <Suspense fallback={null}>
          <Model2 position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: white;

  canvas {
    height: 800px;
    width: auto;
  }
`;
