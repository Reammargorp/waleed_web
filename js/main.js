













let landing = document.querySelector(".landing")
let landing3 = document.querySelector(".landing .title h2");
let landing2 = document.querySelector(".landing .title h3");

window.onload = function () {
  landing3.classList.add("active");
  landing2.classList.add("active");
};


let closeBtn = document.querySelector(".search-close-btn button")

closeBtn.onclick =function() {
  mainSearch.classList.toggle("active")
  document.body.style.overflowY = "visible"
  contactBtn.style.zIndex = "1000"
}

let searchOpener = document.querySelector(".search-opener")
let mainSearch = document.querySelector(".main-search")
searchOpener.onclick = function() {
  mainSearch.classList.toggle("active")
  document.body.style.overflowY = "hidden"
  contactBtn.style.zIndex = "1"
}

let contactBtn = document.querySelector(".contact-btn")
let contactIcon = document.querySelector(".contact-btn .contact-icon")
let contactIconI = document.querySelector(".contact-btn .contact-icon svg")
let social = document.querySelector(".contact-btn .social")
contactIcon.onclick = function() {
  social.classList.toggle("active")
  if(contactIconI.classList.value === "fas", "fa-comment-dots") {
    contactIconI.classList.remove("fas" ,"fa-comment-dots")
    contactIconI.classList.add("fa-solid", "fa-xmark")
    console.log(contactIconI)
  }
}


let mail = document.querySelector(".mail")
let phone = document.querySelector(".phone")
let address = document.querySelector(".address")
mail.onclick =function() {
    open("mailto:Admin@waleedhaikal.com")
}
phone.onclick =function() {
    open("tel:201558854716")
}   
address.onclick =function() {
    open("https://www.google.com/maps/place/%D9%85%D8%B9%D8%A7%D9%85%D9%84+%D8%B6%D8%A7%D9%85%D9%86%E2%80%AD/@29.9682461,30.9388588,17z/data=!3m1!4b1!4m5!3m4!1s0x14585768539eadaf:0xe10b16c4351b0fcd!8m2!3d29.9682461!4d30.9388588?hl=en-US")
}


let services = document.querySelector(".services .container")
let servicesTwo = document.querySelector(".services-two .container")
let team = document.querySelector(".team .container")
let teamTwo = document.querySelector(".team-two .container")
let reviews = document.querySelector(".reviews .container")
let reviewsTwo = document.querySelector(".reviews-two .container")
let success = document.querySelector(".skill .success")
let expert = document.querySelector(".skill .expert")
let casses = document.querySelector(".skill .casses")
let smiles = document.querySelector(".skill .smiles")
let online = document.querySelector(".online .container")
let articles = document.querySelector(".articles .container")
let articlesTwo = document.querySelector(".articles-two .container")
let info = document.querySelector(".info .container")
let footer =document.querySelector(".footer .container")
let skill = document.querySelector(".skill")
let skillNums =document.querySelectorAll(".skill-num")
let btnTop = document.querySelector(".btn-up")
let started = false;
  function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 1500 / goal);
  }

window.onscroll = function(){
  if(window.scrollY >= landing.offsetTop -200) {
    landing3.classList.add("active");
    landing2.classList.add("active");
}
if(window.scrollY >= services.offsetTop - 300) {
  services.classList.add("active");

}
if(window.scrollY >= servicesTwo.offsetTop - 500) {
  servicesTwo.classList.add("active");

}
if(window.scrollY >= team.offsetTop - 300) {
  team.classList.add("active");
}
if(window.scrollY >= teamTwo.offsetTop - 300) {
  teamTwo.classList.add("active");
}
// if(window.scrollY >= reviews.offsetTop - 300) {
//   reviews.classList.add("active");
// }
// if(window.scrollY >= reviewsTwo.offsetTop - 300) {
//   reviewsTwo.classList.add("active");
// }
if(window.scrollY >= online.offsetTop - 300) {
  online.classList.add("active");
}
if(window.scrollY >= articles.offsetTop - 300) {
  articles.classList.add("active");
}
if(window.scrollY >= articlesTwo.offsetTop - 300) {
  articlesTwo.classList.add("active");
}
if(window.scrollY >= info.offsetTop - 300) {
  info.classList.add("active");
}
if(window.scrollY >= footer.offsetTop - 300) {
  footer.classList.add("active");
}
if(window.scrollY >= 500) {
  btnTop.style.opacity = "1"
}
if(window.scrollY <= 500) {
  btnTop.style.opacity = "0"
}
if(window.scrollY >= skill.offsetTop - 300) {
          if (!started) {
            skillNums.forEach((num) => startCount(num))
          }
          started = true
          success.classList.add("active");
          casses.classList.add("active");
          expert.classList.add("active");
          smiles.classList.add("active");
}
}




let serviceSearch = ["services" , "service" , "خدماتنا" , "الخدمات"]
let articleSearch = ["articles" , "article" , "مقالاتنا" , "المقالات"]
let jobsSearch = ["jobs" , "job" , "الوظائف" , "وظائفنا"]
let aboutSearch = ["about us" , "About Us" , "من نحن" , "عن الحصري كلينك التخصصية" , "عن الحصري كلينك"]
let indexSearch = ["الرئيسية" , "الصفحة الرئيسية" , "home page"]
let bookSearch = ["booking" , "حجز موعد" , "الحجز"]
let drWaleedSearch = ["DrWaleed" , "Dr Waleed" , "dr waleed" , "Dr Waleed Haikal" , "dr waleed haikal" , "الدكتور وليد هيكل" , "دكتور وليد هيكل" , "دكتور وليد" , "الدكتور وليد"]

let mainText = document.querySelector(".main-search .search-bar .mainText");
let mainSubmit = document.querySelector(".main-search .search-bar .mainSubmit");

mainSubmit.onclick = function (e) {
for(let s = 0; s < serviceSearch.length ; s++) {
if (mainText.value == serviceSearch[s]) {
open("../html/services.html" ,"")
}
}
for(let a = 0; a < articleSearch.length ; a++) {
if (mainText.value == articleSearch[a]) {
open("../html/articles.html" ,"")
}
}
for(let j = 0; j < jobsSearch.length ; j++) {
if (mainText.value == jobsSearch[j]) {
open("../html/jobs.html" ,"")
}
}
for(let o = 0; o < aboutSearch.length ; o++) {
if (mainText.value == aboutSearch[o]) {
open("../html/about.html" ,"")
}
}
for(let i = 0; i < indexSearch.length ; i++) {
if (mainText.value == indexSearch[i]) {
open("/index.html" ,"")
}
}
for(let p = 0; p < bookSearch.length ; p++) {
if (mainText.value == bookSearch[p]) {
open("../html/book.html" ,"")
}
}
for(let r = 0; r < drWaleedSearch.length ; r++) {
if (mainText.value == drWaleedSearch[r]) {
open("../html/doctorWaleedInfo.html" ,"")
}
}
if (mainText.value == "") {
open("../html/404.html" ,"")
mainText.value = ""
}

}

let menuText = document.querySelector(".menu-search .menu-text");
let menuSubmit = document.querySelector(".menu-search .menu-submit");

console.log(menuText)

menuSubmit.onclick = function (e) {
for(let s = 0; s < serviceSearch.length ; s++) {
if (menuText.value == serviceSearch[s]) {
open("../html/services.html" ,"")
}
}
for(let a = 0; a < articleSearch.length ; a++) {
if (menuText.value == articleSearch[a]) {
open("../html/articles.html" ,"")
}
}
for(let j = 0; j < jobsSearch.length ; j++) {
if (menuText.value == jobsSearch[j]) {
open("../html/jobs.html" ,"")
}
}
for(let o = 0; o < aboutSearch.length ; o++) {
if (menuText.value == aboutSearch[o]) {
open("../html/about.html" ,"")
}
}
for(let i = 0; i < indexSearch.length ; i++) {
if (menuText.value == indexSearch[i]) {
open("/index.html" ,"")
}
}
for(let p = 0; p < bookSearch.length ;  p++) {
if (menuText.value == bookSearch[p]) {
open("../html/book.html" ,"")
}
}
for(let r = 0; r < drWaleedSearch.length ; r++) {
if (menuText.value == drWaleedSearch[r]) {
open("../html/doctorWaleedInfo.html" ,"")
}
}


if (menuText.value == "") {
open("../html/404.html" ,"")
}

}