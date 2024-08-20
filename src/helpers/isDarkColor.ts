export default function isDarkColor(hexColor: string) {
  // Remove the hash at the start if it's there
  hexColor = hexColor.replace(/^#/, "");

  // Parse the r, g, b values
  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the brightness (perceived luminance)
  // This formula comes from the ITU-R BT.601 standard used in video engineering
  let brightness = 0.299 * r + 0.587 * g + 0.114 * b;

  return brightness < 127.5;
}
