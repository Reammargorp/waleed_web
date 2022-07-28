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
}

let contactIcon = document.querySelector(".contact-icon")
let contactIconI = document.querySelector(".contact-icon i")
let social = document.querySelector(".contact-btn .social")
console.log(contactIconI)
contactIcon.onclick = function() {
social.classList.toggle("active")
if(contactIconI.classList.value == "fas", "fa-comment-dots") {
contactIconI.classList.remove("fas" ,"fa-comment-dots")
contactIconI.classList.add("fa-solid", "fa-xmark")
}
}



let serviceSearch = ["services" , "service" , "خدماتنا" , "الخدمات"]
let articleSearch = ["articles" , "article" , "مقالاتنا" , "المقالات"]
let jobsSearch = ["jobs" , "job" , "الوظائف" , "وظائفنا"]
let aboutSearch = ["about us" , "About Us" , "من نحن" , "عن الحصري كلينك التخصصية" , "عن الحصري كلينك"]
let indexSearch = ["الرئيسية" , "الصفحة الرئيسية" , "home page" , "home" , "Home"]
let bookSearch = ["booking" , "حجز موعد" , "الحجز"]
let drWaleedSearch = ["DrWaleed" , "Dr Waleed" , "dr waleed" , "Dr Waleed Haikal" , "dr waleed haikal" , "الدكتور وليد هيكل" , "دكتور وليد هيكل" , "دكتور وليد" , "الدكتور وليد"]

let mainText = document.querySelector(".main-search .search-bar .mainText");
let mainSubmit = document.querySelector(".main-search .search-bar .mainSubmit");

mainSubmit.onclick = function (e) {
for(let s = 0; s < serviceSearch.length ; s++) {
if (mainText.value == serviceSearch[s]) {
open("./services.html" ,"")
}
}
for(let a = 0; a < articleSearch.length ; a++) {
if (mainText.value == articleSearch[a]) {
open("./articles.html" ,"")
}
}
for(let j = 0; j < jobsSearch.length ; j++) {
if (mainText.value == jobsSearch[j]) {
open("./jobs.html" ,"")
}
}
for(let o = 0; o < aboutSearch.length ; o++) {
if (mainText.value == aboutSearch[o]) {
open("./about.html" ,"")
}
}
for(let i = 0; i < indexSearch.length ; i++) {
if (mainText.value == indexSearch[i]) {
open("../index.html" ,"")
}
}
for(let p = 0; p < bookSearch.length ; p++) {
if (mainText.value == bookSearch[p]) {
open("./book.html" ,"")
}
}
for(let r = 0; r < drWaleedSearch.length ; r++) {
if (mainText.value == drWaleedSearch[r]) {
open("./doctorWaleedInfo.html" ,"")
}
}
if (mainText.value == "") {
open("./404.html" ,"")
mainText.value = ""
}

}

let menuText = document.querySelector(".menu-search .menu-text");
let menuSubmit = document.querySelector(".menu-search .menu-submit");

console.log(menuText)

menuSubmit.onclick = function (e) {
for(let s = 0; s < serviceSearch.length ; s++) {
if (menuText.value == serviceSearch[s]) {
open("./services.html" ,"")
}
}
for(let a = 0; a < articleSearch.length ; a++) {
if (menuText.value == articleSearch[a]) {
open("./articles.html" ,"")
}
}
for(let j = 0; j < jobsSearch.length ; j++) {
if (menuText.value == jobsSearch[j]) {
open("./jobs.html" ,"")
}
}
for(let o = 0; o < aboutSearch.length ; o++) {
if (menuText.value == aboutSearch[o]) {
open("./about.html" ,"")
}
}
for(let i = 0; i < indexSearch.length ; i++) {
if (menuText.value == indexSearch[i]) {
open("../index.html" ,"")
}
}
for(let p = 0; p < bookSearch.length ;  p++) {
if (menuText.value == bookSearch[p]) {
open("./book.html" ,"")
}
}
for(let r = 0; r < drWaleedSearch.length ; r++) {
if (menuText.value == drWaleedSearch[r]) {
open("./doctorWaleedInfo.html" ,"")
}
}


if (menuText.value == "") {
open("./404.html" ,"")
}

}



let btnTop = document.querySelector(".btn-up")

window.onscroll = function(){

if(window.scrollY >= 300) {
btnTop.style.opacity = "1"
}
if(window.scrollY < 300) {
btnTop.style.opacity = "0"
}   

}
