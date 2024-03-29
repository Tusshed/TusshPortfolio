const hamburger = document.querySelector(
  ".header .nav-bar .navlist .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .navlist ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .navlist ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    return (header.style.backgroundColor = "#29323c");
  } else {
    return (header.style.backgroundColor = "transparent");
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
