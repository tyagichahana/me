const fs = require("fs");
const path = require("path");

const htmlPath = "docs/index.html";
const replaceFile = "index.html";
const staticPath = "docs/static";

const readFile = p => fs.readFileSync(path.join(process.cwd(), p), "utf8");
const writeFile = (p, content) =>
  fs.writeFileSync(path.join(process.cwd(), p), content, "utf8");

function run() {
  try {
    const htmlFileContent = readFile(htmlPath);
    let html = htmlFileContent.replace(/static/g, staticPath);
    html = html.replace("favicon.ico", "docs/favicon.ico");
    html = html.replace("manifest.json", "docs/manifest.json");
    writeFile(replaceFile, html);
    console.log("Done !!!");
  } catch (err) {
    console.log(err);
  }
}

run();
