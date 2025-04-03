// 1. Создать функцию, которая вычисляет разность двух переданных чисел.

// Способ 1: Вывод результата внутри функции
function difference1(a, b) {
    console.log(`Разность: ${a - b}`);
}

difference1(10, 5);

// Способ 2: Возвращение результата, вывод в основной программе
function difference2(a, b) {
    return a - b;
}

let result = difference2(10, 5);
console.log(`Разность: ${result}`);

// 2. Создать функцию, которая принимает возраст и выводит диалоговое окно
function greet(age) {
    if (age < 18) {
        console.log("Привет, малыш!");
    } else {
        console.log("Здравствуйте, юноша!");
    }
}

greet(10);
greet(20);

// 3. Создать функцию, возвращающую наибольшее из трех чисел.
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log(maxOfThree(3, 7, 5));

// 4. Что выведет на экран следующий код? Объясните почему так
let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}
f();
console.log(variable);

// Вывод:
// "Локальная переменная"
// "Глобальная переменная"
// Локальная переменная внутри функции скрывает глобальную переменную.

// 5. Даны действительные числа x, y и z. Создать функцию, которая возвращает значение u:
function calculateU(x, y, z) {
    return (Math.max(x, y) + Math.max(x + y, z)) / Math.pow(Math.max(0.5, x + z), 2);
}

console.log(calculateU(2, 3, 4));

// 6. Функция для вычисления периметра n-угольника
function polygonPerimeter(...coordinates) {
    let perimeter = 0;
    let n = coordinates.length / 2;
    for (let i = 0; i < n; i++) {
        let x1 = coordinates[2 * i], y1 = coordinates[2 * i + 1];
        let x2 = coordinates[2 * ((i + 1) % n)], y2 = coordinates[2 * ((i + 1) % n) + 1];
        perimeter += Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    return perimeter;
}

console.log(polygonPerimeter(0, 0, 4, 0, 4, 3, 0, 3));

// 7. Рекурсивная функция для вычисления N-го члена последовательности
function sequence(n, prevSum = 1) {
    if (n === 1) return 1;
    return Math.sin(sequence(n - 1, prevSum) + prevSum);
}

console.log(sequence(5));
