const galleryItems = document.querySelectorAll('.galerie-item');
const lightboxOverlay = document.createElement('div');
lightboxOverlay.classList.add('lightbox-overlay');
document.body.appendChild(lightboxOverlay);

const lightboxImg = document.createElement('img');
lightboxOverlay.appendChild(lightboxImg);

const closeBtn = document.createElement('button');
closeBtn.textContent = '×';
closeBtn.classList.add('close-btn');
lightboxOverlay.appendChild(closeBtn);

galleryItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const imgSrc = item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightboxOverlay.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    lightboxOverlay.classList.remove('active');
});

lightboxOverlay.addEventListener('click', (event) => {
    if (event.target === lightboxOverlay) {
        lightboxOverlay.classList.remove('active');
    }
});
