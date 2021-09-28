describe("Thermostat", function() {

  it("should have a start temperature of 20 degrees", function() {
    let thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
   })
  });