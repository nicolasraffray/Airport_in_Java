

describe('An Airport', function(){
  var airport 

  describe('land', function(){

    it('adds a plane into an array', function() {
      airport = new Airport(5, [])
      expect(airport.land(plane)).toContain(plane);
    });

    it('does not land plane, if at capacity', function() {
      airport = new Airport(1, [plane])
      airport.land(plane)
      expect(airport.planes.length).toEqual(1)
    });
  });

  describe('takeoff', function(){
    it('removes a plane from an array', function() {
      airport = new Airport(5, [plane])
      expect(airport.takeoff(plane)).not.toContain(plane)
    });
  });

  describe('isFull', function() {
    it('returns true if airport is full', function() {
      airport = new Airport(2, [plane, plane])
      expect(airport.isFull()).toBe(true)
    });
    it('returns true if airport is over capacity', function(){
      airport = new Airport(1, [plane, plane])
      expect(airport.isFull()).toBe(true)
    });
  });

    describe('default capacity', function() {
      it('has capacity when capacity not given', function() {
        airport = new Airport()
        expect(airport.capacity).toEqual(5)
        expect(airport.planes).toEqual(Array(0))
      });
    });
});

// describe('Plane', function(){
//   var plane 

//   describe('a plane', function(){

//     it('it exists')
//   })
// })