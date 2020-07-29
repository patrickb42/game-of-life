type IsValidPositionArgs = {
  x: number,
  y: number,
  width: number,
  height: number,
}
export const isValidPosition = ({
  x,
  y,
  width,
  height,
}: IsValidPositionArgs) => (
  x < width
  && x > -1
  && y < height
  && y > -1
);

export default isValidPosition;
