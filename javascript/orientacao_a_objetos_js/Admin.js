import User from "./User.js";

class Admin extends User {
  constructor(name, email, bornDate, role = "admin", active = true) {
    super(name, email, bornDate, role, active);
  }

  createCourse(courseName, vacancies) {
    return `Course of ${courseName} created with ${vacancies} vacancies`;
  }
}

const newAdmin = new Admin("Rodrigo", "rodrigo@gmail.com", "05/09/1998");
console.log(newAdmin);
console.log(newAdmin.showInfo());
console.log(newAdmin.createCourse("JavaScript", 20));
