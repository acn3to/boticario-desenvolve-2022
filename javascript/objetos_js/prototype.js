// Definindo métodos na propriedade prototype

function Client(name, cpf, email, balance) {
  this.name = name;
  this.cpf = cpf;
  this.email = email;
  this.balance = balance;
  this.deposit = function (value) {
    this.balance += value;
  };
}

function SavingAccountClient(name, cpf, email, balance, savingBalance) {
  Client.call(this, name, cpf, email, balance);
  this.savingBalance = savingBalance;
}

const arnaldo = new SavingAccountClient(
  "Arnaldo",
  "88888888888",
  "costanetoow@gmail.com",
  1000,
  5000
);

console.log(arnaldo);

SavingAccountClient.prototype.depositSavingAccount = function (value) {
  this.savingBalance += value;
};

arnaldo.depositSavingAccount(300);

console.log(arnaldo);
