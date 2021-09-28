abstract class Animal {
    name;
    constructor(){
        
    }
}

class Dog extends Animal {
    constructor(dogName){
        super()
        this.name = dogName
    }
}

class Cat extends Animal{
    constructor(){
        super()
    }
}

let animal = new Dog("Jimmy")