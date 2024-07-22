class EAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.turnIn = false;
    }
  
    isPlugged() {
      this.turnIn = true;
      console.log(`${this.name} is turned in`);
    }
  
    unPlugged() {
      this.turnIn = false;
      console.log(`${this.name} is turned off`);
    }
}
  
  class Toaster extends EAppliance {
    constructor(name, power, color) {
      super(name, power);
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
      console.log(`${this.name} is ${this.color}.`);
    }
}
  
  class PC extends EAppliance {
    constructor(name, power, type) {
      super(name, power);
      this.type = type;
    }
  
    setBrand(brand) {
      this.brand = brand;
      console.log(`${this.name} is a ${this.brand}.`);
    }
}
  
  const toaster = new Toaster('Toaster', 800, 'champagne');
  const pc = new PC('PC', 500, 'desktop');
  
  toaster.isPlugged();
  pc.isPlugged();
  toaster.setColor('blue');
  pc.setBrand('HP');
  toaster.unPlugged();
  pc.unPlugged();
  