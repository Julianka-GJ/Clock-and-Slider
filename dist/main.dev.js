"use strict";

// slider 
(function () {
  var prevEl = document.getElementById('prev');
  var nextEl = document.getElementById('next');
  var slides = document.querySelectorAll('.slide');
  var dots = document.querySelectorAll('.dot');
  var index = 0;

  var activSlide = function activSlide(el) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var slide = _step.value;
        slide.classList.remove('active');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    slides[el].classList.add('active');
  };

  var activDot = function activDot(el) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = dots[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var dot = _step2.value;
        dot.classList.remove('active');
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    dots[el].classList.add('active');
  };

  dots.forEach(function (el, indexDot) {
    el.addEventListener('click', function () {
      stopAutoslide();
      index = indexDot;
      prepareSlide(index);
    });
  });

  var prepareSlide = function prepareSlide(ind) {
    activSlide(ind);
    activDot(ind);
  };

  var nextSlide = function nextSlide() {
    if (index === slides.length - 1) {
      index = 0;
      prepareSlide(index);
    } else {
      index++;
      prepareSlide(index);
    }
  };

  var prevSlide = function prevSlide() {
    if (index === 0) {
      index = slides.length - 1;
      prepareSlide(index);
    } else {
      index--;
      prepareSlide(index);
    }
  };

  var clearInter = setInterval(nextSlide, 3000);

  var stopAutoslide = function stopAutoslide() {
    clearInterval(clearInter);
  };

  nextEl.addEventListener('click', function () {
    stopAutoslide();
    nextSlide();
  });
  prevEl.addEventListener('click', function () {
    stopAutoslide();
    prevSlide();
  });
})();