# Topic 1 :  CSS

### How to style React Cmponents with CSS
1. External : external file
2. Modules : Hashing
3. Internal : Object based

---
---

# Topic 2 : Props

- Read-Only Properties that are shared between components.
- A parent component can send data to a child components.

< Component key=value >

---

- propTypes = a mechanism that ensures that the passed value is of the correct datatype.
- age: PropTypes.number  

- If any other data types are sent by prop instead of defined, It will not stop program but generate a warning in console

---

- defaultProps = default values for props in case they are not passed from the parent component
- name: "Guest"
- Not working after react17+
---
---

# Topic 3 : Conditional Rendering

- Allows you to control what gets rendered in your application based on certain conditions
- (show, hide or change component)

---
---

# Topic 4 : click event

- An interaction when a user click on a specific element.
- We can respond clicks by passing a callback to the onClick event handler.

# Topic 5 : React Hook & useState

- React hook = Special function that allow function components to use React features without writing class components (React V16.8)
(useState, useEffect, useContext, useReducer, useCallback, and more)... 

- useState() = A React hook that allows the creation of a stateful variable And a setter function to updagte its value in the Virtual DOM.
[name, setName]

---
---

# Topic 6 : onChange

- Event handler used prmarily with form elements
- Ex. <input>, <textarea>, <select>, <radio>
- trigger a function every time the value of the input changes

---
---

# Topix 7 : updater function

- A function as an argument to setState() usually
- ex. setYear(y => y + 1)
- Allow for safe update based on the previous
- Used with multiple state updates andasynchronous function
- Good practice to use updater function
- usually arrow function

## Reasons :

Do not :
[

- useStateuses the Current state to calculate the next state
- set function do not trigger an update.
- React batched together state updates for performance reasons.
- next state becomes the CURRENT state after and update.

    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // update
]

Do :
[
- Takes the PENDING state to calculate NEXT state.
- React puts your updater function in queue (waiting in line).
- During the next render it will call them in the same order.
    
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
]



## Example : 
- Reloading the page on website, doing multiple times but done once.