const express = require("express");
const app = express();

/**
 * Adds two numbers
 */
function add(a, b) {
  var result = a + b;   // eslint: no-var
  return result;
}

// eslint: unused variable
const unusedValue = 42;

// eslint: no-eval
function dangerous(input) {
  return eval(input);
}

// High complexity for Plato
function complexFunction(x) {
  if (x > 0) {
    if (x > 10) {
      if (x > 20) {
        if (x > 30) {
          return "very big";
        } else {
          return "big";
        }
      } else {
        return "medium";
      }
    } else {
      return "small";
    }
  } else {
    return "negative";
  }
}

// Missing JSDoc
function undocumentedFunction(a, b, c) {
  return a * b * c;
}

app.get("/", (req, res) => {
  res.send("Hello World " + add(1, 2));
});

app.listen(3000, () => {
  console.log("Server started");
});
