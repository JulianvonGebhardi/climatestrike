<script>
	// @ts-nocheck

	import store from '$lib/store.js';
</script>

<div>
	{#if $store.element}
		<!-- content here -->
		<section>
			{@html $store.element}
		</section>
	{:else}
		<h1>No script tag was generated yet. Go back an generate one.</h1>
	{/if}
</div>
