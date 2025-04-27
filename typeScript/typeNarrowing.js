// Type narrowing with type guards
function myFn(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(3));
    }
}
myFn("hello my name is ovi");
myFn(29);
// instance of
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("wolf!!!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("meow!!");
    };
    return Cat;
}());
var dog1 = new Dog;
var cat1 = new Cat;
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
animalSound(dog1);
animalSound(cat1);
