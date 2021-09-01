var slideImages = ["img/slajd1.jpg", "img/slajd2.jpg", "img/slajd3.jpg", "img/slajd4.jpg"];
var image = document.getElementById("image");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var counter = 0;

image.src = slideImages[counter];

setInterval(nextImage, 3000);
nextBtn.addEventListener("click", nextImage)
function nextImage() {
    counter++;
    if(counter > slideImages.length - 1) {
        counter = 0 ;
    }
    image.src = slideImages[counter];
}

prevBtn.addEventListener("click", prevImage)
function prevImage() {
    counter--
    if(counter < 0) {
        counter = slideImages.length - 1;
    }
    image.src = slideImages[counter];
}

