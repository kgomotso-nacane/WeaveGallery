const galleries = {
    'kinky-curls-gallery': [
        { src: 'src/images/kinky-curls1.jpg', label: 'Long Kinky Curls - R1000' },
        { src: 'src/images/kinky-curls3.jpg', label: 'Short Kinky Curls - R1000' },
        { src: 'src/images/kinky-black.jpeg', label: 'Kinky Curls 3' },
        { src: 'src/images/kinky-gold.jpeg', label: 'Kinky Curls 4' },
        { src: 'src/images/kinky-brugundy.jpeg', label: 'Kinky Curls 5' },
        { src: 'src/images/kinky-brugundy.jpeg', label: 'Kinky Curls 6' },
        { src: 'src/images/kinky-brugundy.jpeg', label: 'Kinky Curls 7' },
        { src: 'src/images/kinky-brugundy.jpeg', label: 'Kinky Curls 8' },
    ],
    'body-waves-gallery': [
        { src: 'src/images/body-waves1.jpg', label: 'Body Wave - From R1250' },
        { src: 'src/images/black-body-wave.jpeg', label: 'Black Body Waves - From R1250' },
    ],
    'deep-wave-gallery': [
        { src: 'src/images/deep-wave1.jpg', label: 'Black Deep Wave - From R1250' },
    ],
    'straight-hair-gallery': [
        { src: 'src/images/16in Black Straight.jpeg', label: '16in Black Straight Hair - R1300' },
        { src: 'src/images/16in Blonde Straight.jpeg', label: '16in Blonde Straight Hair - R1300' },
        { src: 'src/images/16in Burgundy Straight.jpeg', label: '16in Burgundy Straight - R1300' },
        { src: 'src/images/16in Straight Burgundy.jpeg', label: '16in Burgundy Straight - R1300' },
        { src: 'src/images/18in Black Straight.jpeg', label: '18in Black Straight - R1450' },
        { src: 'src/images/20in Burgundy Straight.jpeg', label: '20in Burgundy Straight - R1600' },
        { src: 'src/images/20in Pink Straight.jpeg', label: '20in Pink Straight - R1600' },
        { src: 'src/images/24in Pink Straight.jpeg', label: '24in Pink Straight - R1900' },
        { src: 'src/images/28in Black Straight.jpeg', label: '28in Black Straight - R2300' },
        { src: 'src/images/28in Blonde Straight.jpeg', label: '28in Blonde Straight - R2300' },
    ]
};

const galleryPopup = document.getElementById('gallery-popup');
const galleryImagesContainer = document.querySelector('.gallery-images');
const closeGalleryButton = document.querySelector('.close-gallery');
const viewDetailsButtons = document.querySelectorAll('.view-details');
let currentGallery = [];
let currentIndex = 0;

const displayImage = (index) => {
    galleryImagesContainer.innerHTML = '';

    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = currentGallery[index].src;
    galleryItem.appendChild(img);

    const label = document.createElement('div');
    label.classList.add('label');
    label.innerText = currentGallery[index].label;
    galleryItem.appendChild(label);

    const whatsappButton = document.createElement('a');
    whatsappButton.href = `https://wa.me/+27647064274/?text=I'm%20interested%20in%20ordering%20${encodeURIComponent(currentGallery[index].label)}`;
    whatsappButton.classList.add('order-now');
    whatsappButton.innerText = 'Order\u00A0Now';
    galleryItem.appendChild(whatsappButton);

    galleryImagesContainer.appendChild(galleryItem);
};

// Function to initialize the gallery
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const galleryKey = button.getAttribute('data-gallery');
        currentGallery = galleries[galleryKey];
        currentIndex = 0;

        displayImage(currentIndex);

        galleryPopup.classList.add('show');
    });
});

closeGalleryButton.addEventListener('click', () => {
    galleryPopup.classList.remove('show');
});

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? currentGallery.length - 1 : currentIndex - 1;
    displayImage(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === currentGallery.length - 1) ? 0 : currentIndex + 1;
    displayImage(currentIndex);
});
