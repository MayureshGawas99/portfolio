import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboard";
import { useGameContext } from "../../context/GameContext";
const JUMP_FORCE = 5;
const SPEED = 6;
const GRAVITY = -40;

const Player = () => {
  const actions = useKeyboard();
  const { moveBackward, moveForward, moveLeft, moveRight, jump } = actions;

  const { camera } = useThree();
  const { pos } = useGameContext();
  const [ref, api] = useSphere(() => ({
    mass: 10,
    type: "Dynamic",
    args: [0.5],
    position: [0, 1, 0],
    gravity: [0, GRAVITY, 0],
  }));
  const vel = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
    // eslint-disable-next-line
  }, [api.velocity]);

  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
    // eslint-disable-next-line
  }, [api.position]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1] + 1, pos.current[2])
    );
    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (jump && Math.abs(vel.current[1]) < 0.05) {
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
    }
  });
  return (
    <mesh ref={ref}>
      {/* <boxGeometry args={[1, 2, 1]} /> */}
      {/* <meshBasicMaterial color="blue" attach={"material"} /> */}
    </mesh>
  );
};

export default Player;
