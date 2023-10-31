'use strict';

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

function diff(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}

console.log(diff(2, 2));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3));

function divide(a, b) {
  if (b === 0) {
    console.log('Деление на ноль недопустимо');
  } else {
    return a / b;
  }
}

console.log(divide(5, 6));
