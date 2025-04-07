document.addEventListener("scroll", function () {
    const sun = document.querySelector(".sun");
    const scrollY = window.scrollY;

    const rotation = scrollY / 8;

    sun.style.transform = `rotate(${rotation}deg)`;
});
