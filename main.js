let raceNumber = Math.floor(Math.random() * 1000);
let age = prompt('How old are you?')
let registration = prompt('did you register early? yes or no: ');


// if (age > 18 && registration === 'yes') {
//   console.log(age)
//   console.log(raceNumber )
// };
console.log(age)
if (age > 18 && registration === 'yes') {
  console.log(`Your race will commence at 9:30am, here is your race number: ${raceNumber * 10}`);
} else if (age > 18 && registration === 'no') {
  console.log(`Your race will commence at 11:00am, here is your race number: ${raceNumber}`);
} else if (age < 18) {
  console.log(`Your race will commence at 12:30pm, here is your race number: ${raceNumber}`)
}
