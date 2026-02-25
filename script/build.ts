import { build as viteBuild } from "vite";
import { rm } from "fs/promises";
import { execSync } from "child_process";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("generating content from config files...");
  execSync("npx tsx scripts/generate-content.ts", { stdio: "inherit" });

  console.log("generating blog data from markdown...");
  execSync("npx tsx scripts/generate-blog.ts", { stdio: "inherit" });

  console.log("building static site...");
  await viteBuild();

  console.log("static site built → dist/public/");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
