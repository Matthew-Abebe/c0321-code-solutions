/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit', amount);

  for (var i = 0; i < this.transactions.length; i++) {
    if (transaction.amount > 0) {
      this.transactions.push(transaction.amount);
    } else if (transaction.amount < 0) {
      return false;
    }
  }
  return true;
};

Account.prototype.withdraw = function (amount) {

};

Account.prototype.getBalance = function () {

};
