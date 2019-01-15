/*
Assignment:
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Feel free to find a challenging way to do something extra if it seems too easy!

Challenge:
The extra challenge I added was to include a test to see if a user-inputted number is prime.
 */

// ask the user for some input

let jobTitle = prompt("What would you like your job title to be?")
let geographicLocation = prompt("Where would you like to live?")
let partnerName = prompt("What is the first name of the person with whom you would like to form or continue a lasting intimate relationship?")
let numberOfChildren = prompt("How many children would you like to have?")
let numberToTry = prompt("Which integer would you like me to test to determine whether it is prime?")

// declare additional variables that will be needed
// let i // CURTIS: It's generally best to declare these kinds of counters in the for loop.
let isPrime = true // CURTIS: Default this to true so that we can just check for the false case

// test whether or not numberToTry is prime
// if (numberToTry == 2 | 3) { // This should be if (numberToTry == 2 || numberToTry == 3) { // CURTIS: "removed"
//    isPrime = true                                                                         // CURTIS: "removed"
//}                                                                                          // CURTIS: "removed"
//else {                                                                                     // CURTIS: "removed"
    // CURTIS: See the bottom of the file for a discussion on this
    for (let i = 2; i < Math.sqrt(numberToTry); i++) {

         if (numberToTry % i == 0) {
            isPrime = false
            break
         }
         
        // isPrime = true // CURTIS: We don't need this anymore
         
    }
//}

// make a case switch statement to answer whether or not numberToTry is prime

let primeText

// CURTIS: Logical OR is ||. Bitwise OR is |. In if statements and what not, we use logical OR ||.
if ((numberToTry == null) || (numberToTry == "")) {
    primeText = "You didn't enter a number to test for primality."
} else { // CURTIS: We normally put else statements on the same line as the curly braces in JavaScript
    switch(isPrime) { // CURTIS: I don't think I've ever seen a swtich statement with a Boolean argument. Normally an if suffices.
        case true:
            primeText = numberToTry + " is a prime number."
            break
        case false:
            primeText = numberToTry + " is not a prime number."
            break
    }
}
// make the results into a string

// CURTIS: Because this is never changes after the first assignment, you can declare this as a const.
// CURTIS: let resultsStringToUser = "Congratulations. You will work as a(n) " + jobTitle + " in " + geographicLocation + ". You will partner with " + partnerName + " and have " + numberOfChildren + " offspring. " + primeText
const resultsStringToUser = "Congratulations. You will work as a(n) " + jobTitle + " in " + geographicLocation + ". You will partner with " + partnerName + " and have " + numberOfChildren + " offspring. " + primeText


// display the results string to the user
console.log(resultsStringToUser)

// console.log(isPrime)


/* DISCUSSION ABOUT FOR LOOPS WITH BREAKS
 *
 * Sometimes you have to break out of a loop because some condition exists in
 * the middle of processing the loop that causes further processing to become
 * invalid. This is *not* that situation.
 *
 * Say you have this kind of thing in your code
 *
 * let foundCondition = false
 * for (let i = 0; i < someValue; i++) {
 *   if (someConditionIsMet(i)) {
 *     foundCondition = true
 *     break
 *   }
 * }
 *
 * What that reads like is, "loop for a while and, if you find some interesting
 * condition, then set a flag and stop the loop by breaking out of it."
 *
 * Interestingly enough, the following thing does the same thing but without the
 * break.
 * 
 * let foundCondition = false
 * for (let i = 0; i < someValue && !foundCondition; i++) {
 *   if (someConditionIsMet(i)) {
 *     foundCondition = true
 *   }
 * }
 *
 * In this case, we use the middle clause of the for-loop declaration to test the
 * flag. Now, the for-loop will stop looping if i gets bigger than some value OR
 * if a condition is found. We can go one step further.
 *
 * let foundCondition = false
 * for (let i = 0; i < someValue && !foundCondition; i++) {
 *   foundCondition = someConditionIsMet(i)
 * }
 *
 * Now, we remove the if statement. In terms of programming, this is less complex
 * than the original and, therefore, more easy to understand, once you become fluent
 * in the programming language.
 */
