// server/consola/prompt.js
const { consola } = require("consola");

const askUserInput = async () => {
  const name = await consola.prompt("What is your name?", {
    default: "User",
    required: true,
  });

  consola.success(`Hello, ${name}!`);
  // Ask for confirmation to continue
  const confirmed = await consola.prompt("Do you want to continue?", { type: "confirm" });
  if (!confirmed) {
    consola.info("Process terminated by user.");
    return;
  }
  const projectType = await consola.prompt("Pick a project type.", { type: "select", options: ["JavaScript", "TypeScript", { label: "CoffeeScript", value: "CoffeeScript", hint: "oh no" }], initial: "TypeScript" });
  consola.info(`Selected project type: ${projectType}`);

  // Ask user to select additional tools
  const tools = await consola.prompt("Select additional tools.", {
    type: "multiselect",
    required: false,
    options: [
      { value: "eslint", label: "ESLint", hint: "recommended" },
      { value: "prettier", label: "Prettier" },
      { value: "gh-action", label: "GitHub Action" },
    ],
    initial: ["eslint", "prettier"],
  });
  consola.info(`Selected tools: ${tools.join(", ")}`);

  consola.start("Creating project...");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  consola.success("Project created!");
};

module.exports = askUserInput;
