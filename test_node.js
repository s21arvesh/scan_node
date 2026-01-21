/* eslint-env node */

// ❌ ERROR: no-undef
console.log(notDefinedVariable);

// ❌ ERROR: no-unused-vars
function brokenFunction(unusedParam) {
  return 42;
}

// ❌ ERROR: no-unreachable
function unreachable() {
  return;
  console.log("This will never run");
}

// ❌ ERROR: no-constant-condition
while (true) {
  break;
}
