const etusivuBtn = document.querySelector('#etusivuBtn');

etusivuBtn.addEventListener('click', () => {
    window.location.href = 'etusivu.html';
});


const tarjousBtn = document.querySelector('#tarjousBtn');

tarjousBtn.addEventListener('click', () => {
    window.location.href = 'etusivu.html?scrollToTarjoukset=true';
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