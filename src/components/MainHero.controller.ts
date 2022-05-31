import "shader-doodle";

const text = "Teste Batata";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
console.log(canvas);
canvas.height = 1024;
canvas.width = 1024;
const ctx = canvas.getContext("2d");
ctx.font = "50px 'Pixel Operator Mono'";
ctx.textAlign = "center";
ctx.textBaseline = "top";
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#fff";
ctx.translate(canvas.width / 2, 0);
for (var i = -1; i < 6; i++) {
  ctx.fillText(text, 0, (i * canvas.height) / 6);
}
