// Herdando atributos e métodos

class Client {
  constructor(name, cpf, email, balance) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.balance = balance;
  }

  deposit(value) {
    this.balance += value;
  }

  showBalance() {
    console.log(`The actual balance is ${this.balance}`);
  }
}

class SavingAccountClient extends Client {
  constructor(name, cpf, email, balance, savingBalance) {
    super(name, cpf, email, balance); // Atributos herdados
    this.savingBalance = savingBalance; // Novos atributos
  }

  depositSavingAccount(value) {
    this.savingBalance += value;
  }
}

const arnaldo = new SavingAccountClient(
  "Arnaldo",
  "88888888888",
  "costanetoow@gmail.com",
  1000,
  1500
);

console.log(arnaldo);

arnaldo.deposit(50); // Método da class Client

arnaldo.depositSavingAccount(300); // Método da class SavingAccountClient

console.log(arnaldo);
