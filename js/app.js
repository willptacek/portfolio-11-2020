let shoppedemo = document.querySelector('#shoppedemo');
let halfCircles = document.querySelector('#shoppedemo #half-circles')
let rotating = document.querySelector('.rotating');
let currentPortfolio = document.querySelector('#current-portfolio');
let portfolio = document.querySelector('#portfolio');
let logoEars = document.querySelector('#current-portfolio #logo #ears');
let logoFace = document.querySelector('#current-portfolio #logo #face');
let blinking = document.querySelector('.blinking');
let underline = document.querySelector('#underline');
let popUp = document.querySelector('#pop-up');
let everythingButPopUp = document.querySelectorAll(".blur");
let background = document.querySelector('#bg-div');
let body = document.querySelector('body');
let charSelect1 = document.querySelector('#char-select-1');
let charSelectEncapsulation1 = document.querySelector('#char-select-encapsulation-1');

// these 2 event listeners switch on and off the animation play state of the shoppe demo link so that when the user mouses over the mainbody of the selector, the animation plays
shoppedemo.addEventListener('mouseover', function () {
  rotating.style.animationPlayState = 'running';
});
shoppedemo.addEventListener('mouseout', function () {
  rotating.style.animationPlayState = 'paused';
});

portfolio.addEventListener('mouseover', function () {
  underline.style.opacity = '100';
});
portfolio.addEventListener('mouseout', function () {
  underline.style.opacity = '0';
});

// when the user hovers over the main body of current portfolio, the logo will be colored in, and when they mouse out, the logo will return to b/w
currentPortfolio.addEventListener('mouseover', function () {
  addClassToElement('logo-fill-ears', logoEars);
  addClassToElement('logo-fill-face', logoFace);
})
currentPortfolio.addEventListener('mouseout', function () {
  removeClassFromElement('logo-fill-ears', logoEars);
  removeClassFromElement('logo-fill-face', logoFace);
})

currentPortfolio.addEventListener('click', showPopUp)

function addClassToElement(className, element) {
  element.classList.add(className);
}
function removeClassFromElement(className, element) {
  element.classList.remove(className);
}

function showPopUp() {
  blurElements();
  // popUp.style.display = "block";
  for (let i = 0; i < everythingButPopUp.length; i++) {
    everythingButPopUp[i].addEventListener('click', closePopUp);
  }
  background.addEventListener('click', closePopUp);
}

function closePopUp() {
  unBlurElements(); charSelectEncapsulation1.removeEventListener('click', closePopUp);
  popUp.style.display = "none";
}

function blurElements() {
  for (let i = 0; i < everythingButPopUp.length; i++) {
    everythingButPopUp[i].style.filter = "blur(5px)";
    everythingButPopUp[i].style.transition = "all 0.4s ease-in-out";
  }
  background.style.filter = "blur(8px)";
}

function unBlurElements() {
  for (let i = 0; i < everythingButPopUp.length; i++) {
    everythingButPopUp[i].style.filter = "none";
  }
  background.style.filter = "none";
}