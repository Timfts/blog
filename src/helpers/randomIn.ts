export default function randomIn(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Minimum value must be less than maximum value.");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
