import User from "./User.js";

class Teacher extends User {
  constructor(name, email, bornDate, role = "teacher", active = true) {
    super(name, email, bornDate, role, active);
  }

  aproveStudent(student, course) {
    return `Student ${student} aproved on course ${course}`;
  }
}

const newTeacher = new Teacher("Ana", "a@gmail.com", "14/01/1994");
console.log(newTeacher);
console.log(newTeacher.showInfo());
console.log(newTeacher.aproveStudent("Fugencio", "Python"));
