
// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".section");
//     let currentSection = 0;

//     document.body.addEventListener("mouseenter", () => {
//         document.body.style.cursor = "grab";
//     });

//     document.body.addEventListener("mouseleave", () => {
//         document.body.style.cursor = "default";
//     });

//     document.body.addEventListener("wheel", (event) => {
//         event.preventDefault();

//         if (event.deltaY > 0) {
//             // Scrolling down
//             currentSection = Math.min(currentSection + 1, sections.length - 1);
//         } else {
//             // Scrolling up
//             currentSection = Math.max(currentSection - 1, 0);
//         }

//         sections[currentSection].scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//         });
//     });
// });

