const $buttonsNavbar = document.querySelectorAll(".button-nav");

document.addEventListener("DOMContentLoaded", () => {
    const activeIndex = sessionStorage.getItem("activeButtonIndex");
    if (activeIndex) {
        $buttonsNavbar[activeIndex].classList.add("active");
    }
});

$buttonsNavbar.forEach((button, index) => {
    button.addEventListener("click", () => {
        $buttonsNavbar.forEach(activeButton => {
            activeButton.classList.remove("active");
        });
        button.classList.add("active");
        sessionStorage.setItem("activeButtonIndex", index);
    });
});