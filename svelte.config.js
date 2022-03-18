import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = "production" === "development";
const production = process.env.NODE_ENV == 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// https://sveltesaas.com/articles/sveltekit-github-pages-guide/
		// for building to github pages
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),
		
		vite: {
			optimizeDeps: {
				include: ['@carbon/charts'],
			},
			ssr: {
				noExternal: [production && '@carbon/charts'].filter(Boolean),
			},
		},
		
		prerender: {
			default: true
		}
	}
};

export default config;
