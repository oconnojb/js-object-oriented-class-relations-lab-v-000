let driverId = 0;

let store = { drivers: [], trips: [], passengers: [] };

class Driver {
  constructor(name) {
    this.Id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
}
