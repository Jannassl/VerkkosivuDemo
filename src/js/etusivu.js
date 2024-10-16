const karuselliSlide = document.querySelector('.karuselli-slide');
const karuselliImages = document.querySelectorAll('.karuselli-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const modelName = document.querySelector('#modelName');
const modelDetail = document.querySelector('#modelDetail');


let counter = 0;
const vaihtoautoBtn = document.querySelector('#vaihtoautoBtn');
const tarjousBtn= document.querySelector('#tarjousBtn')

vaihtoautoBtn.addEventListener('click', () => {
    window.location.href = 'vaihtoautot.html';
});
tarjousBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

const headerBtn = document.querySelector('#headerBtn');
headerBtn.addEventListener('click', () => {
    window.location.href="etusivu.html";
})

function updateModelInfo(counter) {
    switch (counter) {
        case 0:
            modelName.textContent = "Taycan S";
            modelDetail.textContent = "Täyssähkö";
            break;
        case 1:
            modelName.textContent = "911 Carrera";
            modelDetail.textContent = "Bensiini";
            break;
        case 2:
            modelName.textContent = "911 GT3 RS";
            modelDetail.textContent = "Bensiini";
            break;
        case 3:
            modelName.textContent = "Taycan Sport Turismo";
            modelDetail.textContent = "Täyssähkö";
            break;
        default:
            modelName.textContent = "Taycan S";
            modelDetail.textContent = "Täyssähkö";
    }
}

function updateCarousel() {
    const size = karuselliImages[0].clientWidth;
    karuselliSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

nextBtn.addEventListener('click', () => {
    if (counter >= karuselliImages.length - 1) return;
    karuselliSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    updateCarousel();
    updateModelInfo(counter);
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    karuselliSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    updateCarousel();
    updateModelInfo(counter);
});
const contactBtn = document.querySelector('#contactBtn');
const modal = document.querySelector('#contactModal');
const closeBtn = document.querySelector('.close');

contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([60.240178, 24.850387], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = L.marker([60.240178, 24.850387]).addTo(map);
});







const teeTarjous = document.querySelector('#teeTarjous');
const tarjousModal = document.querySelector('#tarjousModal');

teeTarjous.addEventListener('click', () => {
    tarjousModal.style.display = 'block';
});

const closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target == tarjousModal) {
        tarjousModal.style.display = 'none';
    }
});



window.addEventListener('resize', updateCarousel);

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToTarjoukset = urlParams.get('scrollToTarjoukset');

    if (scrollToTarjoukset) {
        const tarjouksetSection = document.querySelector('.tarjoukset');
        if (tarjouksetSection) {
            window.scrollTo({
                top: tarjouksetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Existing code...
    const vaihtoautot = document.querySelector('.vaihtoautot');
    const vaihtoautoHeader = document.querySelector('.vaihtoautoHeader');
    const mainContent = document.querySelector('#MainContent');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(vaihtoautot);
    observer.observe(vaihtoautoHeader);
    observer.observe(mainContent);
});

updateModelInfo(counter);
updateCarousel();