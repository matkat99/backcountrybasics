window.addEventListener("scroll", (e) => {
  // console.log(e);
  if (window.scrollY > 89) {
    document.querySelector("header").classList.add("scroll");
  } else {
    document.querySelector("header").classList.remove("scroll");
  }
});
