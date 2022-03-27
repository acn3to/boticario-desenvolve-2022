// Funções construtoras - Herança

function Client(name, cpf, email, balance) {
  this.name = name;
  this.cpf = cpf;
  this.email = email;
  this.balance = balance;
  this.deposit = function (value) {
    this.balance += value;
  };
}

const arnaldo = new Client(
  "Arnaldo",
  "88888888888",
  "costanetoow@gmail.com",
  1000
);

console.log(arnaldo);

// Método call()
function SavingAccountClient(name, cpf, email, balance, SavingBalance) {
  Client.call(this, name, cpf, email, balance);
  this.SavingBalance = SavingBalance;
}

const paula = new SavingAccountClient(
  "Paula",
  "99999999999",
  "ana.paula@gmail.com",
  1000,
  5000
);

console.log(paula);
