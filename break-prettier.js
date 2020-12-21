const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const file = path.resolve(__dirname, "./testfile.js");

async function run() {
  const options = await prettier.resolveConfig(file);

  const output = prettier.format(fs.readFileSync(file, "utf8"), {
    parser: "babel",
    ...options,
  });

  console.log(output);
}

run();
