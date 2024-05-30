//Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. It helps in reducing programming complexity and effort.

class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log('The car has started.');
    }
  
    stop() {
      console.log('The car has stopped.');
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla', 2020);
  myCar.start(); // Output: The car has started.
  myCar.stop();  // Output: The car has stopped.
  