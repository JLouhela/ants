import { World, Cell } from "ants";
import { memory } from "ants/ants_bg";

const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#000000";

const world = World.new();
const width = world.width();
const height = world.height();
const cell_size = world.cell_size();

const canvas = document.getElementById("ants-canvas");
canvas.height = (cell_size + 1) * height + 1;
canvas.width = (cell_size + 1) * width + 1;

const ctx = canvas.getContext("2d");

const drawGrid = () => {
  ctx.beginPath();
  ctx.strokeStyle = GRID_COLOR;

  // Vertical lines.
  for (let x = 0; x <= width; ++x) {
    ctx.moveTo(x * cell_size, 0);
    ctx.lineTo(x * cell_size, cell_size * height);
  }

  // Horizontal lines.
  for (let y = 0; y <= height; y++) {
    ctx.moveTo(0, y * cell_size);
    ctx.lineTo(cell_size * width, y * cell_size);
  }

  ctx.stroke();
};

const getCellType = (cell) => {
  // Match wiki table
  switch (cell) {
    case 0:
      return 0;
    case 0xff00:
      return 1;
    case 0xff:
      return 2;
    case 0xffff:
      return 3;
    case 0xff000:
      return 4;
    case 0xffff00:
      return 5;
    case 0xff00ff:
      return 6;
    case 0xffffff:
      return 7;
    case 0xff000000:
      return 8;
    case 0xff00ff00:
      return 9;
    case 0xff0000ff:
      return 10;
    case 0xff00ffff:
      return 11;
    case 0xffff0000:
      return 12;
    case 0xffffff00:
      return 13;
    case 0xffff00ff:
      return 14;
    case 0xffffffff:
      return 15;
    default:
      console.error("Unhandled corner value " + corners);
  }
  return 0;
};

const drawTerrain = () => {
  for (let x = 0; x < width; ++x) {
    for (let y = 0; y < height; ++y) {
      const cell = world.cell(x, y);
      const cellType = getCellType(cell);
      ctx.font = "10px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        cellType,
        x * cell_size + cell_size / 2,
        y * cell_size + cell_size / 2 + 4
      );
    }
  }
};

const renderLoop = () => {
  world.tick();
  drawGrid();
  drawTerrain();
  requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
