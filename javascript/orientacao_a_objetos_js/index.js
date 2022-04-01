import User from "./User.js";
import Teacher from "./Teacher.js";
import Admin from "./Admin.js";

// const newUser = new User("Arnaldo", "costa.neto@gmail.com", "06/05/1993");
// console.log(newUser.showInfo());

// const newAdmin = new Admin("Paula", "paula@gmail.com", "14/01/1994");
// newAdmin.name = "";
// console.log(newAdmin.name);
// console.log(newAdmin.showInfo());

const newUser = new User("Neto", "Costa", "n@n.com", "06/05/1984");
console.log(newUser.name);
newUser.name = "Uzumaki Boruto Redan";
console.log(newUser.name);
console.log(newUser.lastName);
