// JSON = (JS Object notation) data-interchange format
// Used for exchanging data between server and a web application
// JSON files {Key:value} OR [value1, value2, value3] OR [{}, {}, {}]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to JS object

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age":30, "isEmployeed":true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age":30, "isEmployeed":true},
                    {"name": "Patrick", "age":34, "isEmployeed":false},
                    {"name": "Squidward", "age":50, "isEmployeed":true},
                    {"name": "Sandy", "age":27, "isEmployeed":true}]`;


// const jsonString1 = JSON.stringify(names);
// const jsonString2 = JSON.stringify(person);
// const jsonString3 = JSON.stringify(people);

// console.log(jsonString1);
// console.log(jsonString2);
// console.log(jsonString3);

// const parsedData = JSON.parse(jsonNames); //string to object
// console.log(parsedData); 


// fetch("person.json")
//     .then(response => response.json())
//     .then(value => console.log(value)); 


fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployeed))) 
    .catch(error => console.error(error)); 