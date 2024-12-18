// vite.config.js
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
            }, // 출력 파일 이름
        },
        rollupOptions: {
            // 외부화할 패키지 설정
            external: ['react'],
            output: {
                globals: {
                    react: 'React',
                },
            },
        },
    },
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
    ],
})
