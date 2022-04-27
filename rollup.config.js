import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/ytools.umd.js',
      format: 'umd',
      name: 'YTools',
    },
    {
      file: 'dist/ytools.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/ytools.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    terser(),
    typescript({
      exclude: 'node_modules/**',
    }),
  ],
}
