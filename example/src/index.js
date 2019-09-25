import Client from "./modules/client";

const { post } = new Client("./worker.js");

console.log("start");

console.time("time1");
post("ADD", { a: 1, b: 2 }, data => {
  console.timeEnd("time1");
  console.log("ADD result 1+2 =", data);
});

post("ADD", { a: 2, b: 3 }, data => console.log("ADD result 2+3 =", data));

post("ADD", { a: 3, b: 4 }, data => console.log("ADD result 3+4 =", data));

post("MINUS", { a: 2, b: 1 }, data => console.log("MINUS result 2-1 =", data));

post("MINUS", { a: 4, b: 2 }, data => console.log("MINUS result 4-2 =", data));

post("MINUS", { a: 4, b: 1 }, data => console.log("MINUS result 4-1 =", data));
