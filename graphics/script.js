const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");
//black rectangle
// ctx.fillStyle = "rgb(0, 0, 0)";
// ctx.fillRect(0, 0, width, height);

//red rectangle
// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect(50, 50, 100, 150);

//green rectangle
// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(75, 75, 100, 100);

//triangle
// function degToRad(degrees) {
//     return (degrees * Math.PI) / 180;
//   }
// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// const triHeight = 50 * Math.tan(degToRad(60));
// ctx.lineTo(100, 50 + triHeight);
// ctx.lineTo(50, 50);
// ctx.fill();

//circle
// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.beginPath();
// ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
// ctx.fill();