<svelte:head>
	<script>
		(function exportableFunction() {
			window.addEventListener('load', (event) => {
				const url = document.location.hash;
				const test = url === '#climatestrikebanner_23_09_2022';
				let itsStrikeDay =
					Date.now() > new Date('2022-09-23T00:00:01').getTime() &&
					Date.now() < new Date('2022-09-23T23:59:59').getTime();
				if (url != '#climatestrikebanner_23_09_2022' && !itsStrikeDay) return;
				let userHasSeenThis =
					sessionStorage.getItem('climatestrikeBanner2022') === 'true' ||
					localStorage.getItem('climatestrikeBanner2022') === 'true';
				if (userHasSeenThis) return;
				document.querySelector('html').style['overflow-y'] = 'hidden';
				document
					.querySelector('body')
					.insertAdjacentHTML(
						'afterbegin',
						`<div id="backdrop_climatestrike" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.59); z-index: 500; overflow-y: hidden"/><section class="px-0 s-wWlsyhdhf8R2 styleViaBulmaScript" id="climatestrike_banner_2022" style=""><div class="column is-10 is-offset-1 is-offset-1 mr-6-mobile ml-6-mobile s-wWlsyhdhf8R2" style="height: 100vh; display: flex; align-items: center;"><div id="banner_climatestrike" class="container is-max-widescreen s-wWlsyhdhf8R2"> <button class="button is-medium climate_strike_counter is-responsive -mr-3 s-wWlsyhdhf8R2" style="position: absolute; bottom: -1rem; right: -1rem;"><span class="has-text-weight-medium px-2 is-size-5 is-size-4-desktop climate_counter-number s-wWlsyhdhf8R2">5:00</span></button> <div class="py-6 px-5 is-relative has-text-centered s-wWlsyhdhf8R2" style="border-radius: 4px; overflow: hidden; background-color: #1E549C; max-height: 80vh; overflow-y: auto;"><div class="s-wWlsyhdhf8R2" style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; opacity: 0.5;"></div> <div class="py-6 px-4-mobile px-6-tablet mx-auto column is-7-desktop is-10-tablet s-wWlsyhdhf8R2" style="position: relative; z-index: 10; color: rgb(255, 255, 255);"><h2 class="has-text-weight-semibold mb-6-tablet is-size-5 is-size-2-tablet s-wWlsyhdhf8R2" style="color: rgb(255, 255, 255);">We strike for <span style="background-color: #ED6F49; color: #000000; padding-left: 6px; padding-right: 6px;">our Planet</span></h2> <p class="mb-12-tablet mb-6 mx-auto mt-6 is-size-6 is-size-5-tablet s-wWlsyhdhf8R2" style="color: rgb(255, 255, 255);">Today, 23.09.2022, is the day of the global climate strike. We also want to raise awareness by striking online. <b style="color: #ffffff">Please consider</b> using our strike time to make some notes on how <b style="color: #ffffff">you</b> could become active to help save our planet for coming generations. <b style="color: #ffffff">Thank you!</b></p> <a class="button px-6 is-inline-flex is-align-items-center is-medium is-responsive s-wWlsyhdhf8R2" style="background-color: #ED6F49; border: 0;" target="_blank" href="https://www.klima-streik.org/"><span class=" s-wWlsyhdhf8R2" style="color: rgb(255, 255, 255);">More infos</span></a></div></div></div></div></section>`
					);
				const bannerElement = document.getElementById('climatestrike_banner_2022');
				let styleViaBulmaScript = bannerElement.classList.contains('styleViaBulmaScript');
				if (styleViaBulmaScript) {
					let linkNode = document.createElement('link');
					linkNode.setAttribute('id', 'climatestrike__2022_external_styles');
					linkNode.setAttribute('rel', 'stylesheet');
					linkNode.setAttribute(
						'href',
						'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'
					);
					document.head.appendChild(linkNode);
				}
				if (window.innerWidth < 769) {
					bannerElement.firstChild.style.margin = '0 1.7rem 0 1.7rem';
				}
				if (sessionStorage.getItem('lastCounterStrikeTime')) {
					let lastDetectedTime = sessionStorage.getItem('lastCounterStrikeTime');
					document.querySelector('.climate_counter-number').innerHTML = lastDetectedTime;
				}
				const styleNode = document.createElement('style');
				styleNode.setAttribute('id', 'climatestrike_style');
				if (!styleViaBulmaScript) {
					styleNode.textContent = `button{z-index: 1500;}`;
				} else {
					styleNode.textContent = 'button{z-index: 1500;}';
				}
				document.head.appendChild(styleNode);
				let closeIcon = document.querySelector('.close_climatestrike');
				let checkCounter = document.querySelector('.climate_strike_counter');
				let saveInLocalStorage = document
					.getElementById('climatestrike_banner_2022')
					.classList.contains('onlyonce');
				if (closeIcon) {
					document.querySelector('.close_climatestrike').addEventListener('click', (event) => {
						event.preventDefault();
						document.getElementById('banner_climatestrike').remove();
						document.getElementById('backdrop_climatestrike').remove();
						document.getElementById('climatestrike_style')?.remove();
						document.querySelector('html').style['overflow-y'] = 'scroll';
						document.getElementById('climatestrike__2022_external_styles')?.remove();
						sessionStorage.setItem('climatestrikeBanner2022', 'true');
						if (test && checkCounter) return;
						if (saveInLocalStorage) {
							localStorage.setItem('climatestrikeBanner2022', 'true');
						}
						return;
					});
				}
				if (checkCounter) {
					myInterval = setInterval(() => {
						let readCounter = document.querySelector('.climate_counter-number')?.innerHTML;
						let saveInLocalStorage = document
							.getElementById('climatestrike_banner_2022')
							.classList.contains('onlyonce');
						if (readCounter === '0' || readCounter === 0) {
							clearInterval(myInterval);
							document.getElementById('banner_climatestrike').remove();
							document.getElementById('backdrop_climatestrike').remove();
							document.getElementById('climatestrike_style')?.remove();
							document.getElementById('climatestrike__2022_external_styles')?.remove();
							document.querySelector('html').style['overflow-y'] = 'scroll';
							sessionStorage.setItem('climatestrikeBanner2022', 'true');
							if (test) return;
							if (saveInLocalStorage) {
								localStorage.setItem('climatestrikeBanner2022', 'true');
							}
							return;
						}
						let htmlInMinutes =
							readCounter.indexOf('.') != -1 ||
							readCounter.indexOf(';') != -1 ||
							readCounter.indexOf(':') != -1;
						if (htmlInMinutes) {
							let counterDecimalIndex;
							if (readCounter.indexOf('.') != -1) counterDecimalIndex = readCounter.indexOf('.');
							if (readCounter.indexOf(';') != -1) counterDecimalIndex = readCounter.indexOf(';');
							if (readCounter.indexOf(':') != -1) counterDecimalIndex = readCounter.indexOf(':');
							let seconds = Number(readCounter.slice(counterDecimalIndex + 1, readCounter.length));
							let minutes = Number(readCounter.slice(0, counterDecimalIndex));
							if (seconds != 0 || seconds != '0') {
								seconds = seconds - 1;
							} else {
								minutes = minutes - 1;
								seconds = 59;
							}
							let timeString = `${minutes === 0 ? '' : minutes + ':'}${
								seconds < 10 ? `0${seconds}` : seconds
							}`;
							document.querySelector('.climate_counter-number').innerHTML = timeString;
							sessionStorage.setItem('lastCounterStrikeTime', timeString);
						} else {
							let newCounter = Number(readCounter) - 1;
							document.querySelector('.climate_counter-number').innerHTML = String(newCounter);
							sessionStorage.setItem('lastCounterStrikeTime', String(newCounter));
						}
					}, 1000);
				}
			});
		})();
	</script>
</svelte:head>
