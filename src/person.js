var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    if (dog) {
      this.dog = dog;
    }
    this.hungry = true;
    this.counterThrowBall = 0;
  }

  fillFoodBowl() {
    this.dog.hungry = false;
  }

  throwBall() {
    this.counterThrowBall += 1;
    if (this.counterThrowBall === 3) {
      return `Oh, I think ${this.dog.name} is too tired. I guess we won\'t play fetch right now.`;
    } else {
    return `${this.dog.name} loves playing fetch!`;
    }
  }

  adoptAPup(name, age) {
    if (this.dog) {
      return `You can\'t adopt ${name}. You already have ${this.dog.name}!`;
    } else {
      var dog = new Dog(
        { name: name, age: age });
        this.dog = dog;
    }
  }


}


module.exports = Person;
