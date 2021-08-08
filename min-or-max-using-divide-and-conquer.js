// Fiddle: https://jsfiddle.net/x2vop1d9/
// Note: As we programmed things after a longer period of time, things were bit harder to figure out. But we finally made the program working after an hour.
// Still needs more practice.

let x = [4, 135, 3];

const findMax = (array, i = -1, j = -1) => {
  const length = (i == -1) ? array.length : (j - i + 1);
  const reformatedI = (i == -1 ? 0 : i);
  const reformatedJ = (j == -1 ? array.length - 1: j);

  if (length == 1) return array[reformatedI];

  const arrayMidPoint = Math.floor(length / 2);
  const leftHalfStart = reformatedI;
  const leftHalfEnd = reformatedI + arrayMidPoint - 1;
  const rightHalfStart = reformatedI + arrayMidPoint;
  const rightHalfEnd = reformatedJ;

  const LeftMax = findMax(array, leftHalfStart, leftHalfEnd);
  const rightMax = findMax(array, rightHalfStart, rightHalfEnd);

  return LeftMax > rightMax ? LeftMax : rightMax;
};

console.log(findMax(x));
