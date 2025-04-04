// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let clients = [];
  let deposits, sum;
  for (let i = 0; i < array.length; i++) {
    deposits = array[i].deposits;
    if (deposits != undefined) {
      sum = 0;
      for (let n = 0; n < deposits.length; n++) {
        sum += deposits[n];
      }
      if (sum < 2000) {
        clients.push(array[i]);
      }
    } else {
      clients.push(array[i]);
    }
  }
  return clients;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
