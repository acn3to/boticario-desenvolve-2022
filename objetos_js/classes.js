// Orientação a objetos - Utilizando classes

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

const arnaldo = new Client(
  "Arnaldo",
  "88888888888",
  "costanetoow@gmail.com",
  1500
);

console.log(arnaldo);

arnaldo.showBalance();

arnaldo.deposit(1000);

console.log(arnaldo);

arnaldo.showBalance();
