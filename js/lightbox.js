const galleryItems = document.querySelectorAll('.galerie-item');
const swipeItems = document.querySelectorAll('.swipe-galerie-item');

const lightbox = document.createElement('div');
lightbox.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-80', 'flex', 'items-center', 'justify-center', 'z-50', 'hidden');
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightboxImg.classList.add('max-w-[90%]', 'max-h-[80%]', 'object-contain', 'rounded-lg');
lightbox.appendChild(lightboxImg);

const closeBtn = document.createElement('button');
closeBtn.textContent = '×';
closeBtn.classList.add('absolute', 'top-5', 'right-5', 'text-3xl', 'text-white', 'bg-black', 'bg-opacity-50', 'p-3', 'rounded-full', 'hover:bg-opacity-70', 'cursor-pointer');
lightbox.appendChild(closeBtn);

galleryItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const imgSrc = item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.classList.add('hidden');
    }
});

// Carousel für Mobile Screens
const carouselItems = document.querySelectorAll('.tattoo-carousel-item');
const carouselContainer = document.querySelector('.tattoo-carousel-items');

let currentIndex = 0;

function moveToNext() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarouselPosition();
}

function moveToPrev() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}vw)`;
}

document.querySelector('.tattoo-carousel-next').addEventListener('click', moveToNext);
document.querySelector('.tattoo-carousel-prev').addEventListener('click', moveToPrev);

