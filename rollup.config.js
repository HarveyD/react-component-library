import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-copy";

import packageJson from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true
    }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["**/*.stories.js"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    }),
    sass({
      insert: true
    }),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: "build",
          rename: "variables.scss"
        },
        {
          src: "src/typography.scss",
          dest: "build",
          rename: "typography.scss"
        }
      ]
    })
  ]
};
