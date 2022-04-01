import User from "./User.js";
import Teacher from "./Teacher.js";
import Admin from "./Admin.js";

const newUser = new User("Arnaldo", "costa.neto@gmail.com", "06/05/1993");
console.log(newUser.showInfo());

const newAdmin = new Admin("Paula", "paula@gmail.com", "14/01/1994");
console.log(newAdmin.showInfo());
console.log(newAdmin.adminName());
