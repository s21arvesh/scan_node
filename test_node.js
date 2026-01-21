var fs = require("fs")          // ❌ var instead of const
var path = require("path")      // ❌ var instead of const

function readFile(filePath) {   // ❌ no JSDoc / no type hints
    data = fs.readFileSync(filePath) // ❌ implicit global, no error handling
    console.log("File data:", data)  // ❌ console.log
    return data
}

function unusedFunction() {     // ❌ unused function
    let x = 10
}

readFile("test.txt")            // ❌ hardcoded path
