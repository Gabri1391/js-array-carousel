const gallery = document.querySelector('#carousel-section .gallery');
const thumbnails = document.getElementById('thumbnails');
const sources = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let imageElements = ''; 
for( let i = 0; i < sources.length; i++){
    imageElements += `<img src="${sources[i]}" alt="immagine-${sources[i + 1]}" />`;
}

gallery.innerHTML = imageElements;
thumbnails.innerHTML = imageElements;

//Recupero tutte le immagini dal DOM 
const images = document.querySelectorAll('#carousel-section img');

//Variabile per indicare l'indice attivo
let currentActiveIndex = 0;

//Recupero le thumbs dal DOM
const thumbs = document.querySelectorAll('#thumbnails img');

//Imposto alla prima immagine la classe active
images[currentActiveIndex].classList.add('active');

//Imposto alla prima thumbs la classe active
thumbs[currentActiveIndex].classList.add('active');

//Creo la logica dei bottoni per cambiare dinamicamente le immagini

const previous = document.getElementById('previous');
const next = document.getElementById('next');

next.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    if(currentActiveIndex === images.length){
        currentActiveIndex = 0;
    }
    console.log(currentActiveIndex)

    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
})

previous.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

   if(currentActiveIndex < 0){
    currentActiveIndex = images.length -1;
   }

    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
})