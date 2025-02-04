console.log("Hello dunia!");

console.log("Aman Kunar", "my hobby is playing football!");

const calc = 45 * 2 - 10;
console.log(calc);

console.log(new Date().getFullYear());

const firstName = "Aman";
const lastName = "Yadav";

console.log(firstName + " " + lastName);

let age = 22;

console.log(age);
age = 23;
console.log(age);

console.log(Math.sqrt(12, 2));

console.log(100 / 0);
const type = true;
console.log(typeof type);

const myAge = 22;

console.log(myAge > 18);

// --Question Type(2)---

let Name = "Aman";
console.log(Name);

const PI = 3.14;
console.log(PI);

const isMarried = null;
console.log(typeof isMarried);

const newAge = "22";

console.log(typeof newAge);

let isAman;
console.log(typeof isAman);

const hisName = undefined;
console.log(typeof hisName);

const fruits = ["grapes", "peaches", "apple", "mango", "banan", "berry"];
fruits[0] = "litchi";
// fruits = ["apple", "banan", "berry"]; // It throws an error that unsignment to const variable is not permitted
console.log(fruits);

// --Question Type(3)---

for (i = 0; i <= 50; i++) {
  console.log(i);
}

sum = 0;
num = 1;
while (num <= 10) {
  sum = sum + num;
  num = num + 1;
}
console.log(sum);

let hey = "Javascript";
for (const element of hey) {
  console.log(element);
}

fruits.forEach((element) => {
  console.log(element);
});

for (j = 0; j <= 20; j++) {
  if (j % 2 == 0) {
    continue;
  }
  console.log(j);
}

let k = 5;

do {
  console.log(k);
  k--;
} while (k >= 1);

const number = 5;
m = 1;
for (n = 2; n <= number; n++) {
  m = m * n;
}
console.log(m);

// couldnt able to solve this question - basically pattern kindff problem it is

for (c = 1; c <= 3; c++) {
  for (d = 1; d <= 3; d++) {
    console.log(d);
  }
}

console.log("----");

let newNumber = [1, 2, 3, 4, 5];

for (k = newNumber.length - 1; k >= 0; k--) {
  console.log(newNumber[k]);
}

let f = 1;
while (f <= 100) {
  if (f % 5 == 0) {
    console.log(f);
  }
  f++;
}

const person = {
  name: "Aman",
  age: 22,
  isStudent: true,
  isEmployed: false,
  address: "Delhi",
};

for (const value in person) {
  console.log(value, person[value]);
}

// ---- chapter(4)----

const movies = [
  "titanic",
  "Tiranga",
  "Forest Gump",
  "Law of pursuit",
  "shawshank redemeption",
  "social dillema",
];

console.log(movies);

const second = movies[1];
console.log(second);

movies.unshift("bhaag ricky bhaag", "new");
console.log(movies);

movies.pop();
console.log(movies);

console.log(movies.slice(0, 3));

console.log(movies.indexOf("Tiranga"));

console.log(movies.includes("Tiranga"));

console.log(movies.concat(fruits));

const arr = [5, 2, 9, 1];
arr.sort((a, b) => a - b);
console.log(arr);

let arr1 = [2, 3, 4, 5];
let arr2 = [...arr1];
arr2[0] = 5;
console.log(arr1);
console.log(arr2);

// ---chapter(5)---

function oddEven(n) {
  if (n % 2 == 0) {
    console.log(n + " is a even number");
  } else {
    console.log(n + " is an odd number");
  }
}

oddEven(1);

function areaOfCircle(r) {
  let area = 3.14 * r * r;
  console.log("Area of circle is " + area);
}

areaOfCircle(7);

function sumOfArr(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log("sum of the given array is ", sum);
}
const lastArr = [2, 2, 6, 2];
sumOfArr(lastArr);

let newNameIs = "aman";

function starts(n) {
  const doesStart = n.startsWith("hey");
  if (doesStart) {
    console.log("it starts with that ");
  } else {
    console.log("It does not start with that");
  }
}

starts(" how are you ?");

function max(num1, num2) {
  if (num1 == num2) {
    console.log(`${num1} is equals to ${num2}`);
  } else if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`);
  } else {
    console.log(`${num2} is bigger than ${num1}`);
  }
}

max(40, 20);

function fact(n) {
  let result = 1;
  for (i = 2; i <= n; i++) {
    result = result * i;
  }
  console.log("Factorial of " + n + " is " + result);
}

fact(21);

function reverse(something) {
  let reversedString = "";
  for (j = something.length - 1; j >= 0; j--) {
    reversedString = reversedString + something[j];
  }
  console.log(reversedString);
}
// reverse("Khushi Tiwari");
reverse("Aman Kumar");

const arrnew = [34, 12, 2323232, 65, 76, 32, , 232, 122];

let maxIndex = -1;

for (p = 0; p <= arrnew.length - 1; p++) {
  if (arrnew[p] > maxIndex) {
    maxIndex = arrnew[p];
  }
}
console.log(maxIndex);

function greet() {
  console.log("Hello, World!");
}
greet();
greet();
greet();
greet();

function kebab(string) {
  let newString = string.replaceAll(" ", "-");
  console.log(newString);
}

kebab("mera naam aman kumar hai");
