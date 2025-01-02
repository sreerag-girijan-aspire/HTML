const myCity = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myCity.greet();


  console.log(myCity.valueOf["length"].toString());
  console.log(typeof(myCity));
  console.log(myCity.__proto__);
  console.log(Object.getPrototypeOf(myCity));
