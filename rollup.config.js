import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
  output: [
    {
      file: pkg.main,
      format: 'cjs', // commonjs
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es', // esm
      sourcemap: true,
    },
  ],
  plugins: [typescript()]
};