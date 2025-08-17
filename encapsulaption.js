class CoffeeMachine {
  #temperature = 90;
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
  }

  set temperature(_) {
    console.log(`Temperature is set to ${_} degrees. You cannot change it`);
  }

  get temperature() {
    return this.#temperature;
  }
}

const coffe = new CoffeeMachine(100);
console.log(coffe.temperature);