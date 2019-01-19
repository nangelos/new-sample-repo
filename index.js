console.log('This thing is working');

let sum = 0;
const add = (num1, num2) => {
  sum = num1 + num2;
  console.log('matt was here again');
  console.log(sum);
  return sum;
};

add(3, 4);
add(3, 10000000000);