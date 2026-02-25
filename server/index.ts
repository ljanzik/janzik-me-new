import { createServer } from "vite";
import { execSync } from "child_process";

async function startDev() {
  console.log("Generating blog data from markdown...");
  execSync("npx tsx scripts/generate-blog.ts", { stdio: "inherit" });

  const port = parseInt(process.env.PORT || "5000", 10);

  const server = await createServer({
    configFile: "./vite.config.ts",
    server: {
      port,
      host: "0.0.0.0",
      strictPort: true,
      hmr: {
        path: "/vite-hmr",
      },
      allowedHosts: true as unknown as string[],
    },
  });

  await server.listen();
  console.log(`Vite dev server running on port ${port}`);
}

startDev().catch((err) => {
  console.error(err);
  process.exit(1);
});
