// Original version from https://github.com/mvasigh/sveltekit-mdsvex-blog/blob/main/src/lib/slugFromPath.ts

export const slugFromPath = (path: string) =>
    path
        .toLowerCase()
        .match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1]
        .replaceAll('_', '-') ?? null;
