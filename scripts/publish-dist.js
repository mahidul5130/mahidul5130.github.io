const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const assertInsideRoot = (target) => {
  const resolved = path.resolve(target);
  if (resolved !== root && !resolved.startsWith(root + path.sep)) {
    throw new Error(`Refusing to touch path outside project root: ${resolved}`);
  }
  return resolved;
};

const removePath = (target) => {
  const resolved = assertInsideRoot(target);
  if (fs.existsSync(resolved)) {
    fs.rmSync(resolved, { recursive: true, force: true });
  }
};

const copyRecursive = (source, target) => {
  const sourceStat = fs.statSync(source);
  if (sourceStat.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(target, entry));
    }
    return;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
};

if (!fs.existsSync(path.join(dist, "index.html"))) {
  throw new Error("dist/index.html was not found. Run vue-cli-service build first.");
}

removePath(path.join(root, "assets"));
removePath(path.join(root, "app.js"));
removePath(path.join(root, "styles.css"));
removePath(path.join(root, "index.html"));

for (const entry of fs.readdirSync(dist)) {
  copyRecursive(path.join(dist, entry), path.join(root, entry));
}

console.log("Published Vue CLI build output to repository root for GitHub Pages.");
