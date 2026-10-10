// Injects the server-rendered app into dist/index.html so the first paint
// does not wait for the JavaScript bundle. The client hydrates it afterwards.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrDir = path.join(root, "dist-ssr");
const indexPath = path.join(root, "dist", "index.html");
const placeholder = '<div id="root"></div>';

const { render } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const template = fs.readFileSync(indexPath, "utf8");
if (!template.includes(placeholder)) {
  throw new Error(`Could not find ${placeholder} in dist/index.html`);
}

fs.writeFileSync(
  indexPath,
  template.replace(placeholder, `<div id="root">${render()}</div>`),
);
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log("Prerendered dist/index.html");
