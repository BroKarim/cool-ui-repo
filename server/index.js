// cjs
const express = require("express");
const app = express();
const { consola, createConsola } = require("consola");

app.listen(process.env.PORT || 3000);
consola.info("Using consola 3.0.0");
consola.start("Building project...");
consola.warn("A new version of consola is available: 3.0.1");
consola.success("Project built!");
consola.error(new Error("This is an example error. Everything is fine!"));
consola.box("I am a simple box");
await consola.prompt("Deploy to the production?", {
  type: "confirm",
});
