import * as Two from "./two.js";
let two = null;

const init = (canvas) => {
  two = new Two({
    domElement: canvas,
  });
};

const cellLeftCenter = (x, y, cellSize) => {
  const tmpX = x * cellSize - cellSize / 2;
  const tmpY = y * cellSize;
  return [tmpX, tmpY];
};

const cellRightCenter = (x, y, cellSize) => {
  const tmpX = x * cellSize + cellSize / 2;
  const tmpY = y * cellSize;
  return [tmpX, tmpY];
};

const cellBottomCenter = (x, y, cellSize) => {
  const tmpX = x * cellSize;
  const tmpY = y * cellSize + cellSize / 2;
  return [tmpX, tmpY];
};

const cellTopCenter = (x, y, cellSize) => {
  const tmpX = x * cellSize;
  const tmpY = y * cellSize - cellSize / 2;
  return [tmpX, tmpY];
};

const drawCase0 = (x, y, cellSize) => {};

const drawCase1 = (x, y, cellSize) => {
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);
  var line = two.makeLine(
    leftCenterX,
    leftCenterY,
    bottomCenterX,
    bottomCenterY
  );
};
const drawCase2 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);
  var line = two.makeLine(
    rightCenterX,
    rightCenterY,
    bottomCenterX,
    bottomCenterY
  );
  line.lineWidth = 5;
};
const drawCase3 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  var line = two.makeLine(rightCenterX, rightCenterY, leftCenterX, leftCenterY);
};

const drawCase4 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);
  var line = two.makeLine(rightCenterX, rightCenterY, topCenterX, topCenterY);
};
const drawCase5 = (x, y, cellSize) => {
  drawCase2(x, y, cellSize);
  drawCase7(x, y, cellSize);
};
const drawCase6 = (x, y, cellSize) => {
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);
  var line = two.makeLine(topCenterX, topCenterY, bottomCenterX, bottomCenterY);
};
const drawCase7 = (x, y, cellSize) => {
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);
  var line = two.makeLine(leftCenterX, leftCenterY, topCenterX, topCenterY);
};
const drawCase8 = (x, y, cellSize) => {
  drawCase7(x, y, cellSize);
};
const drawCase9 = (x, y, cellSize) => {
  drawCase6(x, y, cellSize);
};
const drawCase10 = (x, y, cellSize) => {
  drawCase1(x, y, cellSize);
  drawCase4(x, y, cellSize);
};
const drawCase11 = (x, y, cellSize) => {
  drawCase4(x, y, cellSize);
};
const drawCase12 = (x, y, cellSize) => {
  drawCase3(x, y, cellSize);
};
const drawCase13 = (x, y, cellSize) => {
  drawCase2(x, y, cellSize);
};
const drawCase14 = (x, y, cellSize) => {
  drawCase1(x, y, cellSize);
};
const drawCase15 = (x, y, cellSize) => {};

const prepareTerrain = (x, y, cellType, cellSize) => {
  switch (cellType) {
    case 0:
      drawCase0(x, y, cellSize);
      break;
    case 1:
      drawCase1(x, y, cellSize);
      break;
    case 2:
      drawCase2(x, y, cellSize);
      break;
    case 3:
      drawCase3(x, y, cellSize);
      break;
    case 4:
      drawCase4(x, y, cellSize);
      break;
    case 5:
      drawCase5(x, y, cellSize);
      break;
    case 6:
      drawCase6(x, y, cellSize);
      break;
    case 7:
      drawCase7(x, y, cellSize);
      break;
    case 8:
      drawCase8(x, y, cellSize);
      break;
    case 9:
      drawCase9(x, y, cellSize);
      break;
    case 10:
      drawCase10(x, y, cellSize);
      break;
    case 11:
      drawCase11(x, y, cellSize);
      break;
    case 12:
      drawCase12(x, y, cellSize);
      break;
    case 13:
      drawCase13(x, y, cellSize);
      break;
    case 14:
      drawCase14(x, y, cellSize);
      break;
    case 15:
      drawCase15(x, y, cellSize);
      break;
    default:
      console.error("Unhandled terrain type " + cellType);
      break;
  }
};

const draw = () => {
  two.update();
};

export { init, prepareTerrain, draw };
