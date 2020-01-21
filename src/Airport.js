var plane = {}

function Airport(capacity, planes_array){
  this.capacity = capacity
  this.planes = planes_array
  this.land = function(plane){
    if (capacity > this.planes) {
      this.planes.push(plane)
    return(this.planes)
    }
    else {
    return(this.planes)
    }

  };
  this.takeoff = function(plane){
    return(this.planes.pop(plane))
  };
  this.isFull = function(){
    return(this.capacity <= this.planes.length)
  };
};

