// Inlines src/bank-*.js into src/template.html -> index.html
const fs = require("fs"), path = require("path");
const src = path.join(__dirname, "src");
const banks = fs.readdirSync(src).filter(f => /^bank-.*\.js$/.test(f)).sort()
  .map(f => fs.readFileSync(path.join(src, f), "utf8").replace(/<\/script/gi, "<\\/script")).join("\n");
const html = fs.readFileSync(path.join(src, "template.html"), "utf8").replace("/*__BANKS__*/", () => banks);
fs.writeFileSync(path.join(__dirname, "index.html"), html);
console.log("index.html written,", html.length, "bytes");
