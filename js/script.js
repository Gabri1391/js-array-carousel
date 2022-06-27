const imagesList = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const gallery = document.getElementById('gallery');


let currentActiveIndex = 0;

//Ciclo for per stampare tutti gli elementi dell'array
for( let i = 0; i < imagesList.length; i++){
    gallery.innerHTML += `<img src="${imagesList[i]}" class="img-item" alt="immagine${imagesList[i + 1]}" />`;
}

//Creo una costante per accomunare tutte le immagini 
const images = document.getElementsByClassName('img-item');

images[currentActiveIndex].classList.add('active');

//Creo la logica dei bottoni per cambiare dinamicamente le immagini

const previous = document.getElementById('previous');
const next = document.getElementById('next');

next.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex += 1;

    if(currentActiveIndex === images.length){
        currentActiveIndex = 0;
    }

    images[currentActiveIndex].classList.add('active');
})

previous.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex += -1;

    if(currentActiveIndex = 0){
        currentActiveIndex === images.length;
    }
    
    images[currentActiveIndex].classList.add('active');
})