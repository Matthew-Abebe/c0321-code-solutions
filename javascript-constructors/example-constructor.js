function ExampleConstructor() {

}
console.log('Value prototype property of ExampleConstructor: ', ExampleConstructor.prototype);
console.log('Value typeof prototype property of ExampleConstructor: ', typeof ExampleConstructor.prototype);

var aFunction = new ExampleConstructor();
console.log('Value of aFunction: ', aFunction);

var aFunctionInstanceOf = aFunction instanceof ExampleConstructor;
console.log('Value of aFunctionInstanceOf: ', aFunctionInstanceOf);
