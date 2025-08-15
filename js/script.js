function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector(".me img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/eu.jpeg");
  } else {
    img.setAttribute("src", "./img/eu.jpeg");
  }
}
