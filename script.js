//1

const user = ["Mike", "Nikola", "Tom"];
console.log(user[2]);
user[1] = "Alex";
user.splice(1, 2);
console.log(user);
console.log(user.length);


//2

const a = [5, 3, -4, 25, 32, -16, 6];
const b = [21, -30, 9, 5, 12, -19, 5, 25];
let message = "";

function maxArray() {
  if (a.length > b.length) {
    message = "a > b";
  } else if (a.length < b.length) {
    message = "a < b";
  } else {
    message = "a == b";
  }

  return console.log(message);
}

maxArray(a, b);


//3

let phrase = "I am learning JavaScript right now";
const arr = phrase.split(" ");
console.log(arr);


//4

const c = [5, 3, 8, 5, 3, 2, 1, 2];
const d = [];

c.forEach((item) => {
  if (d.includes(item)) {
    return;
  } else {
    d.push(item);
  }
});
console.log(d);


//5

const users = [
  { id: 1, age: 17 },
  { id: 2, age: 18 },
  { id: 3, age: 19 },
  { id: 4, age: 21 },
  { id: 5, age: 17 },
  { id: 6, age: 20 },
  { id: 7, age: 25 },
];

function selectionAge() {
 const userFilter = users.filter((user) => user.age > 18 && user.age < 21);

  for (let user of userFilter) {
    console.log(user.id);
  }
}

selectionAge();
