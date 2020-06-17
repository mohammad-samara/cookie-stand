// sum sales of all locations for each hour
function sumSalesPerHour() {
    var sum = 0;
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < objectsArray.length; j++) {
            sum += objectsArray[j].cookieSaledPerHour[i];
        }
        SalesPerHour.push(sum);
        sum=0;
        //console.log(sum);
    }
}
// create empty table
var parentEl = document.getElementById('locations-Sales');
var newTable = document.createElement('table')
parentEl.appendChild(newTable);
// create header & footer arrays
var tableHeaderArray = ["", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "Daily Location Total"];
var tableFooterArray = [];
// createTableHeader function
function createTableHeader() {
    var newRow = document.createElement('tr');
    newTable.appendChild(newRow);
    for (var i = 0; i < tableHeaderArray.length; i++) {
        if (i < 1) {
            var newTd = document.createElement('td');
            newTd.textContent = tableHeaderArray[i];
        } else {
            var newTd = document.createElement('td');
            newTd.textContent = tableHeaderArray[i];
        }
        newRow.appendChild(newTd);
    }

}
//createTableFooter function
function createTableFooter() {
    sumSalesPerHour();
    var newRow = document.createElement('tr');
    newRow.setAttribute("id","Totals");
    newTable.appendChild(newRow);
    for (var i = 0; i < SalesPerHour.length; i++) {
        if (i < 1) {
            var newTd = document.createElement('td');
            newTd.textContent = "Totals";
        } else {
            var newTd = document.createElement('td');
            newTd.textContent = SalesPerHour[i - 1];
        }
        newRow.appendChild(newTd);
    }
}
//function to generate random customer number per hour for 14 hour then find total:
function randomCusNum(min, max) {
    var randomCusNum = [];
    for (var i = 0; i < 14; i++) {

        randomCusNum.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    var sum = 0;
    for (var i = 0; i < 14; i++) {
        sum = sum + randomCusNum[i];
    }
    randomCusNum.push(sum);
    return randomCusNum;
}

//fuction to render location's cookieSaledPerHour row in table
function renderLocationSale(cookieSaledPerHour, name) {
    var newRow = document.createElement('tr');
    newTable.appendChild(newRow);
    for (var i = 0; i < 16; i++) {
        if (i < 1) {
            var newTd = document.createElement('td');
            newTd.textContent = name;
        }
        else if (i < 15) {
            var newTd = document.createElement('td');
            newTd.textContent = cookieSaledPerHour[i - 1] //+ " cookies";
        } else {
            var newTd = document.createElement('td');
            newTd.textContent = cookieSaledPerHour[i - 1] //+ " cookies";
        }
        newRow.appendChild(newTd);
    }

}
// end of render table function
/* //fuction to render locations lists on webpage
function renderLocationSale(cookieSaledPerHour, name) {
    var parentEl = document.getElementById('locations-Sales');
    var newDiv = document.createElement("div");
    parentEl.appendChild(newDiv);
    var newP = document.createElement("p");
    newP.textContent = name;
    newDiv.appendChild(newP);
    var newUl = document.createElement("ul");
    newDiv.appendChild(newUl);
    for (var i = 0; i < 15; i++) {
        if (i + 6 <= 12) {
            var newLi = document.createElement("li");
            newLi.textContent = i + 6 + "am: " + cookieSaledPerHour[i] + " cookies";
        }
        else if (i + 6 > 12 && i < 14) {
            var newLi = document.createElement("li");
            newLi.textContent = i - 6 + "pm: " + cookieSaledPerHour[i] + " cookies";
        } else {
            var newLi = document.createElement("li");
            newLi.textContent = "Total: " + cookieSaledPerHour[i] + " cookies";
        }
        newUl.appendChild(newLi);
    }

} */
// end of global functions
var objectsArray = []; // when create a new object, it's name(not property) goes inside this array, to indicate objects number & names
var SalesPerHour = []; // store total sales of all locations for each hour
//object construtor function:
function Location(Lname, minCust, maxCust, avgCookiesPerSale) {
    this.name = Lname;
    this.minCus = minCust;
    this.maxCus = maxCust;
    this.avgCookiePerSale = avgCookiesPerSale;
    this.cusPerHour = [];
    this.cookieSaledPerHour = [];
    objectsArray.push(this);
}
Location.prototype.getCus = function () {
    this.cusPerHour = randomCusNum(this.minCus, this.maxCus);
    console.log(this.name + " cusPerHour : " + this.cusPerHour);
    return this.cusPerHour;
}
Location.prototype.getcookie = function () {
    for (var i = 0; i < 14; i++) {
        this.cookieSaledPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookiePerSale));
    }
    var sum = 0;
    for (var i = 0; i < 14; i++) {
        sum = sum + this.cookieSaledPerHour[i];
    }
    this.cookieSaledPerHour.push(sum);
    console.log(this.name + ' cookieSaledPerHour :' + this.cookieSaledPerHour);
}
Location.prototype.render = function () {
    renderLocationSale(this.cookieSaledPerHour, this.name);
}
//creating objects
var seattleLocation = new Location('seattle', 23, 65, 6.3);
var TokyoLocation = new Location('Tokyo', 3, 24, 1.2);
var DubaiLocation = new Location('Dubai', 11, 38, 3.7);
var ParisLocation = new Location('Paris', 20, 38, 2.3);
var LimaLocation = new Location('Lima', 2, 16, 4.6);
// caling createTableHeader
createTableHeader();
//calling methods
for (var i = 0; i < objectsArray.length; i++) {
    objectsArray[i].getCus();
    objectsArray[i].getcookie();
    objectsArray[i].render();
}
// calling createTableFooter
createTableFooter();

//updates table after submitting the form
var elForm=document.getElementById('newLocationForm'); //form

elForm.addEventListener('submit', addStore);
// var lCounter = 1;
function addStore(e){
event.preventDefault();
// var InName=document.getElementById('lName');
// var InMin=document.getElementById('min');
// var InMax=document.getElementById('max');
// var InAvgcookies=document.getElementById('avgcookies');
// console.log(InName.value,InMax.value,InMin.value,InAvgcookies.value);
var newName = e.target.lName.value;
var newMin = e.target.min.value;
var newMax= e.target.max.value;
var newAvg= e.target.avgcookies.value;
console.log(newName,newMin,newMax,newAvg);
var newStore = new Location(newName,newMin,newMax,newAvg);
document.getElementById('Totals').remove();
newStore.getCus();
newStore.getcookie();
newStore.render();
SalesPerHour=[];
createTableFooter();
}
