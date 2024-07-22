function EAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.turnIn = false;
}

EAppliance.prototype.isPlugged = function() {
    this.turnIn = true;
    console.log(`${this.name} is turned in`);
}

EAppliance.prototype.unPlugged = function() {
    this.turnIn = false;
    console.log(`${this.name} is turned off`);
}

function Toaster(name, power, color) {
    EAppliance.call(this, name, power);
    this.color = color;
}

Toaster.prototype = Object.create(EAppliance.prototype);
Toaster.prototype.constructor = Toaster;

Toaster.prototype.setColor = function(color) {
    this.color = color;
    console.log(`${this.name} is ${this.color}.`);
}

function PC(name, power, type) {
    EAppliance.call(this, name, power);
    this.type = type;
}

PC.prototype = Object.create(EAppliance.prototype);
PC.prototype.constructor = PC;


PC.prototype.setBrand = function(brand) {
    this.brand = brand;
    console.log(`${this.name} is a ${this.brand}.`);
}

const toaster = new Toaster('Toaster', 800, 'champagne');
const pc = new PC('PC', 500, 'HP');

toaster.isPlugged();
pc.isPlugged();

toaster.setColor('blue');
pc.setBrand('HP');

toaster.unPlugged();
pc.unPlugged();