// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}

        interface MdsvexFile {
            default: import('svelte/internal').SvelteComponent;
            metadata: Record<string, string>;
            slug?: string;
        }

        type MdsvexResolver = () => Promise<MdsvexFile>;
    }
}

import '@poppanator/sveltekit-svg/dist/svg';

export {};
