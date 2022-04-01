import User from "./User.js";
import Teacher from "./Teacher.js";
import Admin from "./Admin.js";

const newUser = new User("Arnaldo", "costa.neto@gmail.com", "06/05/1993");
console.log(newUser.showInfo());

newUser.#name = "Costa";
newUser.#email = "neto@gmail.com";
newUser.#bornDate = "06/12/1988";

// const newAdmin = new Admin("Rodrigo", "rodrigo@gmail.com", "05/09/1998");
// console.log(newAdmin);
// console.log(newAdmin.showInfo());
// console.log(newAdmin.createCourse("JavaScript", 20));

// const newTeacher = new Teacher("Ana", "a@gmail.com", "14/01/1994");
// console.log(newTeacher);
// console.log(newTeacher.showInfo());
// console.log(newTeacher.aproveStudent("Fugencio", "Python"));
