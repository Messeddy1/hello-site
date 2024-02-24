let stars = document.getElementById("stars");
let moon = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let mountains7 = document.getElementById("mountains7");
let hello = document.querySelector(".nouvil");
let bg = document.querySelector(".section");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value + "px";
  river5.style.top = value + "px";
  boat6.style.top = value + "px";
  boat6.style.left = value * 3 + "px";
  hello.style.fontSize = value + "px";
  if (scrollY >= 67) {
    hello.style.fontSize = 67 + "px";
    hello.style.position = "fixed";

    if (scrollY >= 478) {
      hello.style.display = "none";
    } else {
      hello.style.display = "block";
    }
  }
  if (scrollY >= 100) {
    bg.style.background = "linear-gradient(#4781995e, #a0cbff00)";
  } else {
    bg.style.background = "linear-gradient(#200016,#10001f)";
  }
};
window.addEventListener('scroll', ()=>{
  let titre = document.querySelector('.titre');
    let text = document.querySelector(".text");
  let position = text.getBoundingClientRect().top;
  let titrePosition = titre.getBoundingClientRect().top;
  let screnPosition = window.innerHeight /1.7;
  if(position < screnPosition && titrePosition < screnPosition){
    text.classList.add("intro-appear");
    titre.classList.add('intro-appear')
  }
})