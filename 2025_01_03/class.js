class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }

  const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles



class Animal {
    sleep() {
      console.log("zzzzzzz");
    }
  }
  
  const spot = new Animal();
  
  spot.sleep(); // 'zzzzzzz'
  
