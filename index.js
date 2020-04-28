
var animal = 'dog';
=======
var animal = 'animal';
>>>>>>> d7772d447bfda59b73b3045e110abdd600d27204

function myAnimal() {
  // You should not need to modify this function
  return animal;
}

function yourAnimal() {
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope 
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  return animal;
}
<<<<<<< HEAD
var number = 925;
=======
var number = n;
>>>>>>> d7772d447bfda59b73b3045e110abdd600d27204
function add2(n) {
  return n + two;

  // Feel free to move things around!
<<<<<<< HEAD
  const two = (n);
=======
  const two = (2);
>>>>>>> d7772d447bfda59b73b3045e110abdd600d27204
}

var funkyFunction = function() {
  return function() {
    return "theFunk";
  };
};


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!";