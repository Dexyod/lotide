const assertEqual = require("../assertEqual");
const head = require("../head");
// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([7]), 7);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
