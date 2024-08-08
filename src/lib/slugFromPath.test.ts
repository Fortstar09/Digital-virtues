// Original version from https://github.com/mvasigh/sveltekit-mdsvex-blog/blob/main/src/lib/slugFromPath.test.ts

import { describe, it, expect } from 'vitest';
import { slugFromPath } from './slugFromPath';

describe('slugFromPath', () => {
	it('extracts slug from paths correctly', () => {
		const cases = [
			{
				path: '/foo/bar/test-slug.md',
				expected: 'test-slug'
			},
			{
				path: '/foo/bar/test-slug.svx',
				expected: 'test-slug'
			},
			{
				path: '/foo/bar/test-slug.svelte.md',
				expected: 'test-slug'
			}
		];

		cases.forEach(({ path, expected }) => expect(slugFromPath(path)).toBe(expected));
	});

	it('returns null for unknown extension', () => {
		const path = '/foo/bar/test-slug.abc';

		expect(slugFromPath(path)).toBeNull();
	});

	it('returns null for no extension', () => {
		const path = '/foo/bar/test-slug';

		expect(slugFromPath(path)).toBeNull();
	});

    it('converts all underscores to dashes', () => {
        const path = '/foo/bar/test-slug_with_underscores.md';
        expect(slugFromPath(path)).toBe('test-slug-with-underscores');
    })

    it('converts all letters to lowercase', () => {
        const path = '/foo/bar/TeSt-SlUg_WiTh_UnDeRsCoReS.svelte.md';
        expect(slugFromPath(path)).toBe('test-slug-with-underscores');
    })
});
