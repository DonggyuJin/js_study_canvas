const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 40, 200 - 30, 15, 100);
ctx.fillRect(350 - 40, 200 - 30, 15, 100);
ctx.fillRect(255 - 40, 200 - 30, 60, 100);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(270, 80, 8, 1 * Math.PI, 2 * Math.PI);
ctx.arc(230, 80, 8, 1 * Math.PI, 2 * Math.PI);
ctx.fill();
