import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(projectRoot, "dist-github");
const nestedIndex = resolve(output, "github-src/index.html");
const rootIndex = resolve(output, "index.html");

await rename(nestedIndex, rootIndex);
const html = await readFile(rootIndex, "utf8");
const source = await readFile(resolve(projectRoot, "app/content.ts"), "utf8");
const slugs = [...source.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]);

for (const slug of slugs) {
  const directory = resolve(output, "portfolio", slug);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), html);
}

await writeFile(resolve(output, "404.html"), html);
await writeFile(resolve(output, ".nojekyll"), "");

await rm(resolve(output, "github-src"), { recursive: true, force: true });
