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
let i
let isPrime = false

// test whether or not numberToTry is prime
if (numberToTry == 2 | 3) {
    isPrime = true
}
else {
    for (i = 2; i < Math.sqrt(numberToTry); i++) {

         if (numberToTry % i == 0) {
            isPrime = false
            break
         }
         
        isPrime = true
         
    }
}

// make a case switch statement to answer whether or not numberToTry is prime

let primeText
if ((numberToTry == null) | (numberToTry == "")) {
    primeText = "You didn't enter a number to test for primality."
}
else {
    switch(isPrime) {
        case true:
            primeText = numberToTry + " is a prime number."
            break
        case false:
            primeText = numberToTry + " is not a prime number."
            break
    }
}
// make the results into a string

let resultsStringToUser = "Congratulations. You will work as a(n) " + jobTitle + " in " + geographicLocation + ". You will partner with " + partnerName + " and have " + numberOfChildren + " offspring. " + primeText

// display the results string to the user
console.log(resultsStringToUser)

// console.log(isPrime)
