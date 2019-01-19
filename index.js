console.log('This thing is working');

let sum = 0;
const add = (num1, num2) => {
  sum = num1 + num2;
  console.log('matt was here');
  console.log(sum);
  return sum;
};

add(3, 4);
