"use strict";

//function getIndexSlade() {
// for (let index = 0; index <= max; index++) {
//  return index
//}
//}
function createInitialImage(number) {
  var image = document.createElement('img');
  image.setAttribute('src', "images/".concat(number, ".jpg"));
  var parent = document.getElementById('container-image');
  parent.appendChild(image);
  return image;
}

function changeImages() {
  if (currentImage + 1 > max) {
    currentImage = min;
  } else {
    currentImage++;
  }

  imageElement.setAttribute('src', "images/".concat(currentImage, ".jpg"));
} //const index = getIndexSlade();


var imageElement = createInitialImage(index);
var currentImage = index;
setInterval(changeImages, 3000);
var nextBtnEl = document.getElementById('next'); //nextBtnEl.onclick = () => {
//let clearInter = setInterval(changeImages, 1000);
// clearInterval(clearInter);
//}
//---------------------------------------------------------------------------------

var mainMenuEL = document.getElementById('main-box');
var menuToppingEL = document.getElementById('menu-toppings');
var myFormEL = document.getElementById('form-menu');
var toppingFormEL = document.getElementById('toppings-menu');
var buttonEL = document.getElementById('button');
var buttonAddEL = document.getElementById('button-add');
var printBlockEL = document.getElementById('print-block');
var listToppings = document.getElementById('list-toppings');
var priceBurgerEL = document.getElementById('price');
var ligthBurgEL = document.getElementById('burger-small');
var classicBurgEL = document.getElementById('burger-medium');
var royalBurgEL = document.getElementById('burger-large');
var toppingCheesEL = document.getElementById('cheese');
var toppingSaladEL = document.getElementById('salad'); //------------------------------Basicburger----------------------------------------

function Basicburger(price, kcal) {
  this.price = price;
  this.kcal = kcal;
}

var newclassicBurg = new Basicburger(75, 30);
console.log(newclassicBurg);
var newroyalBurg = new Basicburger(100, 50);
console.log(newroyalBurg); //-----------------------------------------------------------------------------

var choiceBasicBurger = function choiceBasicBurger() {
  mainMenuEL.classList.toggle('hidden');
  menuToppingEL.classList.remove('hidden');

  if (ligthBurgEL.checked) {
    printBlockEL.innerText = 'You choosed:' + '  ' + ligthBurgEL.value + '  ' + 'PRICE $' + newligthBurg.price + '  ' + 'kcal:' + ' ' + newligthBurg.kcal;
  }

  if (classicBurgEL.checked) {
    printBlockEL.innerText = 'You choosed:' + '  ' + classicBurgEL.value + '  ' + 'PRICE $' + newclassicBurg.price + '  ' + 'kcal:' + '  ' + newclassicBurg.kcal;
  }

  if (royalBurgEL.checked) {
    printBlockEL.innerText = 'You choosed:' + '  ' + royalBurgEL.value + '  ' + 'PRICE $' + newroyalBurg.price + '  ' + 'kcal:' + ' ' + newroyalBurg.kcal;
  }
};

buttonEL.addEventListener('click', choiceBasicBurger); //--------------------------------Topping----------------------------------------

function Topping(price, kcal, id) {
  this.price = price;
  this.kcal = kcal;
}

var toppingCheese = new Topping(10, 20);
console.log(toppingCheese);
var toppingSalad = new Topping(20, 5);
console.log(toppingSalad); //----------------------------------------------------------------------------------

var newligthBurg = new Basicburger(50, 20);
console.log(newligthBurg);
var finalBurger = new Array();

ligthBurgEL.onclick = function () {
  finalBurger.push(newligthBurg);
};

toppingCheesEL.addEventListener('click', function () {
  finalBurger.push(toppingCheese);
});
toppingSaladEL.addEventListener('click', function () {
  finalBurger.push(toppingSalad);
});
console.log(finalBurger);

var addToppingBurger = function addToppingBurger() {
  var finalBurger = new Array();

  ligthBurgEL.onclick = function () {
    finalBurger.push(newligthBurg);
  };

  toppingCheesEL.addEventListener('click', function () {
    finalBurger.push(toppingCheese);
  });
  toppingSaladEL.addEventListener('click', function () {
    finalBurger.push(toppingSalad);
  });
  console.log(finalBurger);
  return finalBurger;
};

var getPrice = function getPrice(finalBurger) {
  var priceBurger;
  priceBurger = finalBurger.map(function (el) {
    return el.price;
  }).reduce(function (sum, el) {
    return sum + el;
  }, 0);
  return priceBurger;
};

console.log(getPrice(finalBurger));

buttonAddEL.onclick = function () {
  var checkedValues = [];
  Array.from(toppingFormEL.toppings).map(function (el) {
    if (el.checked) {
      checkedValues.push(el.value);
      listToppings.innerText = 'You choosed:' + ' ' + checkedValues.join(' | ');
    }
  });
  console.log(checkedValues);
};

if (ss.length === 1) ss = "0" + ss;
if (mm.length === 1) mm = "0" + mm;
if (hh.length === 1) hh = "0" + hh;

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