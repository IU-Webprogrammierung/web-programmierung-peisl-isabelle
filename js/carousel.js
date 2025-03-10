document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    showItem(currentIndex);

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
            showItem(currentIndex);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
            showItem(currentIndex);
        });
    }
});
