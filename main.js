//V A R I A B L E S  &  P R O P E R T I E S

// MAIN PIZZA SLIDER IMAGES
var mainContainer = document.querySelector(".main")
var main =  document.getElementById('main')
var mainImg = document.getElementById("main-img")
var introText = document.getElementById("intro-text")
var orderBtn = document.getElementById("order-btn")
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")
// GET UP BUTTON
var getUpBtn = document.getElementById("get-up-btn")
// VARIABLES FOR ANIMATION
var pizzaGirl = document.getElementById('pizza-girl')
var nbgPizzaImg = document.getElementById('nbg-pizza')
var vracarPizzaImg = document.getElementById("vracar-pizza")
var pizzaBox = document.getElementById("pizza-box")
var pizzaUputstvo = document.getElementById('box-uputstvo')
var italianStyle = document.getElementById("italian-style")
var chicagoStyle = document.getElementById("chicago-style")
var pets = document.getElementById("pets")
// VARIABLES FOR THE MENU SLIDER
var move = 270;
var button = document.getElementById("button1")
var foodRow = document.getElementById('food-row');
foodRow.draggable = true;
foodRow.children.draggable = true;
// MENU ITEMS IMAGE PROPERTIES
var imgFood1 = document.getElementById('imgFood1')
var imgFood2 = document.getElementById('imgFood2')
var imgFood3 = document.getElementById('imgFood3')
var imgFood4 = document.getElementById('imgFood4')
var imgFood5 = document.getElementById('imgFood5')
var imgFood6 = document.getElementById('imgFood6')
var imgFood7 = document.getElementById('imgFood7')
var imgFood8 = document.getElementById('imgFood8')
// A B S O L U T E   P O S I T I O N   D E C L A R A T I O N
imgFood1.style.position = "absolute"
imgFood2.style.position = "absolute"
imgFood3.style.position = "absolute"
imgFood4.style.position = "absolute"
imgFood5.style.position = "absolute"
imgFood6.style.position = "absolute"
imgFood7.style.position = "absolute"
imgFood8.style.position = "absolute"
// STARTING POSITION
imgFood1.style.left = 0;
imgFood2.style.left = '250px';
imgFood3.style.left = '500px';
imgFood4.style.left = '750px';
imgFood5.style.left = '1000px';
imgFood6.style.left = '-250px';
imgFood7.style.left = '-500px';
imgFood8.style.left = '-750px';

//MAIN CONTENT T R A N S I T I O N   A N I M A T I O N
main.style.transitionDuration = "2s";
mainImg.style.transitionDuration="3.5s";

// MAIN PIZZA SLIDER FUNCTION


function changeImg() {
  // PICTURE WITH ZINDEX -2 IS SET TO BE 300 LOWER AND MAIN IMG IS SLIDING UPWARDS
 main.style.backgroundPositionY = "300px"
 mainImg.style.top = "-1000px"
 // FIRST SET
 // FADING IN TEXT
 setTimeout(() => {
  introText.classList.add("fadeIn")
},300)
// GETTING THE PICTURE WITH ZINDEX -2 TO ITS POSITIONING AND ADDING IT A SRC IMAGE
 setTimeout(() => {
  main.style.backgroundPositionY = "0"
   changePizza("pizza1.jpg", main)
 },900)
 // FADING IN THE ORDER BUTTON
 setTimeout(() => {
  orderBtn.classList.add("fadeIn")
 },1200)
 // SECOND SET
 setTimeout(() => {
   // FADE OUT TEXT FROM BEFORE DISPLAY
  introText.classList.add("fadeOut")
  orderBtn.classList.add("fadeOut")
  introText.classList.remove("fadeIn")
  orderBtn.classList.remove("fadeIn")
  // SECOND ANIMATION
  // SWITCHING PLACES WITH MAIN AND MAIN IMG SO THAT THE ANIMATION CAN BE SEEN
  main.style.zIndex="-1"
  mainImg.style.zIndex = "-2"
  // CHANGING THE SRC IMAGE OF THE MAIN IMG
  changePizza("pizza2-dark.jpg", mainImg)
  mainImg.style.transitionDuration ="0s"
  mainImg.style.top = "0px"
  main.style.backgroundPositionY = "-1100px"
  main.style.opacity= "0"

 },6000)
}

// CHANGE PIZZA IMAGE ON CLICK
function changePizza(url, container) {
  container.style.backgroundImage="url("+url+")"
}

//MENU IMAGE SLIDER FUNCTION
function menuSlider(){
    var arrayOfImages = [imgFood1,imgFood2,imgFood3,imgFood4,imgFood5,imgFood6,imgFood7,imgFood8];
    for(let i = 0; i < arrayOfImages.length; i++) {
      var positionImg = arrayOfImages[i].getBoundingClientRect();
      var leftValue = parseInt(arrayOfImages[i].style.left);
      if(positionImg.x < window.innerWidth) {
          arrayOfImages[i].style.transitionDuration = "0.5s"
        arrayOfImages[i].style.left = leftValue + move + "px"
      }else {
        arrayOfImages[i].style.transitionDuration = "0s"
        arrayOfImages[i].style.left =  '-250px'
      }
    }
}

// M O D A L   F U N C T I O N S

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  // show slides function
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";   
  }

//on scroll function
function scrollFunction() {
  // FIRST SET OF ANIMATIONS
  if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    getUpBtn.style.opacity="0.8";
    pizzaGirl.classList.add("fadeIn")
    nbgPizzaImg.classList.add("fadeLeft")
    vracarPizzaImg.classList.add("fadeRight") 
  }else {
    getUpBtn.style.opacity="0";
  }
 // SECOND SET OF ANIMATIONS
  if(document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
    pizzaBox.classList.add("fadeLeft")
    pizzaUputstvo.classList.add("fadeRight")
  }
  // THIRD SET OF ANIMATIONS
  if(document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    chicagoStyle.classList.add("fadeIn")
    italianStyle.classList.add("fadeIn")
  } 
 // FOURTH SET OF ANIMATIONS
  if(document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
    pets.classList.add("fadeIn")
  } 
}

// C A L L I N G   F U N C T I O N S

//CALLING THE changeImg FUNCTION AS SOON AS THE WINDOW LOADS
window.onload = changeImg;
// CALLING THE changeImg FUNCTION EVERY 10s
setInterval(changeImg, 15000)

// EVENT LISTENERS FOR PIZZA IMAGE CHANGE
img1.addEventListener("click", () => {
  changePizza("pizza1.jpg")
  img1.style="opacity:1"
  img2.style="opacity:0.5"
  img3.style="opacity:0.5"
})
img2.addEventListener("click", () => {
  changePizza("pizza2.jpg")
  img1.style="opacity:0.5"
  img2.style="opacity:1"
  img3.style="opacity:0.5"
})
img3.addEventListener("click", () => {
  changePizza("pizza3.jpg")
  img1.style="opacity:0.5"
  img2.style="opacity:0.5"
  img3.style="opacity:1"
})

// CALLING THE SCROLL FUNCTION
window.onscroll = function() {scrollFunction()};

// MENU SLIDER HOVER FUNCTIONS
foodRow.addEventListener("mouseover", (event) => {
  if(event.target.id == "button1") {
      return null;
  }else {
      event.target.style.transitionDuration = "0.5s"
      event.target.style.width = "270px"
      event.target.style.height = "290px"
  }
})

foodRow.addEventListener("mouseout", () => {
  if(event.target.id == "button1") {
      return null;
  }else {
      event.target.style.transitionDuration = "0.5s"
      event.target.style.width = "260px"
      event.target.style.height = "280px"
  } 
})

// CALLING THE MENU SLIDER FUNCTION WITH A CLICK AND A DRAG ENTER EVENT
button.addEventListener("click", menuSlider);
foodRow.addEventListener("dragenter", menuSlider)