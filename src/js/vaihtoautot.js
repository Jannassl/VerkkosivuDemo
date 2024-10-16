const etusivuBtn = document.querySelector('#etusivuBtn');

etusivuBtn.addEventListener('click', () => {
    window.location.href = 'etusivu.html';
});


const tarjousBtn = document.querySelector('#tarjousBtn');

tarjousBtn.addEventListener('click', () => {
    window.location.href = 'etusivu.html?scrollToTarjoukset=true';
});
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([60.240178, 24.850387], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = L.marker([60.240178, 24.850387]).addTo(map);
});






const contactBtn = document.querySelector('#contactBtn');
const modal = document.querySelector('#contactModal');
const closeBtn = document.querySelector('.close');

contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
const headerBtn = document.querySelector('#headerBtn');
headerBtn.addEventListener('click', () => {
    window.location.href="etusivu.html";
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});