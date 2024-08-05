import type { Handle } from '@sveltejs/kit';
import type { MaybePromise } from '@sveltejs/kit';

export function handle({ event, resolve }: Parameters<Handle>[0]): MaybePromise<Response> {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang || 'en')
	});
}
