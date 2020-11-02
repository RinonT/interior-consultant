const hideMenu = document.querySelector(".page_navigation_hide-menu-btn");
const menu = document.querySelector(".page_navigation");
const showMenu = document.querySelector(".show_menu");

hideMenu.addEventListener("click", () => {
    menu.classList.add("hideMenu");
})

showMenu.addEventListener("click", () => {
    menu.classList.add("display_menu")
    menu.classList.remove("hideMenu");
})