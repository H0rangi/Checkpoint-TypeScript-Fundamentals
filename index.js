var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        (this.model = model), (this.year = year);
    }
    Car.prototype.start = function () {
        console.log("engine started");
    };
    return Car;
}());
var CarOne = new Car("made", "supra", 1997);
CarOne.start();
