//CHALLENGE 1
const addOne = (arr) => {
  const newArr = [];
  arr.forEach(function (item, index) {
    newArr.push(item + 1);
  });
  return newArr;
};

//CHALLENGE 2
const addExclamation = (arr) => {
  const newArr = [];
  arr.forEach(function (item, index) {
    newArr.push(item + "!");
  });
  return newArr;
};

//CHALLENGE 3
const addOneByMap = (arr) => {
  const newArr = [];
  arr.map(function (item, index) {
    newArr.push(item + 1);
  });
  return newArr;
};

//CHALLENGE 4
const addQuestion = (arr) => {
  const newArr = [];
  arr.map(function (item, index) {
    newArr.push(item + "?");
  });
  return newArr;
};

//CHALLENGE 5
const forLoopTwoToThe = (arr) => {
  arr.forEach(function (item, index) {
    arr[index] = 2 ** item;
  });
  return arr;
};

//CHALLENGE 6
const typeNum = (arr) => {
  const newArr = arr.filter(function (item) {
    return typeof item == "number";
  });
  return newArr;
};

//CHALLENGE 7
const containsAnd = (arr) => {
  const newArr = arr.filter(function (item) {
    return item.includes("and");
  });
  return newArr;
};

//CHALLENGE 8
const oddValues = (arr) => {
  const newArr = arr.filter(function (item) {
    return item % 2 === 1;
  });
  return newArr;
};

//CHALLENGE 9
const addValues = (arr) => {
  let newNum = arr.reduce(function (acc, item) {
    acc += item;
    return acc;
  }, 0);
  return newNum;
};

//CHALLENGE 10
const countNumberOfElements = (arr) => {
  let count = arr.reduce(function (acc) {
    acc++;
    return acc;
  }, 0);
  return count;
};

//Extra 1
const items = [
  {
    item: "switch",
    purchasePrice: 390,
  },
  {
    item: "nike",
    purchasePrice: 150,
  },
];

const addPurchases = (arr) => {
  let amount = arr.reduce(function (acc, item) {
    acc += item.purchasePrice;
    return acc;
  }, 0);
  return amount;
};

//Extra 2
const sortNumbers = (arr) => {
  arr.sort(function (first, last) {
    return first - last;
  });
  return arr;
};

//Extra 3
const sortBackwards = (arr) => {
  arr.sort(function (first, last) {
    return last - first;
  });
  return arr;
};
