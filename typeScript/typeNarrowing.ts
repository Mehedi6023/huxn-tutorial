// Type narrowing with type guards

type myType = string | number;

function myFn(value: myType): void {
    if(typeof value === 'string'){
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(3));
    }
}
myFn("hello my name is ovi")
myFn(29)

// instance of

class Dog {
    bark(): void {
        console.log(`wolf!!!`);
    }
}
class Cat {
    meow(): void{
        console.log(`meow!!`);
    }
}
const dog1 = new Dog
const cat1 = new Cat

function animalSound(animal: Dog | Cat): void {
    if(animal instanceof Dog){
        animal.bark()
    } else {
        animal.meow()
    }
}
animalSound(dog1)
animalSound(cat1)