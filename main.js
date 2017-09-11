//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(name, hungry, status, color, owner) {
  this.name = name;
  this.hungry = hungry;
  this.status = status;
  this.color = color;
  this.owner = owner;
}

let sadie = new Dog("sadie", false, "normal", "black");
let moonshine = new Dog("moonshine", true);
let atticus = new Dog("atticus");

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(name, cool) {
  this.name = name;
  this.cool = cool;
}

Human.prototype.feed = function(dog) {
  dog.hungry = false;
};

Human.prototype.pet = function(dog) {
  dog.status = "happy";
};

// Instances of Human
// Needed: mason, julia
let mason = new Human("mason", false);
let julia = new Human("julia", true);

sadie.owner = mason;
// console.log("sadies owner is " + sadie.owner.name);
