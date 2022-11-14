// Concatenate two arrays

const concatArr = (arr1:any[], arr2:any[]) => {
  return [...arr1, ...arr2];
};

// Add numbers in an array

const addArr = (arr:number[]) => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

// Find the largest number in an array
const lgNum = (arr:number[]) => {
  let largest = 0;
  arr.forEach((x) => {
    if (x > largest) {
      largest = x;
    }
  });
  return largest;
};

// Remove the 3rd item from an array
const cut3 = (arr:any[]) => {
  arr.splice(2, 1);
  return arr;
};

export  {
  concatArr,
  addArr,
  lgNum,
  cut3,
};
