import Client from "./modules/client";

const client = new Client("./worker.js");

client.emit("ADD", { a: 1, b: 2 }, data => console.log("result", data));
