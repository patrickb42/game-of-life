import { isValidPosition } from './isValidPosition';

export function buildMemoziedGetNeighborIndexes(gridWidth: number, gridHeight: number) {
  const size = gridWidth * gridHeight;
  const cache = Array<number[]>(size);

  const buildGetNeighborIndex = (width: number, height: number) => ((index: number) => {
    const result = [];
    const x = index % width;
    const y = Math.floor((index - x) / width);

    for (let yOffset = -1; yOffset < 2; yOffset += 1) {
      for (let xOffset = -1; xOffset < 2; xOffset += 1) {
        if (
          isValidPosition({
            x: x + xOffset,
            y: y + yOffset,
            width,
            height,
          })
          && (xOffset !== 0 || yOffset !== 0)
        ) result.push((y + yOffset) * width + (x + xOffset));
      }
    }

    return result;
  });

  const getNeighborIndexes = buildGetNeighborIndex(gridHeight, gridHeight);

  return ((index: number) => {
    if (cache[index] !== undefined) return cache[index];
    cache[index] = getNeighborIndexes(index);
    return cache[index];
  });
}

export default buildMemoziedGetNeighborIndexes;
