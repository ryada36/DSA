"use strict";
(function () {
  const inherits = (parent, child) => {
    const Fn = function () {};
    Fn.prototype = parent.prototype;
    const obj = new Fn();
    // this is what causes inheritance
    // child.prototype = parent.prototype (this would have caused same prototype everywhere)
    child.prototype = obj;
    // this is required otherwise child will have constructor of parent
    child.prototype.constructor = child;
  };

  function Animal(noOflimbs) {
    this.noOflimbs = noOflimbs;
  }
  Animal.prototype.makeHimFly = function () {
    console.log(`${this.name} with ${this.noOflimbs} limbs is flying`);
  };

  function Dog(name, limbs) {
    Animal.call(this, limbs);
    this.name = name;
  }
  inherits(Animal, Dog);
  Dog.prototype.bark = function () {
    console.log(`${this.name} with ${this.noOflimbs} is barking : bow! bow!`);
  };

  const labrador = new Dog("Poodle", 4);
  const bulldog = new Dog("Bully", 4);
  console.log("labrodor ...", labrador);
  console.log("labrodor ..", bulldog);
  console.log("labrodor constructor", labrador.constructor.name);
})();
