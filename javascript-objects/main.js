var student = {
  firstName: 'Matthew',
  lastName: 'Abebe',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Business Analyst';
console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous occupation:', student.previousOccupation);

var vehicle = {
  make: 'BMW',
  model: '5 Series',
  year: '2020'
};

vehicle['color'] = 'Blue';
vehicle['isConvertible'] = false;
console.log('Vehicle color:', vehicle['color']);
console.log('Is vehicle a convertible?', vehicle['isConvertible']);
console.log('Vehicle description:', vehicle);

var pet = {
  name: 'Shilo',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('Pet Description:', pet);
