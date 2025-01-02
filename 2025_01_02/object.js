function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }
  const salva = createPerson("Salva");
  salva.introduceSelf();  



class Person {
    constructor(name) {
        this.name = name;
        this.introduceSelf = function () {
            console.log(`Hi! I'm ${this.name}.`);
        };
    }
}
const salvai = new Person("Salvai");  
salvai.introduceSelf();


function PersonName(name="selvan") {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
    const salvan =new PersonName("Salvan"); 
    salvan.introduceSelf();
    console.log(salvan.age);
    salvan.age=25;
    console.log(salvan.age);

    const salvu=new PersonName("Salvu");
    

  PersonName.prototype.age = 55;
  console.log(salvu.age);
  console.log(salvan.age);
//   PersonName.prototype.brand = "BMW";
//   console.log(salvan.age);
//   const salvan2 = new PersonName("Salvan2");
//   console.log(salvan2.age);
//   console.log(salvan2.brand);
