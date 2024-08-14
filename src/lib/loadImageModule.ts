import type { Picture } from 'vite-imagetools'

// Fetch all available images and generate different sizes. This is necessary for static rendering.
const allImageModules = import.meta.glob(
    '$lib/assets/img/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
    {
        eager: true,
        import: 'default',
        query: {
            enhanced: true,
            w: '2048;1920;1280;1024;768;640;512;256'
        }
    }
) as Record<string, Picture>

export function loadImageModule(path: string): Picture | undefined {
    for (const key of Object.keys(allImageModules)) {
        if (key.endsWith(path)) {
            return allImageModules[key]
        }
    }
}
