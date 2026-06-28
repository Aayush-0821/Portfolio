
export type { Mode } from "./Piece";

export function randomWaypoint() {
  return {
    x: Math.random() * 400 - 200,
    y: Math.random() * 300 - 150,
    rotate: Math.random() * 60 - 30,
  };
}