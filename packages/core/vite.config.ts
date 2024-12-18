import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es', 'cjs'],
            fileName: (format) => {
                switch (format) {
                    case 'es':
                        return 'index.mjs'
                    case 'cjs':
                        return 'index.cjs'
                    default:
                        return 'index.js'
                }
            },
        },
        sourcemap: true,
        cssCodeSplit: true,
        rollupOptions: {
            external: ['html2canvas'],
            output: {
                assetFileNames: 'index.[ext]', // CSS 파일 이름 지정
            },
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
    },
    plugins: [
        dts({
            include: ['src'],
            beforeWriteFile: (filePath, content) => {
                return {
                    filePath,
                    content: content.replace(/declare module '*.scss'/g, 'declare module "*.scss"'),
                }
            },
        }),
    ],
})
