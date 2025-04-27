// type and type intersection
type Person = {
  name: string;
  age: number;
};
type Employee = {
  id: number;
  position: string;
};
type PersonAndEmployee = Person & Employee;

const alice: PersonAndEmployee = {
  name: "alice",
  age: 12,
  id: 1234,
  position: "manager",
};
type User = Person & {
  email: string;
  phone: number;
};
const user1: User = {
  name: "boi",
  age: 12,
  email: "ov@gmail.com",
  phone: 12457,
};
// Union
let user2: User | Person = {
  name: "oib",
  age: 123,
};
let user3: Person | User = {
  name: "ovi",
  age: 12,
  phone: 1234,
  email: "ovi@gmail.com",
};
const items: (number | string)[] = [1, 2, 3, "ovi", "manager"];
// Literal type
let color: "red" | "blue";
color = "blue";
// Tuples
let myArr: [string, number] = ["ovi", 12];
let [first, second] = myArr;
console.log(first, second);
let mixedArr: [(number | string)[], string, number];
mixedArr = [[1, 2, "obi"], "st", 12];
// enum ...
enum WeatherCondition {
  Sunny = "The weather is sunny",
  rainy = "The weather is  rainy"
}
let currentWeather = WeatherCondition.Sunny
console.log(currentWeather);