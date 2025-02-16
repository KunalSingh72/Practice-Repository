// Sort() = Method used to sort elements in an in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

// let numbers = [1, 10, 3, 5, 7, 2, 6, 2];

// numbers.sort();

// console.log(numbers); //lexicographic

// numbers.sort((a, b) => a - b);

// console.log(numbers); // sorted by -, 0, + return value

// -------------------------------------

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5}
]

people.sort((a,b) => b.age - a.age); // reverse

console.log(people);

// For string
people.sort((a,b) => a.name.localeCompare(b.name)); 

