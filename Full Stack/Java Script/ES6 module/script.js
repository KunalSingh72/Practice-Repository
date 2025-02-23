// ES6 module = An extrenal file that contains reusable code that can be imported into other Js files.
// Write reusable code for many different apps.
// Can contain variable, classes, functions... and more
// Introduced as part of ECMAScript 2015 update

import {PI, getCircumference, getVolume, getArea} from './MathUtil.js';

console.log(PI);

const circumference = getCircumference(3);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);

