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

// --- l = stair width
// --- n = number of steps
// --- g = height of ground
// --- a = raiser
// --- p = footprint
l = 50.0
n = 13.0
g = 4.0
a = 35.0/n 
p = l/n

// --- generate the step with vertex and cells
vertici = [[0,0],[0,g+a/2.0],[p,a/2.0],[p,g+a/2.0]]
celle = [[1,2,3,4]]
var step2D = SIMPLICIAL_COMPLEX(vertici)([[0,2,1],[1,2,3]]);

// --- generate the step in 3D from the step in 2D
step3D = MAP([S1,S3,S2])(EXTRUDE([15])(step2D))

// --- generate a singular stair
ramp = STRUCT(REPLICA(n)([step3D,T([1,3])([p,a])]))

// --- traslate and multiplicate them to fit with the building
stair1 = T([1,2])([35,72])(ramp)

stair2 = T([1,2,3])([17.5,72,38])(ramp)

stair3 = T([1,2,3])([75,77,74])(ramp)

// --- putting all togheter---
building = STRUCT([stair1,stair2,stair3])
VIEW(building)