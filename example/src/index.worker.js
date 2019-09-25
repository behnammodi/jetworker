import Service from "./modules/service";

const { on } = new Service();

on("ADD", ({ a, b }, res) => {
  res(a + b);
});

on("MINUS", ({ a, b }, res) => {
  res(a - b);
});
