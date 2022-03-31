function createUser(name, email) {
  return {
    name,
    email,
    showInfo() {
      return `${name}, ${email}`;
    },
  };
}

const newUser = createUser("Rodrigo", "r@r.com");
console.log(newUser);
console.log(newUser.showInfo());
