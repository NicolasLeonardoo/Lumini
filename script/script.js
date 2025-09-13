let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carrosselDom = document.querySelector('.carrossel');
let listaItemDom = document.querySelector('.carrossel .lista');
let thumbnailDom = document.querySelector('.carrossel .thumbnail');

nextDom.onclick = function () {
    showSlider('next');
}
let timeRunning = 3000;
let runTimeOut;
function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carrossel .lista .item');
    let itemThumbnail = document.querySelectorAll('.carrossel .thumbnail .item');

    if (type === 'next') {
        listaItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carrosselDom.classList.add('next');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carrosselDom.classList.remove('next');

    }, timeRunning);
}