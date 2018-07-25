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
    mi = "0" + mi;
};
if(h < 13){
    ampm += "AM";   
}else{
    stand = h;
    h = stand - 12;
    ampm += "PM";
};

function welcomeTo() {
    var acorn = document.getElementById("welcome").value
    if(Number(acorn) >= 1) {
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
    document.body.style.backgroundImage = "url('/images/img" + num.toString() + ".jpg')";
    document.body.style.backgroundColor = "transparent";
};
function correctCoins(){
    var qNum = document.getElementById("q");
    var dNum = document.getElementById("d");
    var nNum = document.getElementById("n");
    var pNum = document.getElementById("p");
    var quarter = document.getElementById("quarter");
    var dime = document.getElementById("dime");
    var nickel = document.getElementById("nickel");
    var penny = document.getElementById("penny");
    var qLength = qNum.innerHTML.length;
    qLength -= 2;
    var dLength = dNum.innerHTML.length;
    dLength -= 2;
    var nLength = nNum.innerHTML.length;
    nLength -= 2;
    var pLength = pNum.innerHTML.length;
    pLength -= 2;

    if(qNum.innerHTML == "[1]"){
        quarter.innerHTML = " Quarter";
        qNum.innerHTML = qNum.innerHTML.substr(1, 1);
    }else if(qNum.innerHTML == "[0]"){
        quarter.innerHTML = "";
        qNum.innerHTML = "";
    }else{
        qNum.innerHTML = qNum.innerHTML.substr(1, qLength);
    };
    if(dNum.innerHTML == "[1]"){
        dime.innerHTML = " Dime";
        dNum.innerHTML = dNum.innerHTML.substr(1, 1);
    }else if(dNum.innerHTML == "[0]"){
        dime.innerHTML = "";
        dNum.innerHTML = "";
    }else{
        dNum.innerHTML = dNum.innerHTML.substr(1, dLength);
    };
    if(nNum.innerHTML == "[1]"){
        nickel.innerHTML = " Nickel";
        nNum.innerHTML = nNum.innerHTML.substr(1, 1);
    }else if(nNum.innerHTML == "[0]"){
        nickel.innerHTML = "";
        nNum.innerHTML = "";
    }else{
        nNum.innerHTML = nNum.innerHTML.substr(1, nLength);
    };
    if(pNum.innerHTML == "[1]"){
        penny.innerHTML = " Penny";
        pNum.innerHTML = pNum.innerHTML.substr(1, 1);
    }else if(pNum.innerHTML == "[0]"){
        penny.innerHTML = "";
        pNum.innerHTML = "";
    }else{
        pNum.innerHTML = pNum.innerHTML.substr(1, pLength);
    };
};
function loadStuff() {
    displayDate();
    loadImage();
    correctCoins();
};