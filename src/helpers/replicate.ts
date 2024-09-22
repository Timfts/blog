export default function replicate<T>(item: T, amount: number): T[] {
  return new Array(amount).fill(item);
}
