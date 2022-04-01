export default class User {
  #name;
  #email;
  #bornDate;
  #role;
  #active;
  constructor(name, email, bornDate, role, active = true) {
    this.#name = name;
    this.#email = email;
    this.#bornDate = bornDate;
    this.#role = role || "student";
    this.#active = active;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get bornDate() {
    return this.#bornDate;
  }

  get role() {
    return this.#role;
  }

  get active() {
    return this.#active;
  }

  set name(newName) {
    if (newName === "") {
      throw new Error("Invalid format");
    }
    this.#name = newName;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  set bornDate(newBornDate) {
    this.#bornDate = newBornDate;
  }

  set role(newRole) {
    this.#role = newRole;
  }

  set active(newActive) {
    this.#active = newActive;
  }

  showInfo() {
    return `
    Name: ${this.name} 
    Email: ${this.email}
    Birth Date: ${this.bornDate}o
    Role: ${this.role}
    Active: ${this.active}
    `;
  }
}
