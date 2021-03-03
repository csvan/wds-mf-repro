This repro demonstrates Module Federation breaking in webpack dev server

To test, run

* `npm run server:dev` to run the webpack dev server, and
* `npm run build:dev` to run a regular build with the exact same config

Then, go to http://localhost:1337, you can find and inspect the Module Federation entry point at http://localhost:1337/reproEntryPoint.js
