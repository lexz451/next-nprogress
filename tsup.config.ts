import { defineConfig } from 'tsup'

export default defineConfig({
  minify: true,
  target: 'es2018',
  external: [
    'react',
    'next',
    'nprogress',
  ],
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs'],
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})