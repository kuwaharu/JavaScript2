'use strict'
const button = document.getElementById('output');
const fizzbuzzList = document.getElementById('fizzbuzzList');

const listAdd = (addData) => {
  const li = document.createElement('li');
  li.innerHTML = addData;
  fizzbuzzList.appendChild(li);
};

button.addEventListener('click', () => {
  const fizzNum = Number(document.getElementById('fizzNum').value);
  const buzzNum = Number(document.getElementById('buzzNum').value);

  if (
    Number.isInteger(fizzNum) &&
    Number.isInteger(buzzNum) &&
    fizzNum > 0 &&
    buzzNum > 0
  ){
    for (let i = 1; i < 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        listAdd("FizzBuzz" + i);
      } else if (i % fizzNum === 0) {
        listAdd("Fizz" + i);
      } else if (i % buzzNum === 0) {
        listAdd("Buzz" + i);
      }
    }
  } else {
    listAdd('整数値を入力してください');
  }
});