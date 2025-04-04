// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let clients = [];
  let deposits, withdrawals, sum;
  for (let i = 0; i < array.length; i++) {
    deposits = array[i].deposits;
    withdrawals = array[i].withdrawals;
    sum = 0;
    if (deposits != undefined) {
      for (let n = 0; n < deposits.length; n++) {
        sum += deposits[n];
      }
    }
    if (withdrawals != undefined) {
      for (let n = 0; n < withdrawals.length; n++) {
        sum -= withdrawals[n];
      }
    }
    if (!(sum == array[i].balance)) {
      clients.push(array[i]);
    }
  }
  return clients;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
