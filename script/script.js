let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carrosselDom = document.querySelector('.carrossel');
let listaItemDom = document.querySelector('.carrossel .lista');
let thumbnailDom = document.querySelector('.carrossel .thumbnail');

nextDom.onclick = function () {
    showSlider('next');
}
prevDom.onclick = function () {
    showSlider('prev');
};
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
        nextDom.click();
}, timeAutoNext);
function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carrossel .lista .item');
    let itemThumbnail = document.querySelectorAll('.carrossel .thumbnail .item');

    if (type === 'next') {
        listaItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carrosselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listaItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carrosselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carrosselDom.classList.remove('next');
        carrosselDom.classList.remove('prev');
    }, timeRunning);
    
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
}, timeAutoNext);
}