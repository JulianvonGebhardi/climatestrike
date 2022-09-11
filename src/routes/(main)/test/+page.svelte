<svelte:head>
	<script>
		const climateStrikeFunctionScript = () => {
			window.addEventListener('load', (Fr) => {
				const Bt = document.location.hash,
					ht = Bt === '#climatestrikebanner_23_09_2022';
				let ut =
					Date.now() > new Date('2022-09-11T00:00:01').getTime() &&
					Date.now() < new Date('2022-09-11T23:59:59').getTime();
				if (
					(console.log(ut, 'itsstrikeday?'),
					console.log(
						Bt != '#climatestrikebanner_23_09_2022' && !ut,
						"url != '#climatestrikebanner_23_09_2022' && !itsStrikeDay"
					),
					Bt != '#climatestrikebanner_23_09_2022' && !ut)
				)
					return;
				let Nm =
					sessionStorage.getItem('climatestrikeBanner2022') === 'true' ||
					localStorage.getItem('climatestrikeBanner2022') === 'true';
				if ((console.log(Nm, 'hasSeenThis'), Nm)) return;
				(document.querySelector('html').style['overflow-y'] = 'hidden'),
					document
						.querySelector('body')
						.insertAdjacentHTML(
							'afterbegin',
							'<div id="backdrop_climatestrike" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.59); z-index: 500; overflow-y: hidden"/><section class="mt-6 py-6 section px-0 styleViaBulmaScript" id="climatestrike_banner_2022"><div class="column is-10 is-offset-1 is-offset-1 mr-6-mobile ml-6-mobile" style="height: 100vh; display: flex; align-items: center;"><div id="banner_climatestrike" class="container is-max-widescreen"> <button class="button is-medium climate_strike_counter is-responsive -mr-3 svelte-y1wpud" style="position: absolute; bottom: -1rem; right: -1rem;"><span class="has-text-weight-medium px-2 is-size-5 is-size-4-desktop climate_counter-number">5:00</span></button> <div class="py-10 px-5 is-relative has-text-centered" style="border-radius: 4px; overflow: hidden; background-color: #1E549C;"><div style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; opacity: 0.5;"></div> <div class="py-6" style="position: relative; z-index: 10; color: rgb(255, 255, 255);"><h2 class="is-size-4 is-size-3-tablet has-text-weight-semibold">We strike for <span style="background-color: #ED6F49; color: #000000; padding-left: 6px; padding-right: 6px;">our Planet</span></h2> <p class="has-mw-md mb-8 mx-auto is-size-5 is-size-4-tablet mt-6" style="color: rgb(255, 255, 255);">Today, 23.09.2022, is the day of the global climate strike. We also want to raise awareness by striking online.</p> <a class="button px-6 is-inline-flex is-align-items-center is-medium is-responsive" style="background-color: #ED6F49; border: 0;" target="_blank" href="https://www.klima-streik.org/"><span class="" style="color: rgb(255, 255, 255);">More infos</span></a></div></div></div></div></section>'
						);
				let Om = document
					.getElementById('climatestrike_banner_2022')
					.classList.contains('styleViaBulmaScript');
				if (Om) {
					let k = document.createElement('link');
					k.setAttribute('id', 'climatestrike__2022_external_styles'),
						k.setAttribute('rel', 'stylesheet'),
						k.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'),
						document.head.appendChild(k);
				}
				if (sessionStorage.getItem('lastCounterStrikeTime')) {
					let k = sessionStorage.getItem('lastCounterStrikeTime');
					document.querySelector('.climate_counter-number').innerHTML = k;
				}
				const N = document.createElement('style');
				N.setAttribute('id', 'climatestrike_style'),
					Om
						? (N.textContent = 'button{z-index: 1500;}')
						: (N.textContent = 'button{z-index: 1500;}'),
					document.head.appendChild(N);
				let Dr = document.querySelector('.close_climatestrike'),
					mt = document.querySelector('.climate_strike_counter');
				Dr &&
					document.querySelector('.close_climatestrike').addEventListener('click', (k) => {
						var at, Vt;
						if (
							(k.preventDefault(),
							document.getElementById('banner_climatestrike').remove(),
							document.getElementById('backdrop_climatestrike').remove(),
							(at = document.getElementById('climatestrike_style')) == null || at.remove(),
							(document.querySelector('html').style['overflow-y'] = 'scroll'),
							(Vt = document.getElementById('climatestrike__2022_external_styles')) == null ||
								Vt.remove(),
							sessionStorage.setItem('climatestrikeBanner2022', 'true'),
							ht && mt)
						)
							return;
						document.getElementById('climatestrike_banner_2022').classList.contains('onlyonce') &&
							localStorage.setItem('climatestrikeBanner2022', 'true');
					}),
					mt &&
						(Q = setInterval(() => {
							var at, Vt, Vm;
							let k =
								(at = document.querySelector('.climate_counter-number')) == null
									? void 0
									: at.innerHTML;
							if (k === '0' || k === 0) {
								if (
									(clearInterval(Q),
									document.getElementById('banner_climatestrike').remove(),
									document.getElementById('backdrop_climatestrike').remove(),
									(Vt = document.getElementById('climatestrike_style')) == null || Vt.remove(),
									(Vm = document.getElementById('climatestrike__2022_external_styles')) == null ||
										Vm.remove(),
									(document.querySelector('html').style['overflow-y'] = 'scroll'),
									sessionStorage.setItem('climatestrikeBanner2022', 'true'),
									ht)
								)
									return;
								document
									.getElementById('climatestrike_banner_2022')
									.classList.contains('onlyonce') &&
									localStorage.setItem('climatestrikeBanner2022', 'true');
								return;
							}
							if (k.indexOf('.') != -1 || k.indexOf(';') != -1 || k.indexOf(':') != -1) {
								let F;
								k.indexOf('.') != -1 && (F = k.indexOf('.')),
									k.indexOf(';') != -1 && (F = k.indexOf(';')),
									k.indexOf(':') != -1 && (F = k.indexOf(':'));
								let ot = Number(k.slice(F + 1, k.length)),
									Yt = Number(k.slice(0, F));
								ot != 0 || ot != '0' ? (ot = ot - 1) : ((Yt = Yt - 1), (ot = 59));
								let wt = `${Yt === 0 ? '' : Yt + ':'}${ot < 10 ? `0${ot}` : ot}`;
								(document.querySelector('.climate_counter-number').innerHTML = wt),
									sessionStorage.setItem('lastCounterStrikeTime', wt);
							} else {
								let F = Number(k) - 1;
								(document.querySelector('.climate_counter-number').innerHTML = String(F)),
									sessionStorage.setItem('lastCounterStrikeTime', String(F));
							}
						}, 1e3));
			});
		};
		climateStrikeFunctionScript();
	</script>
</svelte:head>
