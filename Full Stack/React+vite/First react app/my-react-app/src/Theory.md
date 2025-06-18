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
- Ex. < input >, < textarea >, < select >, < radio >
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

---
---

# Topic 8 : useEffect() function

- React hook that tells react do some code when (pick one) : 
    - This Component re-renders
    - This Component mounts
    - This state of a value

## useEffect(function, [dependencies])

1. useEffect(() => {}) ---- Runs after every re-render
2. useEffect(() => {}, []) ---- Runs only on mount
3. useEffect(() => {}, [value]) ---- Runs on mount + value change

## Uses 
1. Event Listener
2. Dom Manipulation
3. Subscriptions (real-time updates)
4. Fetching data from an API
5. Clean up when a component unmounts

---
---

# Topic 9 : useContext() function

- React Hook that allows you to share values between multiple levels of components without passing props through each level

## Provider Component
1. import {createContext} from 'react';
2. export const MyContext = createContext();
3. <MyContext.Provider value={value}>
        <child />
        </MyContext.Provider>

## Consumer Components
1. import React, {useContext} from 'react';
    import {MyContext} from './ComponentA';
2. const value = useContext(MyContext);

---
---

# Topic 10 : useRef() function 

useState() = Re-renders the component when the state value changes.

useRef() = "use Refernce" does not cause re-renders when its value changes.

- When you want a component to "remember" some information, but you don't want that information to trigger new renders.

1. Accessing/interacting with DOM elements.
2. Handling Focus, Animation and Transitions.
3. Managing Timers and intervals.
