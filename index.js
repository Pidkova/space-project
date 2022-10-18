// when "click" on burger button open the menu
// if the menu is opened, when click close it

const navBar = document.querySelector(".navigation-bar");
const navToggle = document.querySelector(".mobile-nav-toggle");
const burgerIcon = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = navBar.getAttribute("data-visibility");
  if (visibility === "false") {
    navBar.setAttribute("data-visibility", true);
    navToggle.setAttribute("area-expanded", true);
  } else {
    navBar.setAttribute("data-visibility", false);
    navToggle.setAttribute("area-expanded", false);
  }
  console.log(visibility);
  console.log(navToggle.getAttribute("area-expanded"));
});
