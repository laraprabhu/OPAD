// Fiddle: https://jsfiddle.net/x2vop1d9/1/

let x = [4, 135, 3, 78, 8, 0, 553];

const findMax = (array, i = -1, j = -1) => {
  const length = (i == -1) ? array.length : (j - i + 1);
  const reformatedI = (i == -1 ? 0 : i);
  const reformatedJ = (j == -1 ? array.length - 1: j);

  if (length == 1) return { max: array[reformatedI], min: array[reformatedI] };

  const arrayMidPoint = Math.floor(length / 2);
  const leftHalfStart = reformatedI;
  const leftHalfEnd = reformatedI + arrayMidPoint - 1;
  const rightHalfStart = reformatedI + arrayMidPoint;
  const rightHalfEnd = reformatedJ;

  const leftMaxMin = findMax(array, leftHalfStart, leftHalfEnd);
  const rightMaxMin = findMax(array, rightHalfStart, rightHalfEnd);
  
  const newMaxMin = {
  	max: leftMaxMin.max > rightMaxMin.max ? leftMaxMin.max : rightMaxMin.max,
    min: leftMaxMin.min < rightMaxMin.min ? leftMaxMin.min : rightMaxMin.min
  };

  return newMaxMin;
};

console.log(findMax(x));
