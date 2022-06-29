let age = 19;
let userName = 'Eli';
let hobbies = ['Cooking', 'Gaming', 'Reading'];
let job = {
  title: 'Developer',
  place: 'New York',
  salary: '50000',
};

let totaladultYears;

function calculateAdultYears(userAge, anotherParameter) {
  return userAge - 18;
  // or let result;
  //result = userAge - 18;
  //return result;
}

totalAdultYears = calculateAdultYears(age);
alert(adultYears);

age = 20;
totalAdultYears = calculateAdultYears(age);
alert(adultYears);
