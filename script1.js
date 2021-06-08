let images = document.querySelectorAll('.slider-item'),
    sliderLine = document.querySelector('.slider-line'),
    slider = document.querySelector('.slider'),

    nextBtn = document.querySelector('.slider-next'),
    prevBtn = document.querySelector('.slider-prev');

let count=0,
    width;

function init() {
    width = slider.offsetWidth;
    for(let i = 0; i < images.length; i++){
        images[i].style.width = width + 'px';
    }
    sliderLine.style.width = width * images.length + 'px';
}
window.addEventListener('resize', init)
init();

function move() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px';
}

function moveForvard() {
    count++;
    if(count >= images.length){
        count = 0;
    }
    move();
}

function moveBack() {
    count--;
    if(count < 0){
        count = images.length -1;
    }
    move();
}
nextBtn.addEventListener('click', moveForvard);
prevBtn.addEventListener('click', moveBack);











var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 599px, показываем кнопку
        if (pageYOffset > 100) {
            btn.classList.add('show');
            // Иначе прячем
        } else {
            btn.classList.remove('show');
        }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});






