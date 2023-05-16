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
// Menu bar - mobile
const iconMenuClick = document.querySelector(".header-menu-mobile-icon");
const menuNav = document.querySelector(".header-menu-mobile-nav");
const menuIcon = document.querySelector(".header-menu-mobile-icon");

iconMenuClick.addEventListener("click", () => {
    menuNav.classList.toggle("active");
    menuIcon.classList.toggle("bx-x-circle");
    menuIcon.classList.toggle("bx-menu");
});
// Dot - testimonial
// const dots = document.querySelectorAll(".testimonial-dot");
// console.log(dots);
// dots.forEach((dot) => {
//     dot.addEventListener("click", () => {
//         document
//             .querySelector(".testimonial-dot.active")
//             .classList.remove("active");
//         dot.classList.toggle("active");
//     });
// });
const dots = document.querySelectorAll(".testimonial-dot");

dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        const activeDot = document.querySelector(".testimonial-dot.active");
        activeDot.classList.remove("active");
        dot.classList.add("active");
    });
});
