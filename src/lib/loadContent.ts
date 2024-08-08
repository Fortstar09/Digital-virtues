import { slugFromPath } from '$lib/slugFromPath';

export async function loadContent(
    files: Record<string, App.MdsvexResolver>
): Promise<App.MdsvexFile[]> {
    const promises = Object.entries(files).map(async ([path, resolver]) => {
        const item = await resolver();
        return {
            slug: slugFromPath(path),
            ...item
        } as App.MdsvexFile;
    });
    return await Promise.all(promises);
}
