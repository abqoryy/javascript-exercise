// FP means functional programming

const names = ['Muflih', 'Abqori', 'Yasin', 'Rizki', 'Ghazi'];
const namesWith = names.map((name) => `${name}!`);

// instead of using a for loop, 
// we can use the map function to 
// transform each element in the array

console.log(names, namesWith);

// pure functions

function add(value, adder) {
    return value + adder;
}

const result1 = add(0, 1);
const result2 = add(result1, 1);
const result3 = add(result2, 1);
const result4 = add(result3, 1);

console.log(result1, result2, result3, result4);

// high-order functions

// recursive

