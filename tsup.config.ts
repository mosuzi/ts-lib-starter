/**
 * To see more options: https://paka.dev/npm/tsup@6.7.0/api#3f9e3391ce3e9914
 */
import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tsup-config',
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  target: "es2015",
  // onSuccess: () => Promise.resolve(console.log('==========built==========')),
  // minify: 'terser',
  // terserOptions: {
  //   module: true
  // },
  watch: false,
  outDir: 'dist',
  dts: true,
  platform: 'browser',
  // external: [],
  // inject: [],
  replaceNodeEnv: true
})