/**
 * Generates an array of objects with random positions, sizes, rotations and opacities to create a background.
 *
 * @param {number} count - The number of elements in the background
 * @returns {object[]} An array of objects with the following properties:
 * - left: The left position of the element
 * - top: The top position of the element
 * - size: The size of the element
 * - rotation: The rotation of the element
 * - opacity: The opacity of the element
 */
const generateBackgroundElementPositions = (count: number) => {
  const positions = [];

  const gridSize = Math.ceil(Math.sqrt(count));
  const step = 100 / gridSize;

  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;

    const left = col * step + Math.random() * (step * 0.5);
    const top = row * step + Math.random() * (step * 0.5);
    const size = 30 + Math.random() * 40;
    const rotation = Math.random() * 360;
    const opacity = 0.08 + Math.random() * 0.15;

    positions.push({ left, top, size, rotation, opacity });
  }

  return positions;
};

export { generateBackgroundElementPositions };
