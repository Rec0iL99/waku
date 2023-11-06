import url from "node:url";
import path from "node:path";

import { defineConfig } from "waku/config";
import { loadEnv } from "vite";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    root: path.dirname(url.fileURLToPath(import.meta.url)),
  });
};