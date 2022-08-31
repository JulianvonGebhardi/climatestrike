import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		trailingSlash: 'always',
		prerender: {
			crawl: false,
			//default: true,
			onError: 'continue'
			// onError: ({ status, path, referrer, referenceType }) => {
			// 	if (path.startsWith('/blog')) throw new Error('Missing a blog page!');
			// 	console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			// }
		}
	},
	preprocess: preprocess({
		// ...svelte-preprocess options
	})
};

export default config;
