const galleries = {
    'kinky-curls-gallery': [
        { src: 'src/images/kinky-curls1.jpg', label: 'Long Kinky Curls - R1000' },
        { src: 'src/images/kinky-curls3.jpg', label: 'Short Kinky Curls - R1000' },
        // { src: 'src/images/kinky-curls3.jpg', label: 'Kinky Curls 3' },
        // { src: 'src/images/kinky-curls4.jpg', label: 'Kinky Curls 4' },
        // { src: 'src/images/kinky-curls5.jpg', label: 'Kinky Curls 5' },
        // { src: 'src/images/kinky-curls6.jpg', label: 'Kinky Curls 6' },
        // { src: 'src/images/kinky-curls7.jpg', label: 'Kinky Curls 7' },
        // { src: 'src/images/kinky-curls8.jpg', label: 'Kinky Curls 8' },
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

const viewDetailsButtons = document.querySelectorAll('.view-details');
const galleryPopup = document.getElementById('gallery-popup');
const galleryImagesContainer = document.querySelector('.gallery-images');
const closeGalleryButton = document.querySelector('.close-gallery');

viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const galleryKey = button.getAttribute('data-gallery');
        const galleryImages = galleries[galleryKey];

        galleryImagesContainer.innerHTML = '';

        galleryImages.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            const img = document.createElement('img');
            img.src = item.src;
            galleryItem.appendChild(img);

            const label = document.createElement('div');
            label.classList.add('label');
            label.innerText = item.label;
            galleryItem.appendChild(label);

            const whatsappButton = document.createElement('a');
            whatsappButton.href = `https://wa.me/+27647064274/?text=I'm%20interested%20in%20ordering%20${encodeURIComponent(item.label)}`;
            whatsappButton.classList.add('order-now');
            whatsappButton.innerText = 'Order Now';
            galleryItem.appendChild(whatsappButton);

            galleryImagesContainer.appendChild(galleryItem);
        });

        galleryPopup.classList.add('show');
    });
});

closeGalleryButton.addEventListener('click', () => {
    galleryPopup.classList.remove('show');
});
