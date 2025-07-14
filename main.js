window.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const header = document.getElementById("main-header");

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            header.classList.add("header-hidden");
        } else if (currentScrollY < lastScrollY) {
            header.classList.remove("header-hidden");
        }

        lastScrollY = currentScrollY;
    });
});
