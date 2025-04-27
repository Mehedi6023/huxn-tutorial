var myComputer = {
    name: "microsoft",
    ram: 16,
    ssd: 512,
    isGood: function (name) {
        if (this.ram >= 8 && this.ssd > 256) {
            return "".concat(true, " and ").concat(name, " is good");
        }
        else {
            return false;
        }
    },
};
console.log(myComputer.name, myComputer.ram, myComputer.ssd);
console.log(myComputer.isGood("microsoft"));
var add = function (a, b) { return a + b; };
console.log(add(2, 3));
var multi = function (a, b) { return a * b; };
console.log(multi(2, 5));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("car is starting");
    };
    Car.prototype.stop = function () {
        console.log("car is stopped");
    };
    return Car;
}());
var myCar = new Car();
myCar.start();
myCar.stop();
var briony = {
    gas: "available",
    salt: "20 g"
};
