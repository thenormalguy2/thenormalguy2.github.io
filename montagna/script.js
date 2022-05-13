// window.addEventListener("beforeunload", function() {
//   "(prefers-color-scheme: dark)" = false;
// }, false);

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

const btn = document.querySelector(".theme-toggle-button");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light");
  } else {
    document.body.classList.toggle("dark");
  }
});


  