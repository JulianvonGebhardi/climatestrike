<svelte:head>
	<script>
		const bannerFunc = () => {
			window.addEventListener('load', (event) => {
				console.log('page is fully loaded');
				document
					.querySelector('body')
					.insertAdjacentHTML(
						'afterbegin',
						`<div class="container"><div class="py-6 px-5 is-relative has-background-info has-text-centered" style="border-radius: 4px; overflow: hidden;"><div style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; opacity: 0.5;"><img class="image mx-auto" src="images/E-Mail-Banner-2.png" alt="" style="margin-top: -24px;"></div> <div class="py-6" style="position: relative; z-index: 10;"><h2 class="is-size-4 is-size-3-tablet has-text-weight-semibold"><span class="has-text-white ">Wir streiken zum</span> <span class="has-background-warning has-text-black">globalen Klimastreik!</span></h2> <p class="has-mw-md mb-6 mx-auto has-text-white is-size-5 is-size-4-tablet mt-4">Good customer relationship management is the foundation of modern business. Take	care of the development.</p> <a class="button px-6 is-inline-flex is-align-items-center is-warning is-medium is-responsive" href="#"><span class="">Mehr Infos</span></a></div></div></div>`
					);
				document.getElementById('close_climatestrike').addEventListener('click', (event) => {
					event.preventDefault();
					document.getElementById('banner_climatestrike').style.display = 'none';
				});
			});
		};
		bannerFunc();
	</script>
</svelte:head>
