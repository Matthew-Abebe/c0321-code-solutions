function convertMinutesToSeconds(minutes) {
  var numberOfSeconds = minutes * 60;
  return numberOfSeconds;
}
console.log('Minutes to seconds:', convertMinutesToSeconds(5));

function greet(name) {
  return ('Hey, ' + name);
}
console.log('Greeting:', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('Area:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('First name:', getFirstName({ firstName: 'Michael', lastName: 'Jordan' }));

function getLastElementArray(array) {
  var arrayCount = array.length;
  var lastArrayEl = arrayCount - 1;
  return array[lastArrayEl];
}
console.log('Last element of array:', getLastElementArray(['Milk', 'Cheese', 'Eggs', 'Bread']));
