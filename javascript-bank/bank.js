/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {

  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  } else {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
  }
  return account.number;
};

Bank.prototype.getAccount = function (number) {

  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;

  for (var i = 0; i < this.accounts.length; i++) {
    grandTotal += this.accounts[i].getBalance();
  }
  return grandTotal;
};
