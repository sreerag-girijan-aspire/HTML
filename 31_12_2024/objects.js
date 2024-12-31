const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  
console.log(person.name);
console.log(person.name[0]);
console.log(person.age);

person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."


const person2 = {
    name: {
      first: "Bob",
      last: "Smith",
    },
    // …
  };
  
console.log(person2.name.first);
console.log(person2.name.last);