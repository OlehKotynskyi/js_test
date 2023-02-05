console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

//const hamburger = 3;
//const fries = 3;
//const cola = 0;
//const nuggets = 2;


//if (hamburger === 3 && cola || fries === 3 && nuggets) {
//   console.log('Done!')
//}


//let hamburger;
//const fries = NaN;
//const cola = 0;
//const nuggets = 2;


//if (hamburger || cola || fries === 3 || nuggets) {
//   console.log('Done!')
//}

//let hamburger;
//const fries = NaN;
//const cola = 0;
//const nuggets = 2;


//if (hamburger && cola || fries === 3 && nuggets) {
//   console.log('Done!')
//}


// Пишем решение вот тут
//for (let i = 5; i <= 10; i++) {
//   console.log(i);
//}


//stop: for (let i = 20; i >= 10; i--) {
//   if (i === 13) {
//      break stop;
//   }
//   console.log(i);
//}

//for (let i = 2; i <= 10; i +=2) {
//   console.log(i);
//}

//for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//      continue;
//   } else {
//      console.log(i);
//   }
//}

//let result = '';
//let i = 1;

//do {
//   i += 1;
//   if (i % 2 === 0) {
//      continue;
//   }
//   result += i + '\n';
//} while (i < 16);

//console.log(result);

//let j = 2;

//while (j <= 16) {
//   if (j % 2 === 0) {
//      j++;
//      continue;
//   } else {
//      console.log(j);
//   }
//   j++;
//}


//const arrayyOfNumbers = [];

//for (let i = 5; i < 11; i++) {
//   arrayyOfNumbers[i - 5] = i;
//}

//console.log(arrayyOfNumbers);
//return arrayyOfNumbers;

//const arr = [3, 5, 8, 16, 20, 23, 50];
//const result = [];

//for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];

//}

//console.log(result);

//const data = [5, 10, 'Shopping', 20, 'Homework'];
//data.reverse();

//console.log(data);

//const data = [5, 10, 'Shopping', 20, 'Homework'];

//for (let i = 0; i < data.length; i++) {
//   if (typeof (data[i]) === 'number') {
//      data[i] = data[i] * 2;
//   } else if (typeof (data[i]) === 'string') {
//      data[i] = `${data[i]} - done`;
//   }
//}

//console.log(data);

//const data = [5, 10, 'Shopping', 20, 'Homework'];
//const result = [];

//for (let i = 1; i <= data.length; i++) {
//   result[i - 1] = data[data.length - i]
//}

//console.log(result);


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
   for (let j = 0; j < lines - i; j++) {
      result += " ";
   }
   for (let j = 0; j < 2 * i + 1; j++) {
      result += "*";
   }
   result += "\n";
}

console.log(result)