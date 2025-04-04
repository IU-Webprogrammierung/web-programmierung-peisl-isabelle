// Alle Galerie-Items
const galleryItems = document.querySelectorAll('.galerie-item');
const swipeItems = document.querySelectorAll('.swipe-galerie-item');

// Das Lightbox-Modal und Bild
const lightbox = document.createElement('div');
lightbox.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-80', 'flex', 'items-center', 'justify-center', 'z-50', 'hidden');
document.body.appendChild(lightbox);

// Das Bild im Modal
const lightboxImg = document.createElement('img');
lightboxImg.classList.add('max-w-[90%]', 'max-h-[80%]', 'object-contain', 'rounded-lg');
lightbox.appendChild(lightboxImg);

// Schließen-Button
const closeBtn = document.createElement('button');
closeBtn.textContent = '×';
closeBtn.classList.add('absolute', 'top-5', 'right-5', 'text-3xl', 'text-white', 'bg-black', 'bg-opacity-50', 'p-3', 'rounded-full', 'hover:bg-opacity-70', 'cursor-pointer');
lightbox.appendChild(closeBtn);

// Öffnet das Modal bei Klick auf ein Bild
galleryItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const imgSrc = item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.classList.remove('hidden'); // Zeigt die Lightbox
    });
});

// Schließt das Modal
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden'); // Versteckt das Modal
});

// Schließt das Modal, wenn auf das Overlay geklickt wird
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.classList.add('hidden'); // Versteckt das Modal
    }
});

// Holen der Karussell-Elemente
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselContainer = document.querySelector('.carousel-items');

// Index für das aktuelle Bild im Karussell
let currentIndex = 0;

// Funktion zum Weiterschalten
function moveToNext() {
    currentIndex = (currentIndex + 1) % carouselItems.length; // Nächster Index
    updateCarouselPosition();
}

// Funktion zum Zurückschalten
function moveToPrev() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Vorheriger Index
    updateCarouselPosition();
}

// Funktion zum Aktualisieren der Position des Karussells
function updateCarouselPosition() {
    const offset = -currentIndex * 100; // 100vw für jedes Bild
    carouselContainer.style.transform = `translateX(${offset}vw)`;
}

// Event Listener für die Pfeile
document.querySelector('.carousel-next').addEventListener('click', moveToNext);
document.querySelector('.carousel-prev').addEventListener('click', moveToPrev);

