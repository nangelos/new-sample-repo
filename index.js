console.log('This thing is working');

let total = 0;
const add = (num1, num2) => {
  total = num1 + num2;
  console.log(total);
  return total;
};

add(3, 4);
