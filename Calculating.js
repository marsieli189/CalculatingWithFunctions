function zero(operation) {
  if (!operation) {
    return 0;
  } else {
    return operation(0);
  }
}

function one(operation) {
  if (!operation) {
    return 1;
  } else {
    return operation(1);
  }
}

function two(operation) {
  if (!operation) {
    return 2;
  } else {
    return operation(2);
  }
}

function three(operation) {
  if (!operation) {
    return 3;
  } else {
    return operation(3);
  }
}

function four(operation) {
  if (!operation) {
    return 4;
  } else {
    return operation(4);
  }
}

function five(operation) {
  if (!operation) {
    return 5;
  } else {
    return operation(5);
  }
}

function six(operation) {
  if (!operation) {
    return 6;
  } else {
    return operation(6);
  }
}

function seven(operation) {
  if (!operation) {
    return 7;
  } else {
    return operation(7);
  }
}

function eight(operation) {
  if (!operation) {
    return 8;
  } else {
    return operation(8);
  }
}

function nine(operation) {
  if (!operation) {
    return 9;
  } else {
    return operation(9);
  }
}

function plus(num1) {
  return function(num2) {
    return num1 + num2;
  };
}

function minus(num1) {
  return function(num2) {
    return num2 - num1;
  };
}

function times(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

function dividedBy(num1) {
  return function(num2) {
    return Math.floor(num2 / num1);
  };
}



console.log(seven(times(five())));      // Output: 35
console.log(four(plus(nine())));        // Output: 13
console.log(eight(minus(three())));     // Output: 5
console.log(six(dividedBy(two())));     // Output: 3
