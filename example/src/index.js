import Client from "./modules/client";

const client = new Client("./worker.js");

client.emit("ADD", { a: 1, b: 2 }, data =>
  console.log("ADD result 1+2 =", data)
);

client.emit("ADD", { a: 2, b: 3 }, data =>
  console.log("ADD result 2+3 =", data)
);

client.emit("ADD", { a: 3, b: 4 }, data =>
  console.log("ADD result 3+4 =", data)
);

client.emit("MINUS", { a: 2, b: 1 }, data =>
  console.log("MINUS result 2-1 =", data)
);

client.emit("MINUS", { a: 4, b: 2 }, data =>
  console.log("MINUS result 4-2 =", data)
);

client.emit("MINUS", { a: 4, b: 1 }, data =>
  console.log("MINUS result 4-1 =", data)
);
