import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import json from "@rollup/plugin-json"

module.exports = {
  input: "src/run.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [json(), commonjs(), nodeResolve(), typescript()],
}
