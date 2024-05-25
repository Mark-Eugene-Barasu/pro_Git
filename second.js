// this sure is a single lined comment here

// this will bring out any random number between 1 and 10
console.log(Math.round(Math.random() * 10 + 1));

/* creating a constructor function in JavaScript */
function MakePerson(firstName, LastName, age, interest = `program`){
   this.firstName = firstName,
   this.LastName = LastName,
   this.age = age,
   this.interest = interest,
   this.fullName = function() {
      return `My name is ${this.firstName} ${this.LastName}, and I'm ${this.age} years of age. \nI love to ${interest} for fun`
   }
}

// creating first object out of the constructor function
const firstPerson = new MakePerson(`Eugene`, `Barasu`, 24, `coding`);

/* 
creating the second person object from the constructor function
*/
const second_person = new MakePerson(`Abigail`, `Sapor`, 32);


// creating the thirdPerson
const thirdPerson = new MakePerson(`Alphred`, `Saloon`, 37, `real-estate`)


// logging the constructor function methods of each person object
console.log(firstPerson.fullName());
console.log(second_person.fullName());
console.log(thirdPerson());

