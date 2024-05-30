//Encapsulation is the bundling of data with the methods that operate on that data. It restricts direct access to some of an object's components, which can prevent the accidental modification of data.

class Person {
    constructor(name, age) {
      let _name = name;
      let _age = age;
  
      this.getName = function() {
        return _name;
      }
  
      this.getAge = function() {
        return _age;
      }
  
      this.setName = function(name) {
        _name = name;
      }
  
      this.setAge = function(age) {
        if (age > 0) {
          _age = age;
        }
      }
    }
  }
  
  const person = new Person('John', 30);
  console.log(person.getName()); // Output: John
  person.setAge(31);
  console.log(person.getAge());  // Output: 31
  
