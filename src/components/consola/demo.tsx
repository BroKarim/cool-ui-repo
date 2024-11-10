import React from "react";
import { consola, createConsola } from "consola";

const ConsolaDemo = () => {
  consola.info("Using consola 3.0.0");
  consola.start("Building project...");
  consola.warn("A new version of consola is available: 3.0.1");
  consola.success("Project built!");
  consola.error(new Error("This is an example error. Everything is fine!"));
  consola.box("I am a simple box");

  return <div>My React Component</div>;
};

export default ConsolaDemo;
