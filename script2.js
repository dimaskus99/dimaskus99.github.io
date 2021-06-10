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



let animElemets1 = document.querySelectorAll('.my-anim-left');
if (animElemets1.length > 0) {
    for (let i = 0; i < animElemets1.length; i++) {
        let item = animElemets1[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-left')
        })
        myAnimScroll(item, 'activ-anim-left');
    }
}



let animElemets2 = document.querySelectorAll('.my-anim-right');

if (animElemets2.length > 0) {
    for (let i = 0; i < animElemets2.length; i++) {
        let item = animElemets2[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-right')
        })
        myAnimScroll(item, 'activ-anim-right');
    }
}


let animElemets3 = document.querySelectorAll('.my-anim-top');

if (animElemets3.length > 0) {
    for (let i = 0; i < animElemets3.length; i++) {
        let item = animElemets3[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-top')
        })
        myAnimScroll(item, 'activ-anim-top');
    }
}

let animElemets4 = document.querySelectorAll('.my-anim-bottom');
if (animElemets4.length > 0) {
    for (let i = 0; i < animElemets4.length; i++) {
        let item = animElemets4[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-bottom')
        })
        myAnimScroll(item, 'activ-anim-bottom');
    }
}


// робочі функціїї
function myAnimScroll(elem, className) {
    let elemHeight = elem.offsetHeight; //висота об'єкту
    let elemPosition = positionTop(elem); //позиція елементу відносно верху
    let koef = 4; //запускатимемо анімацію на 1/4 блоку
    let startAnim = window.innerHeight - elemHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    if (elemHeight > window.innerHeight) { //якщо елемент вищий ніж вікно
        startAnim = window.innerHeight - window.innerHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    }
    // pageYOffset - скільки пікселів прокручено - вбудован змінна в js
    if ((pageYOffset > elemPosition - startAnim) && pageYOffset < (elemPosition + elemHeight)) {
        elem.classList.add(className);
    } else {
        if (!elem.classList.contains('no-anim-again')) {
            elem.classList.remove(className);
        }
    }
}
function positionTop(param) {
    let rect = param.getBoundingClientRect();
    console.log(rect);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop

}