const menuButton = document.querySelector("[data-mobile-menu-toggle]");
const menu = document.querySelector("#mobile-menu");


menuButton.addEventListener("click", () => {
  menu.classList.toggle("is-open");

  const expanded = menu.classList.contains("is-open");

  menuButton.setAttribute(
    "aria-expanded",
    expanded
  );
});
