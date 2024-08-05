/**
 * @param {string} param
 * @return {param is ('en' | 'de')}
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */
export function match(param) {
	return param === 'en' || param === 'de';
}
