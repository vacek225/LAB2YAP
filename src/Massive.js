//1. Создать массив arr.
let arr = [10, 20, 30];
console.log(arr[2]);
console.log(arr.length);
arr.splice(1, 1);
arr.forEach(item => console.log(item));

// 2. Создать два массива: countries – с названием стран, и population
let countries = ["Россия", "США", "Китай"];
let population = [144, 331, 1441];

// Вывод с использованием цикла for с счетчиком
function printCountriesFor() {
    for (let i = 0; i < countries.length; i++) {
        console.log(`${countries[i]}: ${population[i]} млн`);
    }
}
printCountriesFor();

// Вывод с использованием цикла for in
function printCountriesForIn() {
    for (let index in countries) {
        console.log(`${countries[index]}: ${population[index]} млн`);
    }
}
printCountriesForIn();

//3.Дополните код:
let months = ["January", "February", "March", "April", "May", "June"];
let len = months.pop();
console.log(months.join(" "));
console.log(len);

//4.Дополните код:
let a = [1, 2, 3, 4, 5, 6, 7];
let t = a.slice(0, 3);
console.log(t);

//5.Дополните код:
let d = a.splice(1, 3);
console.log(a);
console.log(d);

//6.Дан массив из чисел: 1, 2, 3, 4, 5. Распечатать массив в обратном порядке (5, 4, 3, 2,1), используя функцию javaScript reverse()
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

//7.Дан массив из элементов: ‘c’, 5, 2, ‘b’, 3, 1, 4, ‘a’. Распечатать массив, предварительноотсортировав его по возрастанию (1, 2, 3, 4, 5, a, b, c).
let mixedArray = ['c', 5, 2, 'b', 3, 1, 4, 'a'];
mixedArray.sort((a, b) => a.toString().localeCompare(b.toString(), undefined, { numeric: true }));
console.log(mixedArray);

//8.Дан массив из элементов: 1, 2, 3, 4, 5. Распечатать исходный массив поэлементно сразделителем «+» (метод javaScript join – 1+2+3+4+5).
let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.join("+")); // "1+2+3+4+5"

