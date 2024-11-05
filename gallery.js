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
        { src: 'src/images/kinky-brugundy.jpeg', label: 'Kinky Curls 8' },
    ],
    'body-waves-gallery': [
        { src: 'src/images/body-waves1.jpg', label: 'Body Wave - From R1250' },
        { src: 'src/images/black-body-wave.jpeg', label: 'Black Body Waves - From R1250' },
        // { src: 'src/images/body-waves3.jpg', label: 'Body Waves 3' },
        // { src: 'src/images/body-waves4.jpg', label: 'Body Waves 4' },
        // { src: 'src/images/body-waves5.jpg', label: 'Body Waves 5' },
        // { src: 'src/images/body-waves6.jpg', label: 'Body Waves 6' },
        // { src: 'src/images/body-waves7.jpg', label: 'Body Waves 7' },
        // { src: 'src/images/body-waves8.jpg', label: 'Body Waves 8' },
    ],
    'deep-wave-gallery': [
        { src: 'src/images/deep-wave1.jpg', label: 'Black Deep Wave - From R1250' },
        // { src: 'src/images/deep-wave2.jpg', label: 'Deep Wave 2' },
        // { src: 'src/images/deep-wave3.jpg', label: 'Deep Wave 3' },
        // { src: 'src/images/deep-wave4.jpg', label: 'Deep Wave 4' },
        // { src: 'src/images/deep-wave5.jpg', label: 'Deep Wave 5' },
        // { src: 'src/images/deep-wave6.jpg', label: 'Deep Wave 6' },
        // { src: 'src/images/deep-wave7.jpg', label: 'Deep Wave 7' },
        // { src: 'src/images/deep-wave8.jpg', label: 'Deep Wave 8' },
    ],
    'straight-hair-gallery': [
        { src: 'src/images/frinde-straight.jpg', label: 'Frinde Straight - From R1300' },
        { src: 'src/images/straight-blonde.jpeg', label: 'Straight Blonde - From R1700' },
        { src: 'src/images/straight-brown.jpeg', label: 'Straight Brown - From R1700' },
        { src: 'src/images/straight-pink.jpeg', label: 'Straight Pink -From R1700' },
        // { src: 'src/images/straight-hair5.jpg', label: 'Straight Hair 5' },
        // { src: 'src/images/straight-hair6.jpg', label: 'Straight Hair 6' },
        // { src: 'src/images/straight-hair7.jpg', label: 'Straight Hair 7' },
        // { src: 'src/images/straight-hair8.jpg', label: 'Straight Hair 8' },
    ]
};

// const viewDetailsButtons = document.querySelectorAll('.view-details');
// const galleryPopup = document.getElementById('gallery-popup');
// const galleryImagesContainer = document.querySelector('.gallery-images');
// const closeGalleryButton = document.querySelector('.close-gallery');

// viewDetailsButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const galleryKey = button.getAttribute('data-gallery');
//         const galleryImages = galleries[galleryKey];

//         galleryImagesContainer.innerHTML = '';

//         galleryImages.forEach(item => {
//             const galleryItem = document.createElement('div');
//             galleryItem.classList.add('gallery-item');

//             const img = document.createElement('img');
//             img.src = item.src;
//             galleryItem.appendChild(img);

//             const label = document.createElement('div');
//             label.classList.add('label');
//             label.innerText = item.label;
//             galleryItem.appendChild(label);

//             const whatsappButton = document.createElement('a');
//             whatsappButton.href = `https://wa.me/+27647064274/?text=I'm%20interested%20in%20ordering%20${encodeURIComponent(item.label)}`;
//             whatsappButton.classList.add('order-now');
//             whatsappButton.innerText = 'Order Now';
//             galleryItem.appendChild(whatsappButton);

//             galleryImagesContainer.appendChild(galleryItem);
//         });

//         galleryPopup.classList.add('show');
//     });
// });

// closeGalleryButton.addEventListener('click', () => {
//     galleryPopup.classList.remove('show');
// });


let currentGallery = [];
let currentIndex = 0;

const galleryPopup = document.getElementById('gallery-popup');
const galleryImagesContainer = document.querySelector('.gallery-images');
const closeGalleryButton = document.querySelector('.close-gallery');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const viewDetailsButtons = document.querySelectorAll('.view-details');

// Add this inside the galleryPopup event listener to set up the slider
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const galleryKey = button.getAttribute('data-gallery');
        const galleryImages = galleries[galleryKey];

        let currentIndex = 0;

        galleryImagesContainer.innerHTML = '';

        const displayImage = (index) => {
            galleryImagesContainer.innerHTML = ''; // Clear existing content

            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            const img = document.createElement('img');
            img.src = galleryImages[index].src;
            galleryItem.appendChild(img);

            const label = document.createElement('div');
            label.classList.add('label');
            label.innerText = galleryImages[index].label;
            galleryItem.appendChild(label);

            const whatsappButton = document.createElement('a');
            whatsappButton.href = `https://wa.me/+27647064274/?text=I'm%20interested%20in%20ordering%20${encodeURIComponent(galleryImages[index].label)}`;
            whatsappButton.classList.add('order-now');
            whatsappButton.innerText = 'Order Now';
            galleryItem.appendChild(whatsappButton);

            galleryImagesContainer.appendChild(galleryItem);
        };

        // Display initial image
        displayImage(currentIndex);

        // Left arrow
        const leftArrow = document.createElement('button');
        leftArrow.classList.add('arrow', 'left-arrow');
        leftArrow.innerHTML = '&larr;';
        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
            displayImage(currentIndex);
        });

        // Right arrow
        const rightArrow = document.createElement('button');
        rightArrow.classList.add('arrow', 'right-arrow');
        rightArrow.innerHTML = '&rarr;';
        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
            displayImage(currentIndex);
        });

        galleryPopup.appendChild(leftArrow);
        galleryPopup.appendChild(rightArrow);

        galleryPopup.classList.add('show');
    });
});


closeGalleryButton.addEventListener('click', () => {
    galleryPopup.classList.remove('show');
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGalleryImage();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < currentGallery.length - 1) {
        currentIndex++;
        updateGalleryImage();
    }
});

function updateGalleryImage() {
    galleryImagesContainer.innerHTML = ''; // Clear previous image

    const currentImage = currentGallery[currentIndex];
    
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = currentImage.src;
    galleryItem.appendChild(img);

    const label = document.createElement('div');
    label.classList.add('label');
    label.innerText = currentImage.label;
    galleryItem.appendChild(label);

    const whatsappButton = document.createElement('a');
    whatsappButton.href = `https://wa.me/+27647064274/?text=I'm%20interested%20in%20ordering%20${encodeURIComponent(currentImage.label)}`;
    whatsappButton.classList.add('order-now');
    whatsappButton.innerText = 'Order Now';
    galleryItem.appendChild(whatsappButton);

    galleryImagesContainer.appendChild(galleryItem);
}
