// window.addEventListener("beforeunload", function() {
//   "(prefers-color-scheme: dark)" = false;
// }, false);

// document.querySelector('.theme-toggle-button').addEventListener('click', () => {
//     document.body.classList.toggle('dark')
// })

// document.querySelector('.theme-toggle-button').addEventListener('click', () => {
//   document.body.classList.toggle('light')
// })

// const btn = document.querySelector(".theme-toggle-button");
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


// btn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     document.body.classList.toggle("light");
//   } else {
//     document.body.classList.toggle("dark");
//   }
// });

// const chk = document.getElementById('chk');


if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

  const chk = document.getElementById('chk');

  chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
  });

  // floating_btn.addEventListener('click', () => {
  //     social_panel_container.classList.toggle('light')
  // });

  // close_btn.addEventListener('click', () => {
  //   social_panel_container.classList.remove('light')
  // });

} else {

  const chk = document.getElementById('chk');

  chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });

  // floating_btn.addEventListener('click', () => {
  //     social_panel_container.classList.toggle('dark')
  // });

  // close_btn.addEventListener('click', () => {
  //   social_panel_container.classList.remove('dark')
  // });

}

