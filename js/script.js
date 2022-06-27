const imagesList = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const gallery = document.getElementById('gallery');


let currentActiveIndex = 0;

imagesList[currentActiveIndex].classList.add('active');

//Ciclo for per stampare tutti gli elementi dell'array
for( let i = 0; i < imagesList.length; i++){
    gallery.innerHTML = `<img src="${imagesList[0]}" alt="immagine${imagesList[i + 1]}"</img> <img src="${imagesList[1]}" alt="immagine${imagesList[i + 1]}"</img> <img src="${imagesList[2]}" alt="immagine${imagesList[i + 2]}"</img> <img src="${imagesList[3]}" alt="immagine${imagesList[i + 3]}"</img> <img src="${imagesList[4]}" alt="immagine${imagesList[i + 4]}"</img>`

}