const assertEqual = function(actual, expected) {
  const emoji = require('node-emoji');
  const go = emoji.get("white_check_mark");
  const nicht = emoji.get("question");

  if (actual === expected) {
    console.log(`${go}${go}${go} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${nicht}${nicht}${nicht} Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
);