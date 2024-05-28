interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  count: number;
  model: string;
  year: number;
  make: string;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    (this.model = model), (this.year = year);
  }


  start(): void {
    console.log("engine started");
  }
}


const CarOne = new Car("Nissan","GTR 34",1999)

CarOne.start()