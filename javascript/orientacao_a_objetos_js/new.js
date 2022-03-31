// function User(name, email) {
//   this.name = name;
//   this.email = email;

//   this.showInfo = function () {
//     return `
//     Name: ${this.name}
//     Email: ${this.email}
//     `;
//   };
// }

// const newUser = new User("Arnaldo", "costanetoow@gmail.com");
// console.log(newUser.showInfo());

// function Admin(role) {
//   User.call(this, "Neto", "netocosta@gmail.com");
//   this.role = role || "student";
// }

// Admin.prototype = Object.create(User.prototype);
// const newUser2 = new Admin("admin");
// console.log(newUser2.showInfo());
// console.log(newUser2.role);

const user = {
  init: function (name, email) {
    this.name = name;
    this.email = email;
  },
  showInfo: function (name) {
    return this.name;
  },
};

// const newUser3 = Object.create(user);
// console.log(newUser3.showInfo("Neto"));
// console.log(user.isPrototypeOf(newUser3));

const newUser4 = Object.create(user);
newUser4.init("Paula", "paula@gmail.com");
console.log(newUser4.showInfo());
