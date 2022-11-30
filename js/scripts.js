//Business Logic

function BankAccount (){
  this.initialDeposit = 0;
  this.withdrawals = 0;
  this.deposits = 0;
  this.total=0
}

BankAccount.prototype.addInitialDeposit = function (firstDeposit) {
  this.initialDeposit += firstDeposit;
  return this.initialDeposit;
}

BankAccount.prototype.calculateWithdrawals = function(withdrawAmount) {
  return this.withdrawals += withdrawAmount;
  // if (withdrawAmount > 0){
  //   return this.withdrawals += withdrawAmount;
  // }else {
  //   return this.withdrawals +=0
  // }
}

BankAccount.prototype.calculateDeposits = function(depositAmount) {
  return this.deposits += depositAmount;
  // if (depositAmount > 0){
  //   return this.deposits += depositAmount;
  // }else {
  //   return this.deposits +=0
  // }
}


BankAccount.prototype.findTotal = function () {
  this.total = (this.initialDeposit + this.deposits) - this.withdrawals;
  return this.total;
}


//UI logic

let newBankAccount = new BankAccount

function handleCreateAccount(e){

  e.preventDefault();
  console.log ("running");
  document.querySelector("form#depositWithdraw").removeAttribute("class");
  document.querySelector("form#createAccount").setAttribute("class", "hidden");
  document.querySelector("div#results").removeAttribute("class");
  
  const username = document.querySelector("input#username").value;
  const initialDeposit = parseInt(document.querySelector("input#initialDeposit").value);
  document.querySelector("span#name").innerText= username;
  const initalDepositResult = newBankAccount.addInitialDeposit(initialDeposit);
  document.querySelector("span#total-balance").innerText= initalDepositResult;
  console.log(newBankAccount);

}

function handleDepositWithdrawal(e) {
  e.preventDefault();
 
  document.querySelector("span#total-balance").innerText= null;
  document.querySelector("span#total-withdrawls").innerText= null;
  document.querySelector("span#total-deposits").innerText= null;
  parseInt(document.querySelector("input#initialDeposit").value);
  const depositsInput = parseInt(document.querySelector("input#deposit").value);
  newBankAccount.calculateDeposits(depositsInput);
  const withdrawalInput =parseInt(document.querySelector("input#withdrawal").value);
  newBankAccount.calculateWithdrawals(withdrawalInput);
  const totalAvailable = newBankAccount.findTotal();
  document.querySelector("span#total-balance").innerText=totalAvailable
  document.querySelector("span#total-withdrawls").innerText= newBankAccount.withdrawals
  document.querySelector("span#total-deposits").innerText= newBankAccount.deposits
  
  document.querySelector("input#deposit").value = 0;
  document.querySelector("input#withdrawal").value = 0;

  console.log(newBankAccount);
  
}

window.addEventListener('load', function() {
  document.querySelector("form#createAccount").addEventListener("submit",handleCreateAccount)
  document.querySelector("form#depositWithdraw").addEventListener("submit",handleDepositWithdrawal);
});

//   const withdrawInput = parseInt(document.querySelector("input#withdrawal").value);
//   const totalWithdrawal = newBankAccount.calculateWithdrawals(withdrawInput);
//   document.querySelector("span#total-withdrawls").innerText= totalWithdrawal;

//   const disTotalInitial = newBankAccount.initialDeposit;
//   const disTotalWithdrawal = newBankAccount.withdrawals;
//   const disTotalDeposit = newBankAccount.deposits;
//   const disTotalAmountToDisplay = newBankAccount.findTotal(disTotalInitial, disTotalWithdrawal, disTotalDeposit);
//   console.log(totalAmountToDisplay);
//   console.log(newBankAccount);
//   document.querySelector("span#total-balance").innerText=totalAmountToDisplay;