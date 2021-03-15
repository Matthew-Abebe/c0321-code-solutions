var width = 50;
var height = 30;
var area = width * height;

console.log('Area:', area);
console.log('Area is typeof:', typeof area);

var bill = 150;
var payment = 200;
var change = payment - bill;
console.log('Change:', change);
console.log('Change is typeof:', typeof change);

var quizzes = 95;
var midterm = 88;
var final = 96;
var grade = (quizzes + midterm + final) / 3;
console.log('Grade:', grade);
console.log('Grade is typeof:', typeof grade);

var firstName = 'Matthew';
var lastname = 'Abebe';
var fullName = firstName + ' ' + lastname;
console.log('Full name:', fullName);
console.log('fullName is typeof:', typeof fullName);

var pH = 5;
var isAcidic = pH < 7;
console.log('Is acidic:', isAcidic);
console.log('isAcidic is typeof', typeof isAcidic);

var headCount = 20;
var isSparta = headCount === 300;
console.log('Is Sparta:', isSparta);
console.log('isSparta is typeof:', typeof isSparta);

var motto = fullName;
motto += ' ' + 'is the GOAT';
console.log('Motto:', motto);
console.log('motto is typeof', typeof motto);
