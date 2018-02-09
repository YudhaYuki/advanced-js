/*

////////////////////////-------Function constructor--------/////////////////////////////


// object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// A function, with always capital for its first letter
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

// We can also add properties instead of methods likes above, but it's not really commom.
// The following is the example
Person.prototype.lastName = 'Smith';

// This is how we create new objects, using the contruction function
// This is called instantiation, because the objects here are instances of the person object
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/


////////////////////------------ Object.create ------------------/////////////////
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto,
     {
         name: { value: 'Jane' },
         yearOfBirth: { value: 1969 },
         job: { value: 'designer' }
     });
*/





//////////////////////////////// ----------- PRIMITIVE vs OBJECTS -------------------//////////////////
/*
// Primitive
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age= 30;
console.log(obj1.age);
console.log(obj2.age);


// Function
var age = 27;
var obj = {
    name: 'Yudha',
    city: 'Rotterdam'
};

function change(a, b) {
    a = 30;
    b.city = 'Brussels';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/

////////////////////////--------- Passing functions as arguments -----------/////////////////////

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));        
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
// console.log(fullAges);
console.log(rates);
*/

///////////////////////////////--------------- Functions returning functions -----------////////////////////////
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

// Another way to do that
interviewQuestion('teacher')('Mark');
*/



//////////////////////-------------- IIFE (Immediately Invoke Function Expression) ----------------/////////////////////

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(4);
*/




///////////////////////////// ----------- CLOSURE --------------- /////////////////

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
} 

var retirementUS = retirement(66);
// retirementUS(1990);

// The same as above
// retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);