import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import useStore from "../hooks/useStore";
import { useGameContext } from "../../context/GameContext";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0.5, -0.5, 0.5],
  }));
  const { pos } = useGameContext();

  const [addCube] = useStore((state) => [state.addCube]);

  groundTexture.repeat.set(100, 100);

  function calculateDistance(vector1, vector2) {
    if (vector1.length !== vector2.length) {
      throw new Error("Vectors must have the same dimensions");
    }

    let sumOfSquares = 0;
    for (let i = 0; i < vector1.length; i++) {
      sumOfSquares += Math.pow(vector1[i] - vector2[i], 2);
    }

    return Math.sqrt(sumOfSquares);
  }

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point);
        const distance = calculateDistance([x, y, z], pos.current);
        console.log(distance);
        if (distance < 6) {
          const [nx, ny, nz] = [Math.round(x), Math.ceil(y), Math.round(z)];
          addCube(nx, ny, nz, [0, 0, 0]);
        }
      }}
    >
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};
