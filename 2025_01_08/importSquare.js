import { name, draw } from "./exportSquare.js";

console.log(name);

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

draw(ctx, 50, 100, 100, 'blue');