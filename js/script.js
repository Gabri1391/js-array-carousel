const imagesList = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const gallery = document.getElementById('gallery');


let currentActiveIndex = 0;

//Ciclo for per stampare tutti gli elementi dell'array
for( let i = 0; i < imagesList.length; i++){
    gallery.innerHTML += `<img src="${imagesList[i]}" class="img-item" alt="immagine${imagesList[i + 1]}" />`;
}

const images = document.getElementsByClassName('img-item');

images[currentActiveIndex].classList.add('active');