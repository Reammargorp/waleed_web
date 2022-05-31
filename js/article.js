var btnTop = document.querySelector(".btn-up")
window.onscroll = function(){
if(window.scrollY >= 500) {
btnTop.style.opacity = "1"
}
if(window.scrollY <= 500) {
btnTop.style.opacity = "0"
}
}

var closeBtn = document.querySelector(".search-close-btn button")
closeBtn.onclick =function() {
mainSearch.classList.toggle("active")
document.body.style.overflowY = "visible"
contactBtn.style.zIndex = "1000"
}
var searchOpener = document.querySelector(".search-opener")
var mainSearch = document.querySelector(".main-search")
searchOpener.onclick = function() {
mainSearch.classList.toggle("active")
document.body.style.overflowY = "hidden"
contactBtn.style.zIndex = "1"
}

var contactBtn = document.querySelector(".contact-btn")
var contactIcon = document.querySelector(".contact-btn .contact-icon")
var contactIconI = document.querySelector(".contact-btn .contact-icon svg")
var social = document.querySelector(".contact-btn .social")
contactIcon.onclick = function() {
social.classList.toggle("active")
if(contactIconI.classList.value === "fas", "fa-comment-dots") {
contactIconI.classList.remove("fas" ,"fa-comment-dots")
contactIconI.classList.add("fa-solid", "fa-xmark")
console.log(contactIconI)
}
}
let mainText = document.querySelector(".main-search .search-bar .mainText");
let mainSubmit = document.querySelector(".main-search .search-bar .mainSubmit");
console.log(mainText)
mainSubmit.onclick = function (e) {
if (mainText.value == "services" || mainText.value == "service" || mainText.value == "الخدمات" ||   mainText.value == "خدمات") {
mainText.value = ""
open("services.html" ,"")
}
if (mainText.value == "مقالاتنا" || mainText.value == "article" || mainText.value == "المقالات" ||   mainText.value == "مقالاتنا") {
mainText.value = ""
open("articles.html" ,"")
}
if (mainText.value == "الرئيسيه" || mainText.value == "main" ) {
mainText.value = ""
open("index.html" ,"")
}
if (mainText.value == "تواصل معنا" || mainText.value == "contact" || mainText.value == "التواصل" || mainText.value == "اتصل بنا" || mainText.value == "التواصل") {
mainText.value == ""
open("contact.html" ,"")
}
if (mainText.value == "job" || mainText.value == "jobs" || mainText.value == "الوظائف" || mainText.value == "وظيفه") {
mainText.value == ""
open("job.html" ,"")
}
if (mainText.value == "الكشف الاونلاين" || mainText.value == "كشف" || mainText.value == "الكشف" || mainText.value == "medical") {
mainText.value == ""
open("medical.html" ,"")
}
else {
mainText.value == ""
open("404.html" ,"")
}
};

let menuText = document.querySelector(".menu-search .menu-text");
let menuSubmit = document.querySelector(".menu-search .menu-submit");
menuSubmit.onclick = function (e) {
if (menuText.value == "services" || menuText.value == "service" || menuText.value == "الخدمات" ||   menuText.value == "خدمات") {
menuText.value = ""
open("services.html" ,"")
}
if (menuText.value == "مقالاتنا" || menuText.value == "article" || menuText.value == "المقالات" ||   menuText.value == "مقالاتنا") {
menuText.value = ""
open("articles.html" ,"")
}
if (menuText.value == "الرئيسيه" || menuText.value == "main" ) {
menuText.value = ""
open("index.html" ,"")
}
if (menuText.value == "تواصل معنا" || menuText.value == "contact" || menuText.value == "التواصل" || menuText.value == "اتصل بنا" || menuText.value == "التواصل") {
menuText.value == ""
open("contact.html" ,"")
}
if (menuText.value == "job" || menuText.value == "jobs" || menuText.value == "الوظائف" || menuText.value == "وظيفه") {
menuText.value == ""
open("job.html" ,"")
}
if (menuText.value == "الكشف الاونلاين" || menuText.value == "كشف" || menuText.value == "الكشف" || menuText.value == "medical") {
menuText.value == ""
open("medical.html" ,"")
}
else {
menuText.value == ""
open("404.html" ,"")
}
};