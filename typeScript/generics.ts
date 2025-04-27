//Without generics

const printString = (x: string): void => console.log(x);
const printNumber = (x: number): void => console.log(x);
const printBoolean = (x: boolean): void => console.log(x);

printString("hello i am string");
printNumber(1234);
printBoolean(true);

// With generics
function print<T>(x: T): T {
  return x;
}
const str = print<string>("hello");
console.log(str);
const num = print<number>(1223);
console.log(num);
const bool = print<boolean>(true);
console.log(bool);

// with interface
function dogInfo<T>(x: T, y: T): [T, T] {
  return [x, y];
}
interface Dog {
  name: string;
  age: number;
}
const d1 = dogInfo<Dog>({ name: "dogy", age: 12 }, { name: "dogy", age: 12 });
console.log(d1);

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randomKey, value: obj[randomKey] };
}

const stringObj = {
  a: "apple",
  b: "banana",
  c: "cherry",
};
const numberObj = {
  one: 1,
  two: 2,
  three: 3,
};
// filter array
const numberKeyPair = getRandomKeyValuePair<number>(numberObj);
console.log(numberKeyPair);

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}
const numberArray = [1, 2, 3, 4, 5, 6];
const evenNum = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNum);

const srtArr = ["apple", "a", "ab", "abc"];
const strRes = filterArray(srtArr, (item) => item.length > 2);
console.log(strRes);

interface Fruits {
  name: string;
  color: string;
}
const fruitsArray: Fruits[] = [
  {
    name: "apple",
    color: "red",
  },
  {
    name: "orange",
    color: "yellow",
  },
];
const filteredFruits = filterArray(fruitsArray, frObj => frObj.color === "red")
console.log(filteredFruits);


// generics with multi types

function reverse<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1]
}
const valueRes = reverse<number, string>(23, "ovi")
console.log(valueRes);

// generics with class

class Box<T> {
    constructor(private content: T){}
    getContent(): T {
        return this.content
    }
    setContent(newContent: T): void {
        this.content = newContent
    }
}
const box1 = new Box("hello typescript")
console.log(box1);