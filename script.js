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

/*
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



// Example II
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('John');

*/

///////////////////////////// ----------- BIND, CALL, APPLY --------------- /////////////////
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a '+ this.job + ' and I\'m '+ this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a '+ this.job + ' and I\'m '+ this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

// Call method allows us to set the "this" variable here in the first argument, and we set it to emily, because we want to use john's presentation method, but setting the this variable to "emily", so that we can use john's method on emily
john.presentation.call(emily, 'friendly', 'afternoon');


// apply method, the only difference is that this one accepts the argument as an array, so that's only two arguments, first emily variale, and then an array where all the other arguments go
// but this is not gonna work, because our method does not expect to receive an array as the input
// So the presentation want two normal arguments 
// john.presentation.apply(emily, ['friendly', 'afternoon']);


// BIND, is very similar to call method as well
// So it also allows us to set THIS variable explicitely
// the difference is, but it does not immediately call the function
// instead generates a copy of the function, so that we can store it somewhere
// it useful to create function with preset argument
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



////////////////////////////ANOTHER EXAMPLE from Previous exercie
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

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);

console.log(fullJapan)

*/
///////////////////////////////---------- CODING CHALLENGE ----------------/////////////////////


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// 7 Immediately Invoke function
/*
(function(){

})();
*/

/*
(function(){
    // 1
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    // 4
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    // Check if the answer is correct
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer, try again!');
        }
    }

    // 2
    var q1 = new Question('Is Javascript the coolest programming language i the world?', ['Yes', 'No'], 0);
    var q2 = new Question('what is the name of this course\' teacher?', ['john', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

    // 3 
    var questions = [q1, q2, q3];

    // 4
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    // parsInt converts string to an integernumber
    var answer = parseInt(prompt('Please select the correct answer.'));

    // Call the correctAnswer method
    questions[n].checkAnswer(answer);
})();
*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


(function(){
    // 1
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    // 4
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    // Check if the answer is correct
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer, try again!');
        }
    }

    // 2
    var q1 = new Question('Is Javascript the coolest programming language i the world?', ['Yes', 'No'], 0);
    var q2 = new Question('what is the name of this course\' teacher?', ['john', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);



    var questions = [q1, q2, q3];

    // 8
    function nextQuestion() {
    
        var n = Math.floor(Math.random() * questions.length);
    
        questions[n].displayQuestion();
    
        // parsInt converts string to an integernumber
        var answer = parseInt(prompt('Please select the correct answer.'));
    
        // Call the correctAnswer method
        questions[n].checkAnswer(answer);

        if(answer !== 'exit') {
            questions[n].checkAnswer(answer);
            
            nextQuestion();   
        }     
    }

    nextQuestion();

})();


