const user = {
  name: "John",
  email: "j@j.com",
  bornDate: "2015/01/01",
  role: "admin",
  active: true,

  showInfo: function () {
    console.log(
      `
      Name: ${this.name}
      Email: ${this.email}
      Born date: ${this.bornDate},
      Role: ${this.role}
      Active: ${this.active}
      `
    );
  },

  showMessage(name, email) {
    console.log(`User: ${name}, email: ${email}`);
  },

  callFunction: function (fn) {
    fn.apply(user, [this.name, this.email]);
  },
};

// user.showInfo();

// const show = function () {
//   console.log(this.name);
// };

// const showName = show.bind(user); // Bind: É usado para ligar(bind) o valor de this a um determinado contexto.

// showName();
// show();

// show.call(user); //Call: É possível atribuir um this diferente do contexto atual ao executar a função.

user.callFunction(user.showMessage); // O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array.
