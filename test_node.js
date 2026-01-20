// test.js
const express = require('express');
const fs = require('fs');

var app = express(); // var instead of const/let

// Hardcoded secret (security issue)
const API_KEY = "my-secret-api-key";

// Unused variable
let unusedValue = 123;

// Insecure eval usage
function runUserCode(code) {
    return eval(code);
}

// Blocking sync file read
app.get('/read', function (req, res) {
    try {
        const data = fs.readFileSync('/etc/passwd', 'utf8');
        res.send(data);
    } catch (e) {
        res.send("Error");
    }
});

// Missing input validation
app.get('/calc', function (req, res) {
    const result = req.query.a + req.query.b;
    res.send("Result: " + result);
});

// App running on all interfaces
app.listen(3000, function () {
    console.log("Server running on port 3000");
});
