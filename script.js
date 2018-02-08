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
    this.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
    }
}

// This is how we create new objects, using the contruction function
// This is called instantiation, because the objects here are instances of the person object
var john = new Person('John', 1990, 'teacher');

john.calculateAge();


