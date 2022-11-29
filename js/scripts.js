//Business Logic

function BankAccount (name, initialDeposit){
  this.name= name;
  this.initialDeposit = initialDeposit;
  this.withdrawals = 0;
  this.deposits = 0;
  this.total=0
}

BankAccount.prototype.addInitialDeposit = function (firstDeposit) {
  this.total += Number(firstDeposit);
  return this.total;
}

BankAccount.prototype.calculateWithdrawals = function(withdrawAmount) {
  if (withdrawAmount && (withdrawAmount>0)) {
    this.withdrawals += withdrawAmount;
  } else if (withdrawAmount<0){
    return false;
    //address error message in UI
  }
}

BankAccount.prototype.calculateDeposits = function(depositAmount) {
  if (depositAmount && (depositAmount>0)) {
    this.deposits += depositAmount;
  } else if (depositAmount<0){
    return false;
    //address error message in UI
  }
}

BankAccount.prototype.findTotal = function () {
  this.total = this.initialDeposit + this.deposits - this.withdrawal;
}