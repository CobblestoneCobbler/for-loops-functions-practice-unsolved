// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let greatestIndex = 0;
  let greatestBalance = array[0].balance;
  let thisBalance;
  for (let i = 1; i < array.length; i++) {
    thisBalance = array[i].balance; //reduces amount of times bankAccounts is run through to find balance
    if (thisBalance > greatestBalance) {
      greatestBalance = thisBalance;
      greatestIndex = i;
    }
  }
  return [array[greatestIndex]];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
