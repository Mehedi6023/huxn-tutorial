// interface for objects
interface Computer {
  name: string;
  ram: number;
  ssd: number;
  isGood(name: string): boolean | string;
}
let myComputer: Computer = {
  name: "microsoft",
  ram: 16,
  ssd: 512,
  isGood(name) {
    if (this.ram >= 8 && this.ssd > 256) {
      return `${true} and ${name} is good`;
    } else {
      return false;
    }
  },
};
console.log(myComputer.name, myComputer.ram, myComputer.ssd);
console.log(myComputer.isGood("microsoft"));

// interface for function

interface mathOperation {
  (x: number, y: number): number;
}

const add: mathOperation = (a, b) => a + b;
console.log(add(2, 3));
const multi: mathOperation = (a, b) => a * b;
console.log(multi(2, 5));

// interface for class

interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("car is starting");
  }
  stop(): void {
    console.log("car is stopped");
  }
}
const myCar = new Car();
myCar.start();
myCar.stop();

// Declaration merging

interface cookingEssentials {
    gas: string,
}
interface cookingEssentials {
    salt: string
}
const briony: cookingEssentials = {
    gas: "available",
    salt: "20 g"
}