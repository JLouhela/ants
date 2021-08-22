import * as Two from "./two.js";
let two = null;
const solidColor = "#FF0000";

const init = (canvas) => {
  two = new Two({
    domElement: canvas,
  });
};

const cellRight = (x, cellSize) => {
  return (x + 1) * cellSize;
};

const cellLeft = (x, cellSize) => {
  return x * cellSize;
};

const cellTop = (y, cellSize) => {
  return y * cellSize;
};

const cellBottom = (y, cellSize) => {
  return (y + 1) * cellSize;
};

const cellLeftCenter = (x, y, cellSize) => {
  const tmpX = cellLeft(x, cellSize);
  const tmpY = y * cellSize + cellSize / 2;
  return [tmpX, tmpY];
};

const cellRightCenter = (x, y, cellSize) => {
  const tmpX = cellRight(x, cellSize);
  const tmpY = y * cellSize + cellSize / 2;
  return [tmpX, tmpY];
};

const cellBottomCenter = (x, y, cellSize) => {
  const tmpX = x * cellSize + cellSize / 2;
  const tmpY = cellBottom(y, cellSize);
  return [tmpX, tmpY];
};

const cellTopCenter = (x, y, cellSize) => {
  const tmpX = x * cellSize + cellSize / 2;
  const tmpY = cellTop(y, cellSize);
  return [tmpX, tmpY];
};

const drawCase0 = (x, y, cellSize) => {};

const drawCase1 = (x, y, cellSize) => {
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);

  var polygon = two.makePath(
    [
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(leftCenterX, bottomCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(
        bottomCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase2 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);

  var polygon = two.makePath(
    [
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(
        rightCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(
        bottomCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase3 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  let bottomY = cellBottom(y, cellSize);
  var polygon = two.makePath(
    [
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(leftCenterX, bottomY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, bottomY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};

const drawCase4 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);
  var polygon = two.makePath(
    [
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(rightCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase5 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);

  var polygon = two.makePath(
    [
      new Two.Anchor(leftCenterX, bottomCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(
        bottomCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftCenterX, bottomCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase6 = (x, y, cellSize) => {
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);
  const rightX = cellRight(x, cellSize);
  var polygon = two.makePath(
    [
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(
        bottomCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(rightX, bottomCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase7 = (x, y, cellSize) => {
  const rightX = cellRight(x, cellSize);
  const bottomY = cellBottom(y, cellSize);
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);

  var polygon = two.makePath(
    [
      new Two.Anchor(leftCenterX, bottomY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(rightX, bottomY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftCenterX, bottomY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase8 = (x, y, cellSize) => {
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);
  var polygon = two.makePath(
    [
      new Two.Anchor(leftCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(leftCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase9 = (x, y, cellSize) => {
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);
  const leftX = cellLeft(x, cellSize);
  var polygon = two.makePath(
    [
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(
        bottomCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(leftX, bottomCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase10 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);

  var polygon = two.makePath(
    [
      new Two.Anchor(
        rightCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.move
      ),
      new Two.Anchor(
        bottomCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(
        rightCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
    ],
    true,
    true,
    false
  );
  polygon.fill = solidColor;
};
const drawCase11 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const bottomY = cellBottom(y, cellSize);
  const leftX = cellLeft(x, cellSize);
  const [topCenterX, topCenterY] = cellTopCenter(x, y, cellSize);

  var polygon = two.makePath(
    [
      new Two.Anchor(rightCenterX, bottomY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(leftX, bottomY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(topCenterX, topCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, bottomY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase12 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  let topY = y * cellSize;
  var polygon = two.makePath(
    [
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(leftCenterX, topY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, topY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase13 = (x, y, cellSize) => {
  const [rightCenterX, rightCenterY] = cellRightCenter(x, y, cellSize);
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);
  const leftX = cellLeft(x, cellSize);
  const topY = cellTop(y, cellSize);

  var polygon = two.makePath(
    [
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(rightCenterX, topY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftX, topY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(leftX, bottomCenterY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(
        bottomCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(rightCenterX, rightCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase14 = (x, y, cellSize) => {
  const rightCenterX = cellRight(x, cellSize);
  const [bottomCenterX, bottomCenterY] = cellBottomCenter(x, y, cellSize);
  const [leftCenterX, leftCenterY] = cellLeftCenter(x, y, cellSize);
  const topY = cellTop(y, cellSize);

  var polygon = two.makePath(
    [
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(leftCenterX, topY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(rightCenterX, topY, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(
        rightCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(
        bottomCenterX,
        bottomCenterY,
        0,
        0,
        0,
        0,
        Two.Commands.line
      ),
      new Two.Anchor(leftCenterX, leftCenterY, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};
const drawCase15 = (x, y, cellSize) => {
  const top = cellTop(y, cellSize);
  const bottom = cellBottom(y, cellSize);
  const left = cellLeft(x, cellSize);
  const right = cellRight(x, cellSize);

  var polygon = two.makePath(
    [
      new Two.Anchor(left, top, 0, 0, 0, 0, Two.Commands.move),
      new Two.Anchor(left, bottom, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(right, bottom, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(right, top, 0, 0, 0, 0, Two.Commands.line),
      new Two.Anchor(left, top, 0, 0, 0, 0, Two.Commands.line),
    ],
    true,
    false,
    true
  );
  polygon.fill = solidColor;
};

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
