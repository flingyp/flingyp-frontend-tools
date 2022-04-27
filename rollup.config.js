import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/ytools.umd.js',
      format: 'iife',
      name: 'YTools',
      exports: 'named',
    },
    {
      file: 'dist/ytools.esm.js',
      format: 'esm',
      exports: 'named',
    },
    {
      file: 'dist/ytools.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins: [
    terser(),
    typescript({
      exclude: 'node_modules/**',
    }),
  ],
}
