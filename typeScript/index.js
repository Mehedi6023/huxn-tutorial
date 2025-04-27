var alice = {
    name: "alice",
    age: 12,
    id: 1234,
    position: "manager",
};
var user1 = {
    name: "boi",
    age: 12,
    email: "ov@gmail.com",
    phone: 12457,
};
// Union
var user2 = {
    name: "oib",
    age: 123,
};
var user3 = {
    name: "ovi",
    age: 12,
    phone: 1234,
    email: "ovi@gmail.com",
};
var items = [1, 2, 3, "ovi", "manager"];
// Literal type
var color;
color = "blue";
// Tuples
var myArr = ["ovi", 12];
var first = myArr[0], second = myArr[1];
console.log(first, second);
var mixedArr;
mixedArr = [[1, 2, "obi"], "st", 12];
// enum ...
var WeatherCondition;
(function (WeatherCondition) {
    WeatherCondition["Sunny"] = "The weather is sunny";
    WeatherCondition["rainy"] = "The weather is  rainy";
})(WeatherCondition || (WeatherCondition = {}));
var currentWeather = WeatherCondition.Sunny;
console.log(currentWeather);
