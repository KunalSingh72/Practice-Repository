// DOM = Document Object Model
// object{} that represents the page you see in the web bowser and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document, and structure all the elements in a tree-like representation
// Javascript can access the DOM to dynamically
// Change the content, structure and style of a web page

const userName = "Bro";

const msg = document.getElementById('msg');

msg.textContent += userName === ""? `Guest` : userName;

console.dir(document);