<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	export let title;
	export let teaser;
	export let date;
	export let link;
	export let img;
	export let tag;
	export let button = 'Eventseite besuchen';
	let content = '';
	let element;

	let mounted = false;
	onMount(() => {
		mounted = true;
		console.log('mounted');
		console.log(element.innerHTML);
		console.log(scriptTag);
	});

	function handleKeydown(event) {
		if (event.key === 'Escape' || event.keyCode === 27) {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if mounted}
	<!-- <div class="modal-backdrop" on:click={closeModal} /> -->
{/if}
<section bind:this={element} id="banner_climatestrike" class="mt-6 py-6 section">
	<div class="container">
		<div class="close" id="close_climatestrike" />
		<div
			class="py-6 px-5 is-relative has-background-info has-text-centered"
			style="border-radius: 4px; overflow: hidden;"
		>
			<div style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; opacity: 50%;">
				<img
					class="image mx-auto"
					style="object-size: contain; margin-top: -24px;"
					src="images/klimastreik.jpg"
					alt=""
				/>
			</div>
			<div class="py-6" style="position: relative; z-index: 10;">
				<h2 class="is-size-4 is-size-3-tablet has-text-weight-semibold">
					<span class="has-text-white ">Wir streiken zum</span>
					<span class="has-background-warning has-text-black">globalen Klimastreik!</span>
				</h2>
				<p class="has-mw-md mb-6 mx-auto has-text-white is-size-5 is-size-4-tablet mt-4">
					Good customer relationship management is the foundation of modern business. Take care of
					the development.
				</p>
				<a
					class="button px-6 is-inline-flex is-align-items-center is-warning is-medium is-responsive"
					href="#"
				>
					<span class="">Mehr Infos</span>
				</a>
			</div>
		</div>
	</div>
</section>
<h1>Test</h1>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.214);
		z-index: 10;

		@include query(phone) {
			background: rgba(0, 0, 0, 0.514);
		}
	}
</style>
