import Service from "./modules/service";

const { on } = new Service();

on("ADD", ({ a, b }, response) => {
  response(a + b);
});

on("MINUS", ({ a, b }, response) => {
  response(a - b);
});
