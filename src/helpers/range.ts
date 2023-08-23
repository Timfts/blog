export default function range(value: number): number[] {
  return [...new Array(value)].map((_, idx) => idx);
}
