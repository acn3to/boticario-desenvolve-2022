export default class User {
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
