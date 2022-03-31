const user = {
  name: "John",
  email: "j@j.com",
  bornDate: "2015/01/01",
  role: "admin",
  active: true,

  showInfo: function () {
    console.log(
      `
      Name: ${this.name}
      Email: ${this.email}
      Born date: ${this.bornDate},
      Role: ${this.role}
      Active: ${this.active}
      `
    );
  },
};

// user.showInfo();

const show = function () {
  console.log(this.name);
};

const showName = show.bind(user);

showName();
// show();
