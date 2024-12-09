/*Задание 1
Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".*/

const nameEmployee = ["Мария", "Алексей", "Елена", "Дмитрий"];
const age = [22, 31, 45, 53];
let nameAge = [];

function ageDeclination(age) {
  if (age % 10 === 1 && age % 100 !== 11) return "год";
  if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100))
    return "года";
  return "лет";
}

for (let i = 0; i < nameEmployee.length; i++) {
  nameAge.push(nameEmployee[i] + ": " + age[i] + " " + ageDeclination(age[i]));
}

console.log(nameAge);

/*Задание 2
Используя методы массива, получите из этого массива новый массив, в котором элементы идут в обратной последовательности.*/
let normalRange = [1, 2, 3, 4, 5, 6];
let reverseRange = normalRange.reverse();
console.log(reverseRange);

/*
Задание 3
Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия". Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль.*/
let countries = [];
countries.push("Франция", "Германия", "Италия");
let lastCountry = countries.pop();
countries.unshift(lastCountry);
console.log(countries);

/*
Задание 4
Создайте массив с числами 1, 2, 3, 4, 5. Используя цикл for:

Умножьте каждый элемент на 2 и выведите результат в консоль.
Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
Выведите оба массива (исходный и новый) в консоль.*/

let myNumbers = [];

for (i = 1; i < 6; i++) {
  myNumbers.push(i * 2);
}

console.log(myNumbers);

let mySquaredNumbers = [];
for (i = 0; i < myNumbers.length; i++) {
  mySquaredNumbers.push(myNumbers[i] * myNumbers[i]);
}

console.log(
  "myNumbers: " + myNumbers + "\nmySquaredNumbers: " + mySquaredNumbers
);
