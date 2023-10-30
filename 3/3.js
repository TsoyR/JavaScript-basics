'use strict';

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const numberOne = Number(prompt('Введите первое число'));
const numberTwo = Number(prompt('Введите второе число'));
const numberThree = Number(prompt('Введите третье число'));

let numberMax;

function numMax(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    numberMax = n1;
  } else if (n2 > n1 && n2 > n3) {
    numberMax = n2;
  } else {
    numberMax = n3;
  }
  console.log(
    `Максимальное значение среди чисел ${n1}, ${n2}, ${n3} равно ${numberMax}.`
  );
}

numMax(numberOne, numberTwo, numberThree);
