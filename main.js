// const iconMenuClick = document.querySelector(".header-menu-mobile-icon");
// iconMenuClick.addEventListener("click", () => {
//     const isActive = document.querySelector(".header-menu-mobile-nav.active");
//     if (isActive) {
//         isActive.classList.remove("active");
//         const isMenu = document.querySelector(".bx-x-circle");
//         isMenu.classList.replace("bx-x-circle", "bx-menu");
//     } else {
//         const iconMenu = document.querySelector(".header-menu-mobile-nav");
//         iconMenu.classList.add("active");
//         const isMenu = document.querySelector(".bx-menu");
//         isMenu.classList.replace("bx-menu", "bx-x-circle");
//     }
// });
const iconMenuClick = document.querySelector(".header-menu-mobile-icon");
const menuNav = document.querySelector(".header-menu-mobile-nav");
const menuIcon = document.querySelector(".header-menu-mobile-icon");

iconMenuClick.addEventListener("click", () => {
    menuNav.classList.toggle("active");
    menuIcon.classList.toggle("bx-x-circle");
    menuIcon.classList.toggle("bx-menu");
});
