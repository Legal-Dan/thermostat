describe("Thermostat", function() {

  it("should have a start temperature of 20 degrees", function() {
    let thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
   })

   it("should be possible to increase the temperature", function() {
    let thermostat = new Thermostat();
    thermostat.increaseTemp(5)
    expect(thermostat.temperature).toEqual(25);
   })

   it("should be possible to decrease the temperature", function() {
    let thermostat = new Thermostat();
    thermostat.decreaseTemp(5)
    expect(thermostat.temperature).toEqual(15);
   })

  });