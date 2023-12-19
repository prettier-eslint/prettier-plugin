import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    autoImport({
      imports: 'vitest',
    }),
  ],
  resolve: {
    alias: {
      'lib-boilerplate': new URL('src/index.ts', import.meta.url).pathname,
    },
  },
  test: {
    coverage: {
      include: ['src'],
      reporter: ['lcov', 'json', 'text'],
    },
  },
})
