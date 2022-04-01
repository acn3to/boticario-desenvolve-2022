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

  #createObject() {
    return {
      name: this.#name,
      email: this.#email,
      bornDate: this.#bornDate,
      role: this.#role,
      active: this.#active,
    };
  }

  showInfo() {
    const userObject = this.#createObject();
    return `
    Name: ${userObject.name} 
    Email: ${userObject.email}
    Birth Date: ${userObject.bornDate}o
    Role: ${userObject.role}
    Active: ${userObject.active}
    `;
  }
}
