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

