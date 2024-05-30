//Polymorphism allows objects of different classes to be treated as objects of a common superclass. It is achieved through method overriding and method overloading (though JavaScript doesn't support method overloading directly).
class Bird {
    fly() {
      console.log('The bird is flying.');
    }
  }
  
  class Sparrow extends Bird {
    fly() {
      console.log('The sparrow is flying.');
    }
  }
  
  class Eagle extends Bird {
    fly() {
      console.log('The eagle is flying.');
    }
  }
  
  const bird1 = new Sparrow();
  const bird2 = new Eagle();
  
  bird1.fly(); // Output: The sparrow is flying.
  bird2.fly(); // Output: The eagle is flying.
  