// 일급객체로써의 함수 (2)
const person = {
  name: "john",
  age: 30,
  isMarride: true,
  // sayHello: () => {
  //   console.log(`Hello, My name is " + ${this.name}`);
  // },
  sayHello: function () {
    console.log(`Hello, My name is " + ${this.name}`);
  },
};

person.sayHello();
