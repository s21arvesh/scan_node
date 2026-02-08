const express = require("express");
const math = require("./math");

const app = express();
app.use(express.json());

// ❌ ESLint: unused variable
let tempValue = 42;

// ❌ ESLint: no-eval
function dangerous(input) {
  return eval(input);
}

// ❌ Missing JSDoc
function handler(req, res) {
  const q = req.query.q;
  const result = dangerous(q);
  res.json({ result });
}

app.get("/calc", handler);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
