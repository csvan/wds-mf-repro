import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const bootScriptElement = document.createElement("script");

bootScriptElement.src = "http://localhost:1337/reproEntryPoint.js";
bootScriptElement.type = "text/javascript";
// bootScriptElement.async = true;

bootScriptElement.onload = () => {
  console.info("Loaded entry point");
};

bootScriptElement.onerror = () => {
  console.info("Failed to load entry point");
};

document.head.appendChild(bootScriptElement);

ReactDOM.render(<App />, document.getElementById("root"));
