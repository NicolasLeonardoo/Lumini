let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carrosselDom = document.querySelector(".carrossel");
let listaItemDom = document.querySelector(".carrossel .lista");
let thumbnailDom = document.querySelector(".carrossel .thumbnail");

nextDom.onclick = function() {
    showSlider('next');
}
function showSlider(type) { 
    let itemSlider = document.querySelectorAll(".carrossel .lista .item");
    let itemThumbnial = document.querySelectorAll(".carrossel .thumbnail .item");
}