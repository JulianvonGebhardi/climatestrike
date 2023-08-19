<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { onMount, tick, afterUpdate } from 'svelte';
	import cssBanner from '$lib/purgedPopup.js';
	import store from '$lib/store.js';

	///

	let mounted = false;
	onMount(() => {
		mounted = true;
		updateCurrentSettings();
		const linkParams = $page.url.search;
		if (linkParams === '') return;
		// Display the key/value pairs
		const paramSearchObject = new URLSearchParams(linkParams);
		for (const [key, value] of paramSearchObject.entries()) {
			if (userSettings.has(key)) {
				userSettings.set(key, value);
				if (key === 'header') {
					header = userSettings.get('header');
				}
				if (key === 'content') {
					content = userSettings.get('content');
				}
				if (key === 'btn') {
					btn = userSettings.get('btn');
				}
				if (key === 'link') {
					link = userSettings.get('link');
				}
				if (key === 'imgLink') {
					imgLink = userSettings.get('imgLink');
				}
				if (key === 'closeIcon') {
					closeIcon = userSettings.get('closeIcon');
					if (closeIcon === 'true') {
						closeIcon = true;
					} else {
						closeIcon = false;
					}
				}
				if (key === 'onlyOnce') {
					onlyOnce = userSettings.get('onlyOnce');
					if (onlyOnce === 'true') {
						onlyOnce = true;
					} else {
						onlyOnce = false;
					}
				}
				if (key === 'counter') {
					counter = userSettings.get('counter');
				}
				if (key === 'primaryColor') {
					primaryColor = userSettings.get('primaryColor');
				}
				if (key === 'secondaryColor') {
					secondaryColor = userSettings.get('secondaryColor');
				}
				if (key === 'headerColor') {
					headerColor = userSettings.get('headerColor');
				}
				if (key === 'markedHeaderColor') {
					markedHeaderColor = userSettings.get('markedHeaderColor');
				}
				if (key === 'textColor') {
					textColor = userSettings.get('textColor');
				}
				if (key === 'btnTextColor') {
					btnTextColor = userSettings.get('btnTextColor');
				}
			}
		}
	});

	function updateCurrentSettings() {
		userSettings = new Map([
			['header', header],
			['content', content],
			['btn', btn],
			['link', link],
			['imgLink', imgLink],
			['counter', counter],
			['closeIcon', closeIcon],
			['onlyOnce', onlyOnce],
			['primaryColor', primaryColor],
			['secondaryColor', secondaryColor],
			['headerColor', headerColor],
			['markedHeaderColor', markedHeaderColor],
			['textColor', textColor],
			['btnTextColor', btnTextColor]
		]);
	}

	function createShareableLink() {
		if (!mounted) return;
		updateCurrentSettings();
		for (const [key, value] of userSettings) {
			if (key && value != undefined) {
				let params = $page.url.searchParams;
				if (params.has(key)) {
					params = params.set(key, value);
				} else {
					params = params.append(key, value);
				}
			}
		}
		shareableLink = $page.url.href + $page.url.search;
		navigator?.clipboard?.writeText(shareableLink);
	}

	let link = 'https://www.klima-streik.org/';
	let btn = 'More infos';
	let header = `We strike for *our Planet*`;
	let start__Date;
	let end__Date;
	let content =
		'Today, 23.09.2023, is the day of the global climate strike. We also want to raise awareness by striking online. **Please consider** using our strike time to make some notes on how **you** could become active to help save our planet for coming generations. **Thank you!**';
	let imgLink;
	let counter = 30;
	let closeIcon = false;
	let onlyOnce = false;
	let primaryColor = '#1E549C';
	let secondaryColor = '#ED6F49';
	let headerColor = '#ffffff';
	let markedHeaderColor = '#000000';
	let textColor = '#ffffff';
	let btnTextColor = '#ffffff';

	let shareableLink;
	let element;
	let backdrop;
	let scriptTag;
	let processingHtml = false;
	let forceUpdate = false;
	let myInterval;
	let timer;
	let preview = false;
	let regexHeader = /\*(.*?)\*/g;
	let regexText = /\*\*(.*?)\*\*/g;
	let styleViaSriptTag = false;
	let userSettings;
	let copy = false;

	$: parsedHeader = handleStringParse(
		header,
		regexHeader,
		'*',
		`backgroundColor`,
		secondaryColor,
		markedHeaderColor
	);
	$: parseContent = handleStringParse(content, regexText, '**', `fett`, textColor);

	// second argument is only used to trigger the interactive parsedHeader variable
	function handleStringParse(string, regex, symbol, result) {
		if (!string.match(regex)) return string;
		let lastString = string;
		while (string.match(regex)) {
			let match = string.match(regex)[0];
			let matchNew = match.replaceAll(symbol, '');
			if (result === 'backgroundColor') {
				string = string.replace(
					match,
					`<span style="background-color: ${secondaryColor}; color: ${markedHeaderColor}; padding-left: 6px; padding-right: 6px;">${matchNew}</span>`
				);
			}
			if (result === 'fett') {
				string = string.replace(match, `<b style="color: ${textColor}">${matchNew}</b>`);
			}
			//TODO add safety net!!! When there is a wrong string in a called funtion the while loop wont stop
		}
		// delete all *
		string = string.replace(symbol, '');
		return string;
	}

	function checkAllValues() {
		const start__DateNumber = new Date(start__Date).getTime();
		const end__DateNumber = new Date(end__Date).getTime();
		if (header && content && btn && link && counter && start__DateNumber < end__DateNumber) {
			return true;
		} else {
			return false;
		}
	}

	function handleClick() {
		if (!checkAllValues()) {
			alert(
				'Please fill out all fields and make sure you add also the hour in the date fields. Also be sure, that the start date is before the end date.'
			);
			return;
		}
		console.log(start__Date, end__Date);
		setTimeout(() => {
			getScriptTag();
		}, 150);
	}

	function handleClose() {
		document.querySelector('html').style['overflow-y'] = 'scroll';
		preview = !preview;
		forceUpdate = !forceUpdate;
		clearInterval(myInterval);
		clearTimeout(timer);
	}

	function parseTimer(timeString) {
		//formats 10:00 10.00 and 10;00 // currently not working for hours
		let checkFormat =
			timeString.indexOf('.') != -1 ||
			timeString.indexOf(';') != -1 ||
			timeString.indexOf(':') != -1;
		if (!checkFormat) return null;
		let decimalIndex;
		if (timeString.indexOf('.') != -1) decimalIndex = timeString.indexOf('.');
		if (timeString.indexOf(';') != -1) decimalIndex = timeString.indexOf(';');
		if (timeString.indexOf(':') != -1) decimalIndex = timeString.indexOf(':');

		let seconds = Number(timeString.slice(decimalIndex + 1, timeString.length));
		let minutes = Number(timeString.slice(0, decimalIndex));

		return { minutes: minutes, seconds: seconds };
	}

	function setTimerInPreview() {
		forceUpdate = !forceUpdate;
		clearInterval(myInterval);
		clearTimeout(timer);
		if (counter && document.querySelector('.climate_strike_counter')) {
			myInterval = setInterval(() => {
				let readCounter = document.querySelector('.climate_counter-number').innerHTML;
				//handle counter if time is up
				if (readCounter === '0' || readCounter === 0) {
					clearInterval(myInterval);
					handleClose();
					return;
				}
				if (parseTimer(readCounter)) {
					let time = parseTimer(readCounter);
					let seconds = time.seconds;
					let minutes = time.minutes;
					// total seconds is the real time we have to work with
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
				} else {
					let newCounter = Number(readCounter) - 1;
					document.querySelector('.climate_counter-number').innerHTML = String(newCounter);
				}
			}, 1000);
		}
		document.querySelector('html').style['overflow-y'] = 'hidden';
	}

	// the func function (within the getScript function) will be used as STRING and manipulated and the end of this function getScriptTag
	async function getScriptTag() {
		function exportableFunction() {
			window.addEventListener('load', (event) => {
				const url = document.location.hash;
				const test = url === '#climatestrikebanner_23_09_2022';
				let itsStrikeDay =
					Date.now() > new Date('start__Date').getTime() &&
					Date.now() < new Date('end__Date').getTime();
				if (url != '#test_strike_banner' && !itsStrikeDay) return;
				let userHasSeenThis =
					sessionStorage.getItem('climatestrikeBanner2022') === 'true' ||
					localStorage.getItem('climatestrikeBanner2022') === 'true';
				if (userHasSeenThis) return;
				document.querySelector('html').style['overflow-y'] = 'hidden';
				document.querySelector('body').insertAdjacentHTML('afterbegin', `"%innerHtml%"`);
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
					bannerElement.firstChild.style.margin = '0 1.5rem 0 1.5rem';
					bannerElement.firstChild.style['padding-right'] = '0';
					bannerElement.firstChild.style['padding-left'] = '0';
				}

				if (sessionStorage.getItem('lastCounterStrikeTime')) {
					let lastDetectedTime = sessionStorage.getItem('lastCounterStrikeTime');
					document.querySelector('.climate_counter-number').innerHTML = lastDetectedTime;
				}

				const styleNode = document.createElement('style');
				styleNode.setAttribute('id', 'climatestrike_style');
				if (!styleViaBulmaScript) {
					styleNode.textContent = `"%cssBanner%"`;
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
		}

		// this upcoming part now will have impact on the web app to produce the correct script tag function and the preview banner

		const backDrop =
			'<div id="backdrop_climatestrike" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.59); z-index: 500;   overflow-y: hidden"/>';

		processingHtml = true;
		await tick();
		let scriptString = String(exportableFunction).replace(
			'"%innerHtml%"',
			backDrop + element.outerHTML
		);
		scriptString = scriptString.replace('start__Date', start__Date);
		scriptString = scriptString.replace('end__Date', end__Date);
		// WICHTIG use the current state to save the html without css incl. backdrop
		store.update(backDrop + element.outerHTML);

		const styleNode = document.createElement('style');
		if (!styleViaSriptTag) {
			styleNode.textContent = cssBanner;
		} else {
			styleNode.textContent = 'button{z-index: 1500;}';
		}
		styleNode.setAttribute('id', 'climatestrike_style');
		scriptString = scriptString.replace('"%cssBanner%"', styleNode.innerHTML);

		processingHtml = false;
		const regex = /(?:\s)\s/g;
		scriptString = scriptString.replace(regex, '');
		const getIdentifer = String(Math.random()).slice(2);
		//make sure every function has a unique identifier
		//scriptString = scriptString.replace('exportableFunction', `bannerFunction${getIdentifer}`);
		//scriptTag = `<script>${scriptString}; bannerFunction${getIdentifer}();<\/script>`;
		scriptTag = `<script>(${scriptString})();<\/script>`;
		// update store
		return;
	}
</script>

<body>
	{#if element && preview}
		<div
			on:click={handleClose}
			id="backdrop_climatestrike"
			style="position: fixed; top: 0px; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.59); z-index: 500;"
		>
			<div
				class="preview is-flex-wrap-wrap is-align-content-center has-text-centered mx-auto mt-6 mt-8-tablet mt-10-desktop"
				style="height: 100vh; display: flex; align-items: center; position: relative;"
			>
				{@html element.innerHTML}
				<div
					class="has-text-centered has-text-weight-medium mx-auto preview-close is-size-7 is-size-5-desktop is-size-6-tablet -mt-1-tablet -mt-2 mt-5-desktop"
					style="flex: 1 0 100%;"
				>
					Click anywhere to close the preview<br />
					<span class="is-size-7 is-size-6-tablet has-text-weight-light"
						>(works only here in the preview)</span
					>
				</div>
			</div>
		</div>
	{/if}

	<div class="container is-fluid px-0">
		<div>
			<div class="py-10 has-background-primary">
				<div class="has-mw-5xl mx-auto has-text-centered">
					<h2
						class="title is-spaced is-uppercase has-text-centered has-text-white py-6 px-4 -mx-4 is-size-3-desktop is-size-4 is-size-3-tablet mb-0"
					>
						🌍 Let´s also strike in the web 🌍
					</h2>
					<a href="/popup">Popup</a>
					<p
						class="has-text-centered is-size-4-desktop is-size-6 is-size-4-tablet has-text-white pb-4 is-underlined"
					>
						Also in the web!
					</p>
					<h1
						class="title is-spaced is-2 my-6 is-size-2-desktop is-size-4-mobile is-size-3-tablet has-text-white px-12-tablet px-6"
						style="line-height: 120%;"
					>
						Take only 5 minutes to create and add a timed and customized website strike-banner to
						also create awareness online.
					</h1>
					<p
						on:click={() => {
							preview = !preview;
							setTimerInPreview();
						}}
						class="is-size-4 has-text-white has-text-weight-bold is-underlined is-clickable"
					>
						Show Live-Example
					</p>
				</div>
			</div>
		</div>

		<div class="section has-mw-5xl mx-auto" id="start-main-content-01">
			<div class="section container p-0">
				.
				<div class="close" id="close_climatestrike" />

				<form action="/" on:submit|preventDefault>
					<p class="is-size-4 mb-6">
						The banner is also fully
						<b class="has-text-primary"> mobile optimized!</b> (works for all timezones)
					</p>

					<div class="field mb-6">
						<label id="input__dates" class="label is-size-4" for=""
							>Dates on which the Banner should appear</label
						>
						<p class="is-size-6 mb-2">
							Select a time period in which the banner should appear. The banner will automatically
							be activated based on the selected time period and disappear the day after.
						</p>
						<div class="control">
							<div class="columns">
								<div class="column is-6">
									<h3 class="is-size-5 has-text-weight-bold">Start Date</h3>
									<input
										bind:value={start__Date}
										class="input is-size-6 is-size-5-tablet"
										type="datetime-local"
										name="field-name"
										placeholder="Write a text"
									/>
									<!--elements-->
								</div>
								<div class="column is-6">
									<h3 class="is-size-5 has-text-weight-bold">End Date</h3>
									<input
										bind:value={end__Date}
										class="input is-size-6 is-size-5-tablet"
										type="datetime-local"
										name="field-name"
										placeholder="Write a text"
									/>
									<!--elements-->
								</div>
							</div>
						</div>
					</div>
					<div class="field mb-6">
						<label class="label is-size-4" for="">Banner Header </label>
						<p class="is-size-6 mb-2">
							To give the text a background color, simply use the symbol * before and after the
							word. Example: *Words*
						</p>
						<div class="control">
							<input
								bind:value={header}
								class="input is-size-6 is-size-5-tablet"
								type="text"
								name="field-name"
								placeholder="Write a text"
							/>
						</div>
					</div>

					<div class="field mb-6">
						<label class="label is-size-4" for="">Banner Content</label>
						<p class="is-size-6 mb-2">
							To make a word <span class="has-text-weight-bold">STRONG</span> simply use the symbols
							** before and after the word. Example: **Words**
						</p>
						<div class="control">
							<!-- create a div tag with with the content the max height of 20 lines and a scroll bar -->

							<textarea
								bind:value={content}
								class="textarea is-size-6"
								name="field-name"
								rows="3"
								placeholder="Write something..."
							/>
						</div>
					</div>

					<h4 class="label is-size-4" for="">Call to Action Button</h4>
					<div class="columns">
						<div class="column is-6">
							<div class="control">
								<label class="label" for="">Button Text</label>
								<input
									bind:value={btn}
									class="input"
									type="text"
									name="field-name"
									placeholder="Write a text"
								/>
							</div>
						</div>
						<div class="column is-6">
							<div class="control">
								<label class="label" for="">Button Link</label>
								<input
									bind:value={link}
									class="input"
									type="text"
									name="field-link"
									placeholder="Write a text"
								/>
							</div>
						</div>
					</div>

					<div class="field mb-6">
						<label class="label is-size-4 mb-1" for=""
							>Background Image <span class="is-size-5">(Optional)</span></label
						>
						<p>
							Please only use images-urls which are hosted by yourself or where you have the
							permission to do so.
						</p>
						<!-- <div class="control">
							<label class="label my-2" for="">Button Text</label>
							<input class="input" type="text" name="field-name" placeholder="Write a text" />
						</div> -->
						<div class="control">
							<label class="label my-2" for="">Image Link</label>
							<input
								bind:value={imgLink}
								class="input"
								type="text"
								name="field-name"
								placeholder="Write a text"
							/>
						</div>
					</div>

					<div class="field mb-6">
						<label class="label is-size-4 mb-1" for="">Set a strike-time</label>
						<p class="mb-2">
							A countdown until the banner will be close automatically. Use the preview button to
							test it.
						</p>
						<div class="control">
							<div class="select is-fullwidth">
								<select bind:value={counter} name="field-name">
									<option value="10">10 seconds</option>
									<option value="20">20 seconds</option>
									<option selected value="30">30 seconds</option>
									<option value="60">60 seconds</option>
									<option value="120">2 Minuten</option>
									<option value="300">5 Minuten</option>
									<option value="noNumber">no timer</option>
								</select>
							</div>
						</div>
					</div>

					<div class="field mb-6">
						<div class="control is-size-5">
							<label class="checkbox" for="checkbox_climastrike_close">
								<input
									bind:checked={closeIcon}
									class="checkbox"
									style="height: 1.2rem; width: 1.2rem;"
									type="checkbox"
									name="checkbox_close"
									value="example value"
									id="checkbox_climastrike_close"
								/><span class="ml-2"
									>Let the website visitor close the banner anytime by a close icon</span
								>
							</label>
						</div>
					</div>
					<div class="field mb-6">
						<div class="control is-size-5">
							<label class="checkbox" for="checkbox_climastrike_save" style="line-height: 150%;">
								<input
									bind:checked={onlyOnce}
									class="checkbox"
									style="height: 1.2rem; width: 1.2rem;"
									type="checkbox"
									name="checkbox_save"
									value="example value"
									id="checkbox_climastrike_save"
								/><span class="ml-2">Make the banner only appear once.</span>
								<p class="is-size-6 mt-2">
									This means that the banner wont be reloaded even when you close the browser or
									restart your computer as long as you visit the site with the same browser. The
									standard behavior is, that the banner wont be reloaded when navigation or
									refreshing the site but when opening a new tab or restarting the browser/computer.
								</p>
							</label>
						</div>
					</div>
					<div class="columns mb-4 is-size-6 is-mobile is-centered is-multiline">
						<div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">
							<label for="color1">
								<p>Color 1</p>
								<input type="color" name="color" id="color1" bind:value={primaryColor} />
							</label>
						</div>
						<div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">
							<label for="color2">
								<p>Color 2</p>
								<input type="color" id="color2" bind:value={secondaryColor} />
							</label>
						</div>
						<div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">
							<label for="color3">
								<p>Header</p>
								<input type="color" id="color3" bind:value={headerColor} />
							</label>
						</div>
						<div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">
							<label for="color4">
								<p>Marked Text</p>
								<input type="color" name="color3" id="color4" bind:value={markedHeaderColor} />
							</label>
						</div>
						<div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">
							<label for="color5">
								<p>Text</p>
								<input type="color" name="color4" id="color5" bind:value={textColor} />
							</label>
						</div>
						<div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">
							<label for="color6">
								<p>Button Text</p>
								<input type="color" name="color5" id="color6" bind:value={btnTextColor} />
							</label>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="my-0">
			<p
				class=" is-size-6 is-size-4-desktop is-size-5-tablet is-underlined mb-6 has-text-primary mx-auto has-text-centered"
			>
				Strike banner design preview below
			</p>
		</div>
		<section
			class="px-0 {processingHtml ? '' : 'mt-6 py-20 section box'}"
			bind:this={element}
			class:onlyonce={onlyOnce}
			class:styleViaBulmaScript={styleViaSriptTag}
			id="climatestrike_banner_2022"
			style={preview ? 'visibility: hidden;' : ''}
		>
			<div
				class="column is-10 is-offset-1 is-offset-1 mr-6-mobile ml-6-mobile"
				style={processingHtml ? 'height: 100vh; display: flex; align-items: center;' : ''}
			>
				<div id="banner_climatestrike" class="container is-max-widescreen">
					{#if closeIcon || preview}
						<button
							class="delete is-medium close_climatestrike"
							style="position: absolute; top: -1rem; right: -1rem;"
						/>
					{/if}

					{#if Number(counter)}
						{#key forceUpdate}
							<button
								class="button is-medium climate_strike_counter is-responsive -mr-3"
								style="position: absolute; bottom: -1rem; right: -1rem;"
								><span
									class="has-text-weight-medium px-2 is-size-5 is-size-4-desktop climate_counter-number"
									>{counter > 60 ? (counter / 60).toFixed(2).replace('.', ':') : counter}</span
								>
							</button>
						{/key}
					{/if}

					<div
						class="py-6 px-5 is-relative has-text-centered"
						style={`border-radius: 4px; overflow: hidden; background-color: ${primaryColor}; max-height: 80vh; overflow-y: auto;`}
					>
						<div
							style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; opacity: 50%;"
						>
							{#if imgLink}
								<img
									class="image mx-auto"
									style="object-size: contain;"
									src={imgLink ? imgLink : ''}
									alt={imgLink ? 'Backgroundimage' : ''}
								/>
							{/if}
						</div>
						<div
							class="py-6 px-4-mobile px-6-tablet mx-auto column is-7-desktop is-10-tablet"
							style="position: relative; z-index: 10; color: {headerColor}"
						>
							<h2
								class="has-text-weight-semibold mb-6-tablet {processingHtml
									? 'is-size-5 is-size-2-tablet'
									: 'is-size-4 is-size-3-tablet'}"
								style="color: {headerColor};"
							>
								{@html parsedHeader}
							</h2>
							<p
								class="mb-12-tablet mb-6 mx-auto mt-6 {processingHtml
									? 'is-size-6 is-size-5-tablet'
									: 'is-size-5 is-size-4-tablet'}"
								style="color: {textColor};"
							>
								{@html parseContent}
							</p>
							<a
								class="button px-6 is-inline-flex is-align-items-center is-medium is-responsive"
								style={`background-color: ${secondaryColor}; border: 0;`}
								target="_blank"
								href={link}
							>
								<span style="color: {btnTextColor};" class="">{btn}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="has-mw-5xl mx-auto">
			<div class="section container -mt-8">
				<div class="mx-auto has-text-centered mb-12 mt-8">
					<div class="columns is-multiline is-centered">
						<div class="column is-3 -is-offset-3">
							<button
								on:click={() => {
									preview = !preview;
									setTimerInPreview();
								}}
								class="button is-responsive is-large px-6 is-primary mr-5-tablet"
								>Live Banner Preview
							</button>
						</div>
						<div class="column is-3 -is-offset-3">
							<a
								on:click={handleClick}
								href={!checkAllValues() ? '/#start-main-content-01' : '/#script_climatestrike'}
							>
								<button class="button is-responsive is-large px-6 is-primary ml-5-tablet">
									Generate Script-Tag</button
								></a
							>
						</div>
					</div>

					<p class="is-size-6 is-size-5-desktop mt-4">
						<b>Share your design and all settings via link with a colleque</b>
					</p>
					<p
						on:click={() => {
							setTimeout(() => {
								copy = false;
							}, 1000);
							copy = true;
							createShareableLink();
						}}
						class="is-clickable is-size-6 has-text-primary mt-4"
						class:is-underlined={!copy}
					>
						{copy ? 'Saved to clipboard!' : 'Copy link to clipboard'}
					</p>
				</div>

				<p class="is-size-6 is-size-5-desktop mb-6 has-text-danger mx-auto has-text-centered">
					<span><b class="has-text-danger">General info:</b></span> Once the script has been added
					to your website, the strike-banner will automatically be activated and deactivated
					according to <a href="#input__dates"><b>the selected time-period</b> </a> (Its always based
					on your local time)
				</p>

				<div class="field mb-6" id="script_climatestrike">
					<label class="label is-size-3" for="">Your Script-Tag</label>
					<p class="mb-4">
						Holds all the needed HTML, JavaScript and Style assets. That's the reason why the code
						snippet is so long. <b class="has-text-primary">
							No externals scripts will be loaded</b
						>, unless you add the Style Script via the checkbox below or when adding a background
						image link (source).
					</p>
					<div class="control is-size-5">
						<label
							on:click={handleClick}
							class="checkbox mb-6"
							for="checkbox_climastrike_shortscript"
							style="line-height: 150%;"
						>
							<input
								bind:checked={styleViaSriptTag}
								class="checkbox"
								style="height: 1.2rem; width: 1.2rem;"
								type="checkbox"
								name="checkbox_shortscript"
								id="checkbox_climastrike_shortscript"
							/><span class="ml-2"
								>Slightly shorten the script by loading the needed css styles via an official
								external script</span
							> <br /><code class="is-size-7"
								>Will be loaded from: https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css</code
							>
						</label>
					</div>
					<div class="control">
						<div
							style="max-height: 15rem; min-height: 15rem;"
							class="has-background-white"
							id="scriptTag__text"
						>
							<textarea
								readonly
								class="textarea"
								name="field-name"
								rows="12"
								placeholder="Click auf den Button um den passenden Code hier zu erhalten"
								>{scriptTag ? scriptTag : ''}</textarea
							>
						</div>
						<p class="is-size-6 -mt-6">
							<br /><br /> Make sure to generate the script again after changing the design or text.
							<a
								class="is-underlined has-text-danger"
								href="/#script_climatestrike"
								on:click={handleClick}>Generate Script again</a
							>
						</p>
					</div>
				</div>

				<div class="field mb-6" id="script_climatestrike">
					<label class="label is-size-3-desktop is-size-4" for="">Test your scripts</label>
					<p class="mb-4 is-size-5">
						After you have added the script to your site, you can test it by adding <span
							>#test_strike_banner</span
						> at the end of the url. Once the countdown is up, you need to open a new tab to test it
						again. The checkbox "only show once" wont affect the testing environment to make testing
						easier. (Otherwise you would have to delete your browser storage all the time)
					</p>
					<p>EXAMPLE: https://deineurl.de#test_strike_banner</p>
				</div>
				<div class="field mb-6">
					<label class="label is-size-3-desktop is-size-4" for="">Add the script to your site</label
					>
					<p class="mb-4 is-size-5">
						You just need to copy the code snippet and paste it in between your Html HEAD-Tags.
					</p>
					<code class="mb-4"> &#60;head&#62; CODE SNIPPET &#60;/head&#62;</code>
				</div>
				<p>
					How to do it in Wordpress? <a
						target="_blank"
						href="https://ostraining.com/blog/wordpress/custom-js/">Here is a guide.</a
					>
				</p>
				<p>
					How to do it in WIX? <a target="_blank" href="https://www.youtube.com/watch?v=GorkXaOmpx4"
						>Here is a video on Youtube.</a
					>
				</p>
				<p class="mt-4">
					This is a open source project. <a
						target="_blank"
						href="https://github.com/JulianvonGebhardi/climatestrike">(Github Repo)</a
					>
				</p>
				<p class="mt-4">
					Questions, inspiration ect. Contact: <span class="is-underlined"
						>julian[ät]happyinbox[dot].io</span
					>
				</p>
			</div>
		</div>
	</div>
</body>

<style>
	button {
		z-index: 700;
	}

	/* #backdrop_climatestrike {
		z-index: 1000 !important;
	} */

	.preview {
		z-index: 5000 !important;
		position: absolute;
	}

	.preview-close {
		margin-top: 2rem;
		color: white;
	}

	.is-fluid {
		z-index: 1;
	}

	label.is-size-4,
	label.is-size-3,
	a,
	h4,
	b {
		color: #7ebb55;
	}

	label {
		color: rgb(61, 61, 61);
	}

	button {
		z-index: 1500 !important;
	}
</style>
