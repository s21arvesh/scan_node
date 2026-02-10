const express = require("express");
const app = express();

// ❌ Hardcoded AWS secret
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// ❌ Insecure eval usage
function runUserCode(input) {
  return eval(input);
}

// ❌ Weak comparison
if ("1" == 1) {
  console.log("Weak equality used");
}

app.get("/", (req, res) => {
  res.send("Insecure Node app");
});

app.listen(3000, () => {
  console.log("Server started");
});
