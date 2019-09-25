const fs = require("fs");
const minify = require("babel-minify");
const path = require("path");

const files = [
  path.join(__dirname, "..", "client.js"),
  path.join(__dirname, "..", "service.js")
];

files.forEach(file => {
  const content = fs.readFileSync(file, "utf8");

  const { code, map } = minify(content, {
    mangle: {
      keepClassName: true
    }
  });

  fs.writeFileSync(file, code, "utf8");
});
