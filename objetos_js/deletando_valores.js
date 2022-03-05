// Deletando valores de um objeto

const objChar = {
  name: "Gandalf",
  class: "mage",
  level: "20",
  ally: {
    name: "Saruman",
    class: "mage",
  },
  status: "missing",
};

// delete objChar.ally;

// console.log(objChar.ally); //undefined

delete objChar.ally;
delete objChar["status"];

console.log(objChar.ally); //undefined
console.log(objChar.status); //undefined

console.log(objChar);
