//convenient method used for translation from pyplasm
T = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
     return object.clone().translate(dims, values);
    };
  };
};
  
R = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });
   
  return function (angle) {
    return function (object) {
      return object.clone().rotate(dims, angle);
    };
  };
};
  
S = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
      return object.clone().scale(dims, values);
    };
  };
};

S3 = S2;
S2 = S1;
S1 = S0;

GRID = SIMPLEX_GRID;

NN = REPLICA;

VIEW = DRAW;

// --- generate two windows with black color ---
windowssud = COLOR([0,0,0])(GRID(([[1],[-4,63],[-33-4-5,25]])))
windowssud2 = COLOR([0,0,0])(GRID(([[1],[-4,63],[-33-4-5-25-5-5-3,22]])))

// --- putting all togheter---
building = STRUCT([windowssud,windowssud2])
VIEW(building)