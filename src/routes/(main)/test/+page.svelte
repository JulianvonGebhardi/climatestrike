<svelte:head>
	<script>
		(function x() {
			window.addEventListener('load', (F) => {
				const Jr = document.location.hash,
					qt = Jr === '#climatestrikebanner_23_09_2022';
				let Pt =
					Date.now() > new Date('2022-09-23T00:00:01').getTime() &&
					Date.now() < new Date('2022-09-23T23:59:59').getTime();
				if (
					(Jr != '#climatestrikebanner_23_09_2022' && !Pt) ||
					sessionStorage.getItem('climatestrikeBanner2022') === 'true' ||
					localStorage.getItem('climatestrikeBanner2022') === 'true'
				)
					return;
				(document.querySelector('html').style['overflow-y'] = 'hidden'),
					document
						.querySelector('body')
						.insertAdjacentHTML(
							'afterbegin',
							'<div id="backdrop_climatestrike" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.59); z-index: 500; overflow-y: hidden"/><section class="px-0 styleViaBulmaScript" id="climatestrike_banner_2022" style=""><div class="column is-10 is-offset-1 is-offset-1 mr-6-mobile ml-6-mobile" style="height: 100vh; display: flex; align-items: center;"><div id="banner_climatestrike" class="container is-max-widescreen"> <button class="button is-medium climate_strike_counter is-responsive -mr-3 svelte-h5fhjn" style="position: absolute; bottom: -1rem; right: -1rem;"><span class="has-text-weight-medium px-2 is-size-5 is-size-4-desktop climate_counter-number">10</span></button> <div class="py-10 px-5 is-relative has-text-centered" style="border-radius: 4px; overflow: hidden; background-color: #1E549C; max-height: 80vh; overflow-y: auto;"><div style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; opacity: 0.5;"></div> <div class="py-6" style="position: relative; z-index: 10; color: rgb(255, 255, 255);"><h2 class="is-size-4 is-size-3-tablet has-text-weight-semibold">Helo</h2> <p class="has-mw-md mb-8 mx-auto is-size-5 is-size-4-tablet mt-6" style="color: rgb(255, 255, 255);">Today, 23.09.2022, is the day of the global climate strike. We also want to raise awareness by striking online. <b style="color: #ffffff">Please consider</b> using our strike time to make some notes on how <b style="color: #ffffff">you</b> could become active to help save our planet for coming generations. <b style="color: #ffffff">Thank you!</b></p> <a class="button px-6 is-inline-flex is-align-items-center is-medium is-responsive svelte-h5fhjn" style="background-color: #ED6F49; border: 0;" target="_blank" href="https://www.klima-streik.org/"><span class="" style="color: rgb(255, 255, 255);">More infos</span></a></div></div></div></div></section>'
						);
				let Qr = document
					.getElementById('climatestrike_banner_2022')
					.classList.contains('styleViaBulmaScript');
				if (Qr) {
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
				const pr = document.createElement('style');
				pr.setAttribute('id', 'climatestrike_style'),
					Qr
						? (pr.textContent = 'button{z-index: 1500;}')
						: (pr.textContent = 'button{z-index: 1500;}'),
					document.head.appendChild(pr);
				let it = document.querySelector('.close_climatestrike'),
					Kr = document.querySelector('.climate_strike_counter'),
					st = document.getElementById('climatestrike_banner_2022').classList.contains('onlyonce');
				it &&
					document.querySelector('.close_climatestrike').addEventListener('click', (v) => {
						var lr, Bt;
						v.preventDefault(),
							document.getElementById('banner_climatestrike').remove(),
							document.getElementById('backdrop_climatestrike').remove(),
							(lr = document.getElementById('climatestrike_style')) == null || lr.remove(),
							(document.querySelector('html').style['overflow-y'] = 'scroll'),
							(Bt = document.getElementById('climatestrike__2022_external_styles')) == null ||
								Bt.remove(),
							sessionStorage.setItem('climatestrikeBanner2022', 'true'),
							!(qt && Kr) && st && localStorage.setItem('climatestrikeBanner2022', 'true');
					}),
					Kr &&
						(Tt = setInterval(() => {
							var Zr, $r, gr;
							let v =
									(Zr = document.querySelector('.climate_counter-number')) == null
										? void 0
										: Zr.innerHTML,
								lr = document
									.getElementById('climatestrike_banner_2022')
									.classList.contains('onlyonce');
							if (v === '0' || v === 0) {
								if (
									(clearInterval(Tt),
									document.getElementById('banner_climatestrike').remove(),
									document.getElementById('backdrop_climatestrike').remove(),
									($r = document.getElementById('climatestrike_style')) == null || $r.remove(),
									(gr = document.getElementById('climatestrike__2022_external_styles')) == null ||
										gr.remove(),
									(document.querySelector('html').style['overflow-y'] = 'scroll'),
									sessionStorage.setItem('climatestrikeBanner2022', 'true'),
									qt)
								)
									return;
								lr && localStorage.setItem('climatestrikeBanner2022', 'true');
								return;
							}
							if (v.indexOf('.') != -1 || v.indexOf(';') != -1 || v.indexOf(':') != -1) {
								let bt;
								v.indexOf('.') != -1 && (bt = v.indexOf('.')),
									v.indexOf(';') != -1 && (bt = v.indexOf(';')),
									v.indexOf(':') != -1 && (bt = v.indexOf(':'));
								let ct = Number(v.slice(bt + 1, v.length)),
									nt = Number(v.slice(0, bt));
								ct != 0 || ct != '0' ? (ct = ct - 1) : ((nt = nt - 1), (ct = 59));
								let Ct = `${nt === 0 ? '' : nt + ':'}${ct < 10 ? `0${ct}` : ct}`;
								(document.querySelector('.climate_counter-number').innerHTML = Ct),
									sessionStorage.setItem('lastCounterStrikeTime', Ct);
							} else {
								let bt = Number(v) - 1;
								(document.querySelector('.climate_counter-number').innerHTML = String(bt)),
									sessionStorage.setItem('lastCounterStrikeTime', String(bt));
							}
						}, 1e3));
			});
		})();
	</script>
	<script>
		(function x() {
			window.addEventListener('load', (F) => {
				const Jr = document.location.hash,
					qt = Jr === '#climatestrikebanner_23_09_2022';
				let Pt =
					Date.now() > new Date('2022-09-15T00:00:01').getTime() &&
					Date.now() < new Date('2022-09-15T23:59:59').getTime();
				if (
					(Jr != '#climatestrikebanner_23_09_2022' && !Pt) ||
					sessionStorage.getItem('climatestrikeBanner2022') === 'true' ||
					localStorage.getItem('climatestrikeBanner2022') === 'true'
				)
					return;
				(document.querySelector('html').style['overflow-y'] = 'hidden'),
					document
						.querySelector('body')
						.insertAdjacentHTML(
							'afterbegin',
							'<div id="backdrop_climatestrike" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.59); z-index: 500; overflow-y: hidden"/><section class="px-0 styleViaBulmaScript" id="climatestrike_banner_2022" style=""><div class="column is-10 is-offset-1 is-offset-1 mr-6-mobile ml-6-mobile" style="height: 100vh; display: flex; align-items: center;"><div id="banner_climatestrike" class="container is-max-widescreen"> <button class="button is-medium climate_strike_counter is-responsive -mr-3 svelte-h5fhjn" style="position: absolute; bottom: -1rem; right: -1rem;"><span class="has-text-weight-medium px-2 is-size-5 is-size-4-desktop climate_counter-number">10</span></button> <div class="py-10 px-5 is-relative has-text-centered" style="border-radius: 4px; overflow: hidden; background-color: #1E549C; max-height: 80vh; overflow-y: auto;"><div style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; opacity: 0.5;"></div> <div class="py-6" style="position: relative; z-index: 10; color: rgb(255, 255, 255);"><h2 class="is-size-4 is-size-3-tablet has-text-weight-semibold">We strike for <span style="background-color: #ED6F49; color: #000000; padding-left: 6px; padding-right: 6px;">our Planet</span></h2> <p class="has-mw-md mb-8 mx-auto is-size-5 is-size-4-tablet mt-6" style="color: rgb(255, 255, 255);">Today, 23.09.2022, is the day of the global climate strike. We also want to raise awareness by striking online. <b style="color: #ffffff">Please consider</b> using our strike time to make some notes on how <b style="color: #ffffff">you</b> could become active to help save our planet for coming generations. <b style="color: #ffffff">Thank you!</b></p> <a class="button px-6 is-inline-flex is-align-items-center is-medium is-responsive svelte-h5fhjn" style="background-color: #ED6F49; border: 0;" target="_blank" href="https://www.klima-streik.org/"><span class="" style="color: rgb(255, 255, 255);">More infos</span></a></div></div></div></div></section>'
						);
				let Qr = document
					.getElementById('climatestrike_banner_2022')
					.classList.contains('styleViaBulmaScript');
				if (Qr) {
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
				const pr = document.createElement('style');
				pr.setAttribute('id', 'climatestrike_style'),
					Qr
						? (pr.textContent = 'button{z-index: 1500;}')
						: (pr.textContent = 'button{z-index: 1500;}'),
					document.head.appendChild(pr);
				let it = document.querySelector('.close_climatestrike'),
					Kr = document.querySelector('.climate_strike_counter'),
					st = document.getElementById('climatestrike_banner_2022').classList.contains('onlyonce');
				it &&
					document.querySelector('.close_climatestrike').addEventListener('click', (v) => {
						var lr, Bt;
						v.preventDefault(),
							document.getElementById('banner_climatestrike').remove(),
							document.getElementById('backdrop_climatestrike').remove(),
							(lr = document.getElementById('climatestrike_style')) == null || lr.remove(),
							(document.querySelector('html').style['overflow-y'] = 'scroll'),
							(Bt = document.getElementById('climatestrike__2022_external_styles')) == null ||
								Bt.remove(),
							sessionStorage.setItem('climatestrikeBanner2022', 'true'),
							!(qt && Kr) && st && localStorage.setItem('climatestrikeBanner2022', 'true');
					}),
					Kr &&
						(Tt = setInterval(() => {
							var Zr, $r, gr;
							let v =
									(Zr = document.querySelector('.climate_counter-number')) == null
										? void 0
										: Zr.innerHTML,
								lr = document
									.getElementById('climatestrike_banner_2022')
									.classList.contains('onlyonce');
							if (v === '0' || v === 0) {
								if (
									(clearInterval(Tt),
									document.getElementById('banner_climatestrike').remove(),
									document.getElementById('backdrop_climatestrike').remove(),
									($r = document.getElementById('climatestrike_style')) == null || $r.remove(),
									(gr = document.getElementById('climatestrike__2022_external_styles')) == null ||
										gr.remove(),
									(document.querySelector('html').style['overflow-y'] = 'scroll'),
									sessionStorage.setItem('climatestrikeBanner2022', 'true'),
									qt)
								)
									return;
								lr && localStorage.setItem('climatestrikeBanner2022', 'true');
								return;
							}
							if (v.indexOf('.') != -1 || v.indexOf(';') != -1 || v.indexOf(':') != -1) {
								let bt;
								v.indexOf('.') != -1 && (bt = v.indexOf('.')),
									v.indexOf(';') != -1 && (bt = v.indexOf(';')),
									v.indexOf(':') != -1 && (bt = v.indexOf(':'));
								let ct = Number(v.slice(bt + 1, v.length)),
									nt = Number(v.slice(0, bt));
								ct != 0 || ct != '0' ? (ct = ct - 1) : ((nt = nt - 1), (ct = 59));
								let Ct = `${nt === 0 ? '' : nt + ':'}${ct < 10 ? `0${ct}` : ct}`;
								(document.querySelector('.climate_counter-number').innerHTML = Ct),
									sessionStorage.setItem('lastCounterStrikeTime', Ct);
							} else {
								let bt = Number(v) - 1;
								(document.querySelector('.climate_counter-number').innerHTML = String(bt)),
									sessionStorage.setItem('lastCounterStrikeTime', String(bt));
							}
						}, 1e3));
			});
		})();
	</script>
</svelte:head>
