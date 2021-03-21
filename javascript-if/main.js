/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

isUnderFive(3);
isUnderFive(8);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEven(4);
isEven(7);

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

startsWithJ('Jupiter');
startsWithJ('Mars');

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

var Kev = {
  name: 'Kevin',
  age: 32
};

isOldEnoughToDrink(Kev);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

var Duke = {
  name: 'Duke',
  age: 17
};

isOldEnoughToDrive(Duke);

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  }
}

var Tom = {
  name: 'Tom',
  age: 42
};

isOldEnoughToDrinkAndDrive(Tom);

function categorizeAcidity(pH) {
  if (pH < 7) {
    return ('is acidic');
  } else if (pH === 7) {
    return ('is neutral');
  } else if (pH > 7 && pH < 14) {
    return ('is basic');
  } else {
    if (pH > 14) {
      return ('invalid pH level');
    }
  }
}

categorizeAcidity(4);
categorizeAcidity(7);
categorizeAcidity(10);
categorizeAcidity(20);

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return ("We're the warner brothers!");
  } else if (name === 'dot') {
    return ("I'm cute~");
  } else {
    return ('Goodnight everybody!');
  }
}

introduceWarnerBro('yakko');
introduceWarnerBro('yakko');
introduceWarnerBro('dot');
introduceWarnerBro('dakko');
