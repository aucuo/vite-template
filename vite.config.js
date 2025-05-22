import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getHtmlFiles } from './config/utils.js'

export default defineConfig({
    base: './',
    root: 'src',

    plugins: [
        tsconfigPaths(),
    ],

    server: {
        port: 3000,
        open: true,
    },

    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: Object.fromEntries(
              getHtmlFiles('src').map((file) => [
                  file.replace(/^src[\\/]/, '').replace(/\.html$/, ''),
                  file,
              ])
            ),
        },
    },
})