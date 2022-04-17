import resolve from "@rollup/plugin-node-resolve";
import babel, {getBabelOutputPlugin} from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup'
import external from "rollup-plugin-peer-deps-external";


const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
        peerDepsExternal(),
        image(),
        resolve(),
        babel({  
          exclude: "node_modules/**",
          presets: ["@babel/preset-react"],
        }),
        external(),
        svgr(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        postcss({
          modules: true,
          writeDefinitions: true
        }),
        terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm",  plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]}],
    plugins: [dts()],
    external: [/\.css$/],
  },
];