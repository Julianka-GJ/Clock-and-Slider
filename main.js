
// slider 

(() => {
    const prevEl = document.getElementById('prev');
    const nextEl = document.getElementById('next');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    let index = 0;


    const activSlide = el => {
        for (let slide of slides) {
            slide.classList.remove('active');
        }

        slides[el].classList.add('active');
    }

    const activDot = el => {
        for (let dot of dots) {
            dot.classList.remove('active');
        }

        dots[el].classList.add('active');
    }

    dots.forEach((el, indexDot) => {
        el.addEventListener('click', () => {
            stopAutoslide();
            index = indexDot;
            prepareSlide(index);
        })
    })

    const prepareSlide = ind => {
        activSlide(ind);
        activDot(ind);
    }

    const nextSlide = () => {
        if (index === slides.length - 1) {
            index = 0;
            prepareSlide(index);
        }
        else {
            index++;
            prepareSlide(index);
        }
    }

    const prevSlide = () => {
        if (index === 0) {
            index = slides.length - 1;
            prepareSlide(index);
        }
        else {
            index--;
            prepareSlide(index);
        }
    }

    let clearInter = setInterval(nextSlide, 3000);

    const stopAutoslide = () => {
        clearInterval(clearInter);
    }

    nextEl.addEventListener('click', () => {
        stopAutoslide();
        nextSlide();
    });

    prevEl.addEventListener('click', () => {
        stopAutoslide();
        prevSlide();
    })

})();








