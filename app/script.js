const warContainer = document.querySelector(".war__container");
const loginContainer = document.querySelector(".login__container");
const btnWar = document.querySelector(".btn-war");
const btnAdd = document.querySelector(".btn-add");
const wordContainer = document.querySelector(".word__container");
const counter = document.querySelector(".counter");
const btnStart = document.querySelector(".btn-start");
console.log(btnStart);

// olay dinleyicileri
btnWar.addEventListener("click", addwar());
btnAdd.addEventListener("click", addword());

// zaman sayacı ekle 


function addwar() {
  if (warContainer.style.display == "none") {
    warContainer.style.display = "block";
    loginContainer.style.display = "none";
  } else {
    warContainer.style.display = "block";
    loginContainer.style.display = "block";
  }
}

function addword() {
  if (wordContainer.style.display == "none") {
    wordContainer.style.display = "block";
    loginContainer.style.display = "none";
  } else {
    wordContainer.style.display = "none";
    loginContainer.style.display = "block";
  }
}
