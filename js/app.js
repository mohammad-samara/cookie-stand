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
//fuction to render locations lists on webpage
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

}
//statting objects
// seatle object
var seattleLocation = {
    name: 'seattle',
    minCus: 23,
    maxCus: 65,
    avgCookiePerSale: 6.3,
    cusPerHour: [],
    cookieSaledPerHour: [],
    getCus: function () {
        this.cusPerHour = randomCusNum(this.minCus, this.maxCus);
        console.log(this.name + " cusPerHour : " + this.cusPerHour);
        return this.cusPerHour;
    },
    getcookie: function () {
        for (var i = 0; i < 14; i++) {
            this.cookieSaledPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookiePerSale));
        }
        var sum = 0;
        for (var i = 0; i < 14; i++) {
            sum = sum + this.cookieSaledPerHour[i];
        }
        this.cookieSaledPerHour.push(sum);
        console.log(this.name + ' cookieSaledPerHour :' + this.cookieSaledPerHour);
    },
    render: function () {
        renderLocationSale(this.cookieSaledPerHour, this.name);
    }
};
seattleLocation.getCus();
seattleLocation.getcookie();
seattleLocation.render();
/*    cusPerHour: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    getCus: function (minCus, maxCus) {
        for (var i = 0; i < 14; i++) {
            this.cusPerHour[i] = Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
            //console.log(this.cusPerHour[i]);
        }
        var sum = 0;
        this.cusPerHour[14] = function totalCookies() {
            for (var i = 0; i < 14; i++) {
                sum = sum + seattleLocation.cusPerHour[i];
            }
            return sum;
        }()
        console.log('seattle cusPerHour: '+this.cusPerHour);
        return this.cusPerHour;
    }*/
// end of obj1
var TokyoLocation = {
    name: 'Tokyo',
    minCus: 3,
    maxCus: 24,
    avgCookiePerSale: 1.2,
    cusPerHour: [],
    cookieSaledPerHour: [],
    getCus: function () {
        this.cusPerHour = randomCusNum(this.minCus, this.maxCus);
        console.log(this.name + " cusPerHour : " + this.cusPerHour);
        return this.cusPerHour;
    },
    getcookie: function () {
        for (var i = 0; i < 14; i++) {
            this.cookieSaledPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookiePerSale));
        }
        var sum = 0;
        for (var i = 0; i < 14; i++) {
            sum = sum + this.cookieSaledPerHour[i];
        }
        this.cookieSaledPerHour.push(sum);
        console.log(this.name + ' cookieSaledPerHour :' + this.cookieSaledPerHour);
    },
    render: function () {
        renderLocationSale(this.cookieSaledPerHour, this.name);
    }
};
TokyoLocation.getCus();
TokyoLocation.getcookie();
TokyoLocation.render();
//end obj2
var DubaiLocation = {
    name: 'Dubai',
    minCus: 11,
    maxCus: 38,
    avgCookiePerSale: 3.7,
    cusPerHour: [],
    cookieSaledPerHour: [],
    getCus: function () {
        this.cusPerHour = randomCusNum(this.minCus, this.maxCus);
        console.log(this.name + " cusPerHour : " + this.cusPerHour);
        return this.cusPerHour;
    },
    getcookie: function () {
        for (var i = 0; i < 14; i++) {
            this.cookieSaledPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookiePerSale));
        }
        var sum = 0;
        for (var i = 0; i < 14; i++) {
            sum = sum + this.cookieSaledPerHour[i];
        }
        this.cookieSaledPerHour.push(sum);
        console.log(this.name + ' cookieSaledPerHour :' + this.cookieSaledPerHour);
    },
    render: function () {
        renderLocationSale(this.cookieSaledPerHour, this.name);
    }
};
DubaiLocation.getCus();
DubaiLocation.getcookie();
DubaiLocation.render();
//end of DubaiLocation object
var ParisLocation = {
    name: 'Paris',
    minCus: 20,
    maxCus: 38,
    avgCookiePerSale: 2.3,
    cusPerHour: [],
    cookieSaledPerHour: [],
    getCus: function () {
        this.cusPerHour = randomCusNum(this.minCus, this.maxCus);
        console.log(this.name + " cusPerHour : " + this.cusPerHour);
        return this.cusPerHour;
    },
    getcookie: function () {
        for (var i = 0; i < 14; i++) {
            this.cookieSaledPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookiePerSale));
        }
        var sum = 0;
        for (var i = 0; i < 14; i++) {
            sum = sum + this.cookieSaledPerHour[i];
        }
        this.cookieSaledPerHour.push(sum);
        console.log(this.name + ' cookieSaledPerHour :' + this.cookieSaledPerHour);
    },
    render: function () {
        renderLocationSale(this.cookieSaledPerHour, this.name);
    }
};
ParisLocation.getCus();
ParisLocation.getcookie();
ParisLocation.render();
// end of ParisLocation object
var LimaLocation = {
    name: 'Lima',
    minCus: 2,
    maxCus: 16,
    avgCookiePerSale: 4.6,
    cusPerHour: [],
    cookieSaledPerHour: [],
    getCus: function () {
        this.cusPerHour = randomCusNum(this.minCus, this.maxCus);
        console.log(this.name + " cusPerHour : " + this.cusPerHour);
        return this.cusPerHour;
    },
    getcookie: function () {
        for (var i = 0; i < 14; i++) {
            this.cookieSaledPerHour.push(Math.floor(this.cusPerHour[i] * this.avgCookiePerSale));
        }
        var sum = 0;
        for (var i = 0; i < 14; i++) {
            sum = sum + this.cookieSaledPerHour[i];
        }
        this.cookieSaledPerHour.push(sum);
        console.log(this.name + ' cookieSaledPerHour :' + this.cookieSaledPerHour);
    },
    render: function () {
        renderLocationSale(this.cookieSaledPerHour, this.name);
    }
};
LimaLocation.getCus();
LimaLocation.getcookie();
LimaLocation.render();
//end of LimaLocation object