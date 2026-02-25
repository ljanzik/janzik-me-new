import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const CONTENT_DIR = path.resolve(process.cwd(), "content");
const OUTPUT_DIR = path.resolve(process.cwd(), "client/src/data/generated");

interface ContentFile {
  source: string;
  output: string;
}

const contentFiles: ContentFile[] = [
  { source: "experiences.yaml", output: "experiences.json" },
];

function generate() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const file of contentFiles) {
    const sourcePath = path.join(CONTENT_DIR, file.source);
    const outputPath = path.join(OUTPUT_DIR, file.output);

    if (!fs.existsSync(sourcePath)) {
      console.warn(`Skipping ${file.source} — file not found`);
      continue;
    }

    const raw = fs.readFileSync(sourcePath, "utf-8");
    const data = yaml.load(raw);
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`${file.source} → ${file.output}`);
  }
}

generate();
