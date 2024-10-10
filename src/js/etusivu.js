const karuselliSlide = document.querySelector('.karuselli-slide');
const karuselliImages = document.querySelectorAll('.karuselli-slide img')

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const modelName = document.querySelector('#modelName');
const modelDetail = document.querySelector('#modelDetail');

let counter = 0;
const size = karuselliImages[0].clientWidth;

async function updateModelInfo(counter){
    switch(counter) {
        case 0:
            modelName.textContent = "Taycan S";
            modelDetail.textContent ="Täyssähkö";
            break;
        case 1:
            modelName.textContent ="911 Carrera";
            modelDetail.textContent ="Bensiini";
            break;
        case 2:
            modelName.textContent ="911 GT3 RS";
            modelDetail.textContent ="Bensiini";
            break;
        case 3:
            modelName.textContent ="Taycan Sport Turismo";
            modelDetail.textContent = "Täyssähkö";
            break;
        default:
            modelName.textContent = "Taycan S";
            modelDetail.textContent ="Täyssähkö";
    }
}

nextBtn.addEventListener('click', () => {
    if(counter >= karuselliImages.length -1)return;
    karuselliSlide.style.transition = "transform 0.5 ease -in-out";
    counter++;
    karuselliSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    updateModelInfo(counter);
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    karuselliSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    karuselliSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    updateModelInfo(counter);
});

updateModelInfo(counter);