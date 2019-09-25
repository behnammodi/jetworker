import Service from "./modules/service";

const service = new Service();

service.on("ADD", (req, res) => {
  res(req.a + req.b);
});

service.on("MINUS", (req, res) => {
  res(req.a - req.b);
});
