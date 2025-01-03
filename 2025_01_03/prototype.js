const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);  //Object.create()
  carl.greet(); // hello!
  

  const personPrototype2 = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }
  
  Object.assign(Person.prototype, personPrototype2);
  // or
  // Person.prototype.greet = personPrototype2.greet;
  