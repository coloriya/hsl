
const fs = require("fs");
const pug = require("pug");

const pugPath = "src/pug/hsl.pug";
const template = pug.compileFile(pugPath);

const htmlPath = "docs/index.html";

fs.writeFileSync(htmlPath, template());


