const array = [
  [1, [5, 4], 10],
  [
    [3, [11, 5]],
    [[8, 22, [2, 6]], 4, 1]
  ]
];
let res = [];
function recursive(value) {
  if (Array.isArray(value)) {
    value.forEach((item) => {
      recursive(item);
    });
  } else {
    res.push(value);
  }
}

recursive(array);

res = res.sort((a, b) => a - b);
console.log(res);
