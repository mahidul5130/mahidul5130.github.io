import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const cvFileName = "Md_Mahidul_Haque_Laravel_Vue_CV.pdf";

const serveRootCv = () => ({
  name: "serve-root-cv",
  configureServer(server) {
    server.middlewares.use((request, response, next) => {
      const requestPath = decodeURIComponent((request.url || "").split("?")[0]);

      if (requestPath !== `/${cvFileName}`) {
        next();
        return;
      }

      const cvPath = path.join(rootDir, cvFileName);

      if (!fs.existsSync(cvPath)) {
        response.statusCode = 404;
        response.end("CV not found");
        return;
      }

      response.setHeader("Content-Type", "application/pdf");
      fs.createReadStream(cvPath).pipe(response);
    });
  },
});

export default defineConfig({
  root: "src",
  base: "./",
  publicDir: false,
  plugins: [vue(), serveRootCv()],
  server: {
    host: "127.0.0.1",
    fs: {
      allow: [rootDir],
    },
  },
  preview: {
    host: "127.0.0.1",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: "assets",
    sourcemap: false,
  },
});
