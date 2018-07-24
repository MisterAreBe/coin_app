var t = new Date();
var y = t.getFullYear();
var m = t.getMonth();
var d = t.getDate();
var h = t.getHours();
var mi = t.getMinutes();
var s = t.getSeconds();
var dn = t.getDay();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var ampm = ""

if(mi < 10){
    mi += "0" + mi
};
if(h < 13){
    ampm += "AM"    
}else{
    ampm += "PM"
};

function welcomeTo() {
    if(document.getElementById("welcome").value != "") {
        alert("Welcome to Coin Changer! It is " + days[dn] + ", " + h + ":" + mi + ampm + ", " + months[m] + "/" + d + "/" + y +".");
        document.getElementById("my_form").submit();
    }else {
        alert("Welcome to Coin Changer, please input the number of cents you have.");
    };
};
function displayDate() {
    document.getElementById("date").innerHTML = "It is " + days[dn] + ", " + h + ":" + mi + ampm + ", " + months[m] + "/" + d + "/" + y +".";
};
function makePurdy() {
    document.getElementById("results").style.backgroundColor = "#00ff007c";
    document.getElementById("results").style.borderColor = "#99999998";
    document.getElementById("results").style.borderRadius = "25px";
    document.getElementById("results").style.boxShadow = "3px 3px 10px #241d1d";
    document.getElementById("results").style.color = "white";
};
function purdyGone() {
    document.getElementById("results").style.backgroundColor = "#999999";
    document.getElementById("results").style.borderColor = "#00ff00";
    document.getElementById("results").style.borderRadius = "0px";
    document.getElementById("results").style.boxShadow = "none";
    document.getElementById("results").style.color = "black";
};
function loadImage() {
    var num = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    document.getElementById("body").style.backgroundImage = "url('/images/img" + num.toString() + ".jpg')";
    document.getElementById("body").style.backgroundColor = "transparent";
};
function loadStuff() {
    displayDate();
    loadImage();
};