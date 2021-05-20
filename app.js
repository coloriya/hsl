
const fs = require("fs");
const pug = require("pug");

const pugPath = "src/pug/hsl.pug";
const template = pug.compileFile(pugPath);

const htmlPath = "docs/index.html";

function getArray (max, step) {
	let arr = [];
	for (let x = 0; x <= max; x += step) {
		arr.push(x);
	}
	return arr;
}

const props = {
	hues: getArray(360, 10),
	saturations: getArray(100, 10),
	lightnesses: getArray(100, 10),
}

fs.writeFileSync(htmlPath, template(props));


