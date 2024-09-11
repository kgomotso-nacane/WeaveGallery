document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeButton = document.querySelector('.close-button');
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const menuListItems = document.querySelectorAll('.menu-list-mobile a');

    menuIcon.addEventListener('click', () => {
        mobileNav.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        mobileNav.style.display = 'none';
    });

    menuListItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileNav.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === mobileNav) {
            mobileNav.style.display = 'none';
        }
    });

    const galleryPopups = document.querySelectorAll('.gallery-popup');
    const closeButtons = document.querySelectorAll('.close');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const galleryClass = button.getAttribute('data-gallery');
            const galleryPopup = document.querySelector(`.${galleryClass}`);
            if (galleryPopup) {
                galleryPopup.style.display = 'flex';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const galleryPopup = button.closest('.gallery-popup');
            if (galleryPopup) {
                galleryPopup.style.display = 'none';
            }
        });
    });

    window.onclick = function(event) {
        galleryPopups.forEach(popup => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    };
});
