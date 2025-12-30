const btn = document.querySelector("#toggle");
const html = document.querySelector("html");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);
