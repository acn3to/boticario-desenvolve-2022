class User {
  constructor(name, email, bornDate, role, active = true) {
    this.name = name;
    this.email = email;
    this.birthDate = bornDate;
    this.role = role || "student";
    this.active = active;
  }

  showInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

const newUser = new User("Arnaldo", "costaneto@gmail.com", "06/05/1993");

console.log(newUser);
console.log(newUser.showInfo());
console.log(User.prototype.isPrototypeOf(newUser));
