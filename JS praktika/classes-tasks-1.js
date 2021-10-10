/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);

3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);

5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/
// 1.
class Automobilis {
  brand;
  model;
  price;

  constructor(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
};

// 2.
const car1 = new Automobilis ('Opel', 'Admiral', 10500);
const car2 = new Automobilis('Tesla', 'Roadster', 215000);
const car3 = new Automobilis('Bugatti', 'Chiron', 250000);
const car4 = new Automobilis('Toyota', 'Celica', 7500);

// 3.
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);

// 4.
console.log(car1.brand);
console.log(car2.brand);
console.log(car3.brand);
console.log(car4.brand);

console.log(car1.model);
console.log(car2.model);
console.log(car3.model);
console.log(car4.model);

console.log(car1.price);
console.log(car2.price);
console.log(car3.price);
console.log(car4.price);

// 5.
car1.price = car1.price + 100;
car2.price = car2.price + 100;
car3.price = car3.price + 100;
car4.price = car4.price + 100;

console.log(car1.price);
console.log(car2.price);
console.log(car3.price);
console.log(car4.price);

// 6.
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);