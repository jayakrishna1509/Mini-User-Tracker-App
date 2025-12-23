// In Chrome Developer Tools Console > Inspect > More tabs > Application > Storages and Cookies
// 1. Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function (element, indexStart = 0) {
    return this.indexOf(element, indexStart) !== -1;
  };
}

// 2. Prototypal Inheritance
class User {
  constructor(name) {
    this.name = name;
  }
}

class Visitor extends User {
  constructor(name, count) {
    super(name);
    this.count = count;
  }
}

// 3. Cookie helpers
function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
  let cName = `${name}=`;
  let decodedCookie = decodeURIComponent(document.cookie);
  let cArray = decodedCookie.split(";");
  for (let c of cArray) {
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cName) === 0) {
      return c.substring(cName.length, c.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// 4. Suffix helper
function getSuffix(n) {
  let j = n % 10,
    k = n % 100;
  if (j === 1 && k !== 11) return n + "st";
  if (j === 2 && k !== 12) return n + "nd";
  if (j === 3 && k !== 13) return n + "rd";
  return n + "th";
}

// 5. WebStorage API App logic
function setupApp() {
  let userName = localStorage.getItem("userName");
  if (!userName) {
    userName = prompt("Enter your name:");
    if (userName) {
      localStorage.setItem("userName", userName);
    }
  }

  let visitCount = parseInt(getCookie("visitCount") || 0, 10) + 1;
  setCookie("visitCount", visitCount, 7); // 7-day cookie

  let visitor = new Visitor(userName, visitCount);

  // Greeting
  let message = document.createElement("h2");
  message.textContent = `Hello ${visitor.name}, this is your ${getSuffix(
    visitor.count
  )} visit!`;
  document.body.appendChild(message);

  // Reset button
  let resetBtn = document.createElement("button");
  resetBtn.innerText = "Reset";
  resetBtn.onclick = function () {
    localStorage.removeItem("userName");
    deleteCookie("visitCount");
    location.reload();
  };
  document.body.appendChild(resetBtn);
}

window.onload = setupApp;
