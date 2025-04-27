//Without generics
var printString = function (x) { return console.log(x); };
var printNumber = function (x) { return console.log(x); };
var printBoolean = function (x) { return console.log(x); };
printString("hello i am string");
printNumber(1234);
printBoolean(true);
// With generics
function print(x) {
    return x;
}
var str = print("hello");
console.log(str);
var num = print(1223);
console.log(num);
var bool = print(true);
console.log(bool);
// with interface
function dogInfo(x, y) {
    return [x, y];
}
var d1 = dogInfo({ name: "dogy", age: 12 }, { name: "dogy", age: 12 });
console.log(d1);
function getRandomKeyValuePair(obj) {
    var keys = Object.keys(obj);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randomKey, value: obj[randomKey] };
}
var stringObj = {
    a: "apple",
    b: "banana",
    c: "cherry",
};
var numberObj = {
    one: 1,
    two: 2,
    three: 3,
};
// filter array
var numberKeyPair = getRandomKeyValuePair(numberObj);
console.log(numberKeyPair);
function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
var numberArray = [1, 2, 3, 4, 5, 6];
var evenNum = filterArray(numberArray, function (num) { return num % 2 === 0; });
console.log(evenNum);
var srtArr = ["apple", "a", "ab", "abc"];
var strRes = filterArray(srtArr, function (item) { return item.length > 2; });
console.log(strRes);
var fruitsArray = [
    {
        name: "apple",
        color: "red",
    },
    {
        name: "orange",
        color: "yellow",
    },
];
var filteredFruits = filterArray(fruitsArray, function (frObj) { return frObj.color === "red"; });
console.log(filteredFruits);
// generics with multi types
function reverse(value1, value2) {
    return [value2, value1];
}
var valueRes = reverse(23, "ovi");
console.log(valueRes);
// generics with class
var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    Box.prototype.setContent = function (newContent) {
        this.content = newContent;
    };
    return Box;
}());
var box1 = new Box("hello typescript");
console.log(box1);
