// @ts-nocheck
import { writable } from 'svelte/store';

function initStore() {
	const { subscribe, set, update } = writable({
		element: null
	});

	return {
		subscribe,
		update: (input) =>
			update((n) => {
				n.element = input;
				return n;
			}),
		reset: () => set({ element: null })
	};
}

export default initStore();
