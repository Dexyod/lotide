const assertObjectsEqual = require("../assertObjectsEqual");

//TEST CODE
const object1 = { a: 1, b: 2 };
const object2 = { a: 1, b: 2 };
assertObjectsEqual(object1, object2);

const object3 = { c: [2, 4], d: [5, 6] };
const object4 = { c: [2, 4, 6], d: [5, 6] };
assertObjectsEqual(object3, object4);
