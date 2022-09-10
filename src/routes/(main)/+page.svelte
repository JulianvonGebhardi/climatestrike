<script>
	// @ts-nocheck
	import { tick } from 'svelte';
	import cssBanner from '$lib/bannerCss.js';

	let link = 'https://www.klima-streik.org/';
	let btn = 'More infos';
	let header = `We strike for *our Planet*`;
	let content =
		'Today, 23.09.2022, is the day of the global climate strike. We also want to raise awareness by striking online.';
	let imgLink;
	let counter;
	let closeIcon = false;
	let onlyOnce = false;
	let primaryColor = '#1E549C';
	let secondaryColor = '#ED6F49';
	let headerColor = '#ffffff';
	let markedHeaderColor = '#000000';
	let textColor = '#ffffff';
	let btnTextColor = '#ffffff';

	let element;
	let scriptTag;
	let processingHtml = false;
	let forceUpdate = false;
	let myInterval;
	let timer;
	let preview = false;
	let regexHeader = /\*(.*?)\*/g;

	// $: counterNumber = counter.slice(0, 2);
	$: parsedHeader = handleStringParse(header, secondaryColor, markedHeaderColor);

	// second argument is only used to trigger the interactive parsedHeader variable
	function handleStringParse(string) {
		if (!string.match(regexHeader)) return string;
		while (string.match(regexHeader)) {
			let match = string.match(regexHeader)[0];
			let matchNew = match.replaceAll('*', '');
			string = string.replace(
				match,
				`<span style="background-color: ${secondaryColor}; color: ${markedHeaderColor}; padding-left: 6px; padding-right: 6px;">${matchNew}</span>`
			);
		}
		// delete all *
		string = string.replace('*', '');
		return string;
	}

	function handleClick() {
		forceUpdate = !forceUpdate;
		clearInterval(myInterval);
		clearTimeout(timer);
		getScriptTag();
	}

	function handleClose() {
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
	}

	// the func function (within the getScript function) will be used as STRING and manipulated and the end of this function getScriptTag
	async function getScriptTag() {
		let exportableFunction = () => {
			window.addEventListener('load', (event) => {
				const url = document.location.hash;
				const test = url === '#climatestrikebanner_23_09_2022';
				let itsStrikeDay =
					Date.now() > new Date('2022-09-23T00:00:01').getTime() ||
					Date.now() < new Date('2022-09-23T23:59:59').getTime();
				if (url != '#climatestrikebanner_23_09_2022' || !itsStrikeDay) return;
				let userHasSeenThis =
					sessionStorage.getItem('climatestrikeBanner2022') === 'true' ||
					localStorage.getItem('climatestrikeBanner2022') === 'true';
				if (userHasSeenThis) return;
				document.querySelector('html').style['overflow-y'] = 'hidden';
				document.querySelector('body').insertAdjacentHTML('afterbegin', `"%innerHtml%"`);
				if (sessionStorage.getItem('lastCounterStrikeTime')) {
					let lastDetectedTime = sessionStorage.getItem('lastCounterStrikeTime');
					document.querySelector('.climate_counter-number').innerHTML = lastDetectedTime;
				}
				const styleNode = document.createElement('style');
				styleNode.setAttribute('id', 'climatestrike_style');
				let style = `"%cssBanner%"`;
				styleNode.textContent = style;
				document.head.appendChild(styleNode);

				let closeIcon = document.querySelector('.close_climatestrike');
				let checkCounter = document.querySelector('.climate_strike_counter');
				if (closeIcon) {
					document.querySelector('.close_climatestrike').addEventListener('click', (event) => {
						event.preventDefault();
						document.getElementById('banner_climatestrike').remove();
						document.getElementById('backdrop_climatestrike').remove();
						document.getElementById('climatestrike_style').remove();
						document.querySelector('html').style['overflow-y'] = 'scroll';
						if (test && checkCounter) return;
						let saveInLocalStorage = document
							.getElementById('climatestrike_banner_2022')
							.classList.contains('onlyonce');
						if (saveInLocalStorage) {
							localStorage.setItem('climatestrikeBanner2022', 'true');
						} else {
							sessionStorage.setItem('climatestrikeBanner2022', 'true');
						}
						return;
					});
				}
				if (checkCounter) {
					myInterval = setInterval(() => {
						let readCounter = document.querySelector('.climate_counter-number').innerHTML;
						if (readCounter === '0' || readCounter === 0) {
							clearInterval(myInterval);
							document.getElementById('banner_climatestrike').remove();
							document.getElementById('backdrop_climatestrike').remove();
							document.getElementById('climatestrike_style').remove();
							document.querySelector('html').style['overflow-y'] = 'scroll';
							if (test) return;
							let saveInLocalStorage = document
								.getElementById('climatestrike_banner_2022')
								.classList.contains('onlyonce');
							if (saveInLocalStorage) {
								localStorage.setItem('climatestrikeBanner2022', 'true');
							} else {
								sessionStorage.setItem('climatestrikeBanner2022', 'true');
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
		};

		// this upcoming part now will have impact on the web app to produce the correct script tag function and the preview banner
		if (preview) setTimerInPreview();

		const backDrop =
			'<div id="backdrop_climatestrike" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.59); z-index: 500;   overflow-y: hidden"/>';

		processingHtml = true;
		await tick();
		let scriptString = String(exportableFunction).replace(
			'"%innerHtml%"',
			backDrop + element.innerHTML
		);

		const styleNode = document.createElement('style');
		styleNode.textContent = cssBanner;
		styleNode.setAttribute('id', 'climatestrike_style');
		scriptString = scriptString.replace('"%cssBanner%"', styleNode.innerHTML);

		processingHtml = false;
		const regex = /(?:\s)\s/g;
		scriptString = scriptString.replace(regex, '');
		scriptTag = `<script> const climateStrikeFunctionScript = ${scriptString}; climateStrikeFunctionScript();<\/script>`;

		return;
	}
</script>

<body>
	{#if element && preview}
		<div on:click={handleClose}>
			<div style="width: 100%; height: 100%; position: fixed;">
				<div
					id="backdrop_climatestrike"
					style="position: fixed; display: flex; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.59);"
				/>

				<div
					class="preview is-flex-wrap-wrap is-align-content-center has-text-centered mx-auto"
					style="height: 100vh; display: flex; align-items: center; position: relative;"
				>
					{@html element.innerHTML}
					<div class="has-text-centered mx-auto preview-close is-size-4" style="flex: 1 0 100%;">
						Click anywhere to close<br />
						<span class="is-size-5">(works only here in the preview)</span>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<div class="container is-fluid px-0" style={preview ? 'visibility: hidden;' : ''}>
		<div>
			<div class="has-background-primary py-8">
				<h2
					class="title is-spaced has-text-centered has-text-white py-6 px-4 -mx-4 is-size-1-desktop is-size-3 is-size-2-tablet mb-0"
				>
					🌍 Let´s strike for our planet 🌍
				</h2>
				<p
					class="has-text-centered is-size-2-desktop is-size-4 is-size-3-tablet has-text-white pb-4"
				>
					Also in the web!
				</p>
			</div>
		</div>

		<div class="section has-mw-5xl mx-auto">
			<div class="section container p-0">
				.
				<div class="close" id="close_climatestrike" />
				<h1
					class="title is-spaced is-2 my-6 is-size-3-desktop is-size-4"
					style="line-height: 120%;"
				>
					Take only 5 minutes to create and add a smart and customized strike banner to your website
					and be part of the global climate strike on the 23.09.2022.
				</h1>
				<form action="/" on:submit|preventDefault>
					<p class="is-size-4 mb-6">
						The banner will automatically be activated on the global strike day, the 23.09.2022. The
						banner is also fully <b> mobile optimized!</b> (works for all timezones)
					</p>

					<div class="field mb-6">
						<label class="label is-size-4" for="">Banner Header </label>
						<p class="is-size-6 mb-2">
							To give the text a background color, simply use the symbol * before and after the
							word. Example: *Words*
						</p>
						<div class="control">
							<input
								bind:value={header}
								class="input is-size-6"
								type="text"
								name="field-name"
								placeholder="Write a text"
							/>
						</div>
					</div>

					<div class="field mb-6">
						<label class="label is-size-4" for="">Banner Content</label>
						<div class="control">
							<textarea
								bind:value={content}
								class="textarea is-size-6"
								name="field-name"
								rows="2"
								placeholder="Write something..."
							/>
						</div>
					</div>

					<div class="field mb-6">
						<label class="label is-size-4" for="">Call to Action Button</label>
						<div class="control">
							<label class="label my-2" for="">Button Text</label>
							<input
								bind:value={btn}
								class="input"
								type="text"
								name="field-name"
								placeholder="Write a text"
							/>
						</div>
						<div class="control">
							<label class="label my-2" for="">Button Link</label>
							<input
								bind:value={link}
								class="input"
								type="text"
								name="field-link"
								placeholder="Write a text"
							/>
						</div>
					</div>

					<div class="field mb-6">
						<label class="label is-size-4" for=""
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
						<label class="label is-size-4" for="">Set a strike-time</label>
						<p class="mb-2">
							A countdown until the banner will be close automatically. Use the preview button to
							test it.
						</p>
						<div class="control">
							<div class="select is-fullwidth">
								<select bind:value={counter} name="field-name">
									<option selected value="10">10 seconds</option>
									<option value="20">20 seconds</option>
									<option value="30">30 seconds</option>
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
					<div class="columns mb-4">
						<div class="column is-12">
							<label for="color">
								<input type="color" name="color" id="" bind:value={primaryColor} />
								<span class=" ml-2 mr-4">Color 1</span>
							</label>
							<label for="color1">
								<input type="color" name="color1" id="" bind:value={secondaryColor} />
								<span class=" ml-2 mr-4">Color 2</span>
							</label>
							<label for="color2">
								<input type="color" name="color2" id="" bind:value={headerColor} />
								<span class=" ml-2 mr-4">Header</span>
							</label>
							<label for="color3">
								<input type="color" name="color3" id="" bind:value={markedHeaderColor} />
								<span class=" ml-2 mr-4">Marked Text</span>
							</label>
							<label for="color4">
								<input type="color" name="color4" id="" bind:value={textColor} />
								<span class=" ml-2 mr-4">Text</span>
							</label>
							<label for="color5">
								<input type="color" name="color5" id="" bind:value={btnTextColor} />
								<span class=" ml-2 mr-4">Button Text</span>
							</label>
						</div>
					</div>

					<a
						on:click={handleClick}
						class="button is-medium is-primary is-responsive"
						href="/#script_climatestrike">Generate Script Tag</a
					>
				</form>
			</div>
		</div>
		<section
			class="mt-6 py-6 section px-0"
			bind:this={element}
			class:onlyonce={onlyOnce}
			id="climatestrike_banner_2022"
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
						class="py-10 px-5 is-relative has-text-centered"
						style={`border-radius: 4px; overflow: hidden; background-color: ${primaryColor};`}
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
						<div class="py-6" style="position: relative; z-index: 10; color: {headerColor}">
							<h2 class="is-size-4 is-size-3-tablet has-text-weight-semibold">
								{@html parsedHeader}
							</h2>
							<p
								class="has-mw-md mb-8 mx-auto is-size-5 is-size-4-tablet mt-6"
								style="color: {textColor};"
							>
								{content}
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
				<p class="is-size-6 is-size-5-desktop mb-6 has-text-danger mx-auto has-text-centered">
					The banner will automatically only be added on <b>23.09.2022</b> and disappear after that
					day.
					<span class="is-underlined"> Note:</span> Make sure to generate the script again after
					changing the design or text.
					<a
						class="is-underlined has-text-danger"
						href="/#script_climatestrike"
						on:click={handleClick}>Generate Script again</a
					>
				</p>
				<div class="mx-auto has-text-centered mb-6 mt-8">
					<button
						on:click={() => {
							preview = !preview;
							handleClick();
						}}
						class="button is-responsive is-large is-centered has-text-centered px-6 is-primary"
						>Live Preview
					</button>
				</div>

				<div class="field mb-6" id="script_climatestrike">
					<label class="label is-size-3" for="">Your Script-Tag</label>
					<p class="mb-4">
						Holds all the needed HTML, JavaScript and Style assets. That's the reason why the code
						snippet is so long. <b>
							No externals scripts will be loaded! For that reason, it absolutely save and data
							security compliant.</b
						> Only when you add a background image, it will be loaded from the source you have given.
					</p>
					<div class="control">
						<textarea
							readonly
							class="textarea"
							name="field-name"
							rows="12"
							placeholder="Click auf den Button um den passenden Code hier zu erhalten"
							>{scriptTag ? scriptTag : ''}</textarea
						>
					</div>
				</div>
				<div class="field mb-6" id="script_climatestrike">
					<label class="label is-size-3-desktop is-size-4" for="">Test your scripts</label>
					<p class="mb-4 is-size-5">
						After you have added the script to your site, you can test it by adding <span
							>#climatestrikebanner_23_09_2022'</span
						> at the end of the url. Once the countdown is up, you need to open a new tab to test it
						again.
					</p>
					<p>EXAMPLE: https://deineurl.de#climatestrikebanner_23_09_2022</p>
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
		z-index: 1500;
	}
	.preview {
		z-index: 1000;
	}

	.preview-close {
		margin-top: 2rem;
		color: white;
	}
</style>
