import User from "./User.js";

export default class Admin extends User {
  constructor(name, email, bornDate, role = "admin", active = true) {
    super(name, email, bornDate, role, active);
  }

  adminName() {
    return `${this.name}`;
  }

  createCourse(courseName, vacancies) {
    return `Course of ${courseName} created with ${vacancies} vacancies`;
  }
}
