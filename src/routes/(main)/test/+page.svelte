<svelte:head>
	<script>
		const climateStrikeFunctionScript = () => {
			window.addEventListener('load', (Fr) => {
				const Ot = document.location.hash,
					ht = Ot === '#climatestrikebanner_23_09_2022';
				let Vt =
					Date.now() > new Date('2022-09-11T00:00:01').getTime() &&
					Date.now() < new Date('2022-09-11T23:59:59').getTime();
				if (
					(Ot != '#climatestrikebanner_23_09_2022' && !Vt) ||
					sessionStorage.getItem('climatestrikeBanner2022') === 'true' ||
					localStorage.getItem('climatestrikeBanner2022') === 'true'
				)
					return;
				(document.querySelector('html').style['overflow-y'] = 'hidden'),
					document
						.querySelector('body')
						.insertAdjacentHTML(
							'afterbegin',
							'<div id="backdrop_climatestrike" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.59); z-index: 500; overflow-y: hidden"/><section class="mt-6 py-6 section px-0 styleViaBulmaScript" id="climatestrike_banner_2022"><div class="column is-10 is-offset-1 is-offset-1 mr-6-mobile ml-6-mobile" style="height: 100vh; display: flex; align-items: center;"><div id="banner_climatestrike" class="container is-max-widescreen"><button class="delete is-medium close_climatestrike svelte-y1wpud" style="position: absolute; top: -1rem; right: -1rem;"></button> <button class="button is-medium climate_strike_counter is-responsive -mr-3 svelte-y1wpud" style="position: absolute; bottom: -1rem; right: -1rem;"><span class="has-text-weight-medium px-2 is-size-5 is-size-4-desktop climate_counter-number">2:00</span></button> <div class="py-10 px-5 is-relative has-text-centered" style="border-radius: 4px; overflow: hidden; background-color: #1E549C;"><div style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; opacity: 0.5;"></div> <div class="py-6" style="position: relative; z-index: 10; color: rgb(255, 255, 255);"><h2 class="is-size-4 is-size-3-tablet has-text-weight-semibold">We strike for <span style="background-color: #ED6F49; color: #000000; padding-left: 6px; padding-right: 6px;">our Planet</span></h2> <p class="has-mw-md mb-8 mx-auto is-size-5 is-size-4-tablet mt-6" style="color: rgb(255, 255, 255);">Today, 23.09.2022, is the day of the global climate strike. We also want to raise awareness by striking online.</p> <a class="button px-6 is-inline-flex is-align-items-center is-medium is-responsive" style="background-color: #ED6F49; border: 0;" target="_blank" href="https://www.klima-streik.org/"><span class="" style="color: rgb(255, 255, 255);">More infos</span></a></div></div></div></div></section>'
						);
				let Nm = document
					.getElementById('climatestrike_banner_2022')
					.classList.contains('styleViaBulmaScript');
				if (Nm) {
					let v = document.createElement('link');
					v.setAttribute('id', 'climatestrike__2022_external_styles'),
						v.setAttribute('rel', 'stylesheet'),
						v.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'),
						document.head.appendChild(v);
				}
				if (sessionStorage.getItem('lastCounterStrikeTime')) {
					let v = sessionStorage.getItem('lastCounterStrikeTime');
					document.querySelector('.climate_counter-number').innerHTML = v;
				}
				const O = document.createElement('style');
				O.setAttribute('id', 'climatestrike_style'),
					Nm
						? (O.textContent = 'button{z-index: 1500;}')
						: (O.textContent = 'button{z-index: 1500;}'),
					document.head.appendChild(O);
				let Pr = document.querySelector('.close_climatestrike'),
					mt = document.querySelector('.climate_strike_counter'),
					Lt = document.getElementById('climatestrike_banner_2022').classList.contains('onlyonce');
				Pr &&
					document.querySelector('.close_climatestrike').addEventListener('click', (v) => {
						var ut, km;
						v.preventDefault(),
							document.getElementById('banner_climatestrike').remove(),
							document.getElementById('backdrop_climatestrike').remove(),
							(ut = document.getElementById('climatestrike_style')) == null || ut.remove(),
							(document.querySelector('html').style['overflow-y'] = 'scroll'),
							(km = document.getElementById('climatestrike__2022_external_styles')) == null ||
								km.remove(),
							sessionStorage.setItem('climatestrikeBanner2022', 'true'),
							!(ht && mt) && Lt && localStorage.setItem('climatestrikeBanner2022', 'true');
					}),
					mt &&
						(Q = setInterval(() => {
							var Om, Yt, Vm;
							let v =
									(Om = document.querySelector('.climate_counter-number')) == null
										? void 0
										: Om.innerHTML,
								ut = document
									.getElementById('climatestrike_banner_2022')
									.classList.contains('onlyonce');
							if (v === '0' || v === 0) {
								if (
									(clearInterval(Q),
									document.getElementById('banner_climatestrike').remove(),
									document.getElementById('backdrop_climatestrike').remove(),
									(Yt = document.getElementById('climatestrike_style')) == null || Yt.remove(),
									(Vm = document.getElementById('climatestrike__2022_external_styles')) == null ||
										Vm.remove(),
									(document.querySelector('html').style['overflow-y'] = 'scroll'),
									sessionStorage.setItem('climatestrikeBanner2022', 'true'),
									ht)
								)
									return;
								ut && localStorage.setItem('climatestrikeBanner2022', 'true');
								return;
							}
							if (v.indexOf('.') != -1 || v.indexOf(';') != -1 || v.indexOf(':') != -1) {
								let at;
								v.indexOf('.') != -1 && (at = v.indexOf('.')),
									v.indexOf(';') != -1 && (at = v.indexOf(';')),
									v.indexOf(':') != -1 && (at = v.indexOf(':'));
								let N = Number(v.slice(at + 1, v.length)),
									ot = Number(v.slice(0, at));
								N != 0 || N != '0' ? (N = N - 1) : ((ot = ot - 1), (N = 59));
								let Hm = `${ot === 0 ? '' : ot + ':'}${N < 10 ? `0${N}` : N}`;
								(document.querySelector('.climate_counter-number').innerHTML = Hm),
									sessionStorage.setItem('lastCounterStrikeTime', Hm);
							} else {
								let at = Number(v) - 1;
								(document.querySelector('.climate_counter-number').innerHTML = String(at)),
									sessionStorage.setItem('lastCounterStrikeTime', String(at));
							}
						}, 1e3));
			});
		};
		climateStrikeFunctionScript();
	</script>
</svelte:head>
