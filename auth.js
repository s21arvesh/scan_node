// ❌ Hardcoded GitHub token (fake)
const GITHUB_TOKEN = "ghp_1234567890abcdef1234567890abcdef";

function login(user, pass) {
  if (user == "admin" && pass == "admin") {
    return true;
  }
  return false;
}

module.exports = { login };
