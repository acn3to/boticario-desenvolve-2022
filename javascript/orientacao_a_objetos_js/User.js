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

  showInfo() {
    return `Name: ${this.#name}, Email: ${this.#email}`;
  }
}
