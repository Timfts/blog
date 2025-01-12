// import { Runner } from "./Runner";

// /**
//  * Decodes the base 64 audio to ArrayBuffer used by Web Audio.
//  * @param {string} base64String
//  */
// export function decodeBase64ToArrayBuffer(base64String) {
//   const len = (base64String.length / 4) * 3;
//   const str = atob(base64String);
//   const arrayBuffer = new ArrayBuffer(len);
//   let bytes = new Uint8Array(arrayBuffer);
//   for (var i = 0; i < len; i++) {
//     bytes[i] = str.charCodeAt(i);
//   }
//   return bytes.buffer;
// }

// /**
//  * Create canvas element.
//  */
// export function createCanvas(
//   container: HTMLElement,
//   width: number,
//   height: number,
//   opt_classname?: string
// ): HTMLCanvasElement {
//   const canvas = document.createElement("canvas");
//   canvas.className = opt_classname
//     ? Runner.classes.CANVAS + " " + opt_classname
//     : Runner.classes.CANVAS;
//   canvas.width = width;
//   canvas.height = height;
//   container.appendChild(canvas);
//   return canvas;
// }
