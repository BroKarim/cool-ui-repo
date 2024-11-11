// cjs
const express = require("express");
const app = express();
const { consola, createConsola } = require("consola");
const askUserInput = require("./consola/prompt");

app.listen(process.env.PORT || 3000, () => {
  consola.success("Server is running...");
  askUserInput(); // Call the prompt function
});

// await consola.prompt("Deploy to the production?", {
//   type: "confirm",
// });
