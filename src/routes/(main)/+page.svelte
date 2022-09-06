<script>
	// @ts-nocheck
	import { tick } from 'svelte';
	import cssBanner from '$lib/bannerCss.js';
	import { HtmlTag } from 'svelte/internal';

	let link = 'https://www.klima-streik.org/';
	let btn = 'More infos';
	let header = `We strike for *our Planet*`;
	let content =
		'Today, 23.09.2022, is the day of the global climate strike. We also want to raise awareness by striking online.';
	let imgLink;
	let counter = '10 seconds';
	let closeIcon = false;

	let element;
	let scriptTag;
	let processingHtml = false;
	let forceUpdate = false;
	let myInterval;
	let timer;
	let preview = false;
	let regexHeader = /\*(.*?)\*/g;

	$: counterNumber = counter.slice(0, 2);
	$: parsedHeader = handleStringParse(header);

	function handleStringParse(string) {
		if (!string.match(regexHeader)) return string;
		while (string.match(regexHeader)) {
			let match = string.match(regexHeader)[0];
			let matchNew = match.replaceAll('*', '');
			string = string.replace(
				match,
				`<span class="has-background-warning has-text-black">${matchNew}</span>`
			);
		}
		// delete all *
		string = string.replace('*', '');
		return string;
	}

	function handleClick() {
		// console.log(
		// 	handleStringParse(header),
		// 	header.match(regexHeader)[0],
		// 	header.replace(header.match(regexHeader)[0], `<span>${header.match(regexHeader)[0]}</span>`)
		// );
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

	function setTimerInPreview() {
		if (counterNumber && document.querySelector('.climate_strike_counter')) {
			const initialCount = counterNumber;
			myInterval = setInterval(() => {
				let readNumber = document.querySelector('.climate_counter-number').innerHTML;
				readNumber = Number(readNumber) - 1;
				document.querySelector('.climate_counter-number').innerHTML = String(readNumber);
			}, 1000);

			timer = setTimeout(() => {
				clearInterval(myInterval);
				// document.getElementById('banner_climatestrike').style.display = 'none';
				handleClose();
			}, Number(counter.slice(0, 2)) * 1000);
		}
	}

	// the func function (within the getScript function) will be used as STRING and manipulated and the end of this function getScriptTag
	async function getScriptTag() {
		let exportableFunction = () => {
			window.addEventListener('load', (event) => {
				const url = document.location.hash;
				if (url != '#climatestrikebanner_23_09_2022') {
					if (
						Date.now() < new Date('2022-09-23T00:00:01').getTime() ||
						Date.now() > new Date('2022-09-23T23:59:59').getTime()
					) {
						return;
					}
				}

				if (sessionStorage.getItem('climatestrikeBanner2022') === 'true') return;
				if (url != '#climatestrikebanner_23_09_2022')
					sessionStorage.setItem('climatestrikeBanner2022', 'true');

				document.querySelector('html').style['overflow-y'] = 'hidden';
				document.querySelector('body').insertAdjacentHTML('afterbegin', `"%innerHtml%"`);
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
					});
				}
				if (checkCounter) {
					let interValCount = Number(document.querySelector('.climate_counter-number').innerHTML);
					let myInterval = setInterval(() => {
						let counterNumber = document.querySelector('.climate_counter-number').innerHTML;
						counterNumber = Number(counterNumber) - 1;
						document.querySelector('.climate_counter-number').innerHTML = String(counterNumber);
					}, 1000);

					setTimeout(() => {
						clearInterval(myInterval);
						document.getElementById('banner_climatestrike').remove();
						document.getElementById('backdrop_climatestrike').remove();
						document.getElementById('climatestrike_style').remove();
						document.querySelector('html').style['overflow-y'] = 'scroll';
					}, interValCount * 1000);
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
		scriptTag = `<script> const bannerFunc = ${scriptString}; bannerFunc();<\/script>`;

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
				<div class="close" id="close_climatestrike" />
				<h1
					class="title is-spaced is-2 my-6 is-size-3-desktop is-size-4"
					style="line-height: 120%;"
				>
					Add a smart and customized strike banner to your website and be part of the global
					climatestrike on the 23.09.2022.
				</h1>
				<form action="/" on:submit|preventDefault>
					<p class="is-size-4 mb-6">
						Once you add the banner to your website (via Script Tag) it will only show up on the
						23.09.2022. (no matter in which time zone you live in)
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
								class="input"
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
								class="textarea"
								name="field-name"
								rows="4"
								placeholder="Write something..."
							/>
						</div>
					</div>

					<div class="field mb-6">
						<label class="label is-size-4" for="">Call to Action</label>
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
						<label class="label is-size-4" for="">Background Image</label>
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
						<label class="label is-size-4" for="">Set seconds to show the banner</label>
						<div class="control">
							<div class="select is-fullwidth">
								<select bind:value={counter} name="field-name">
									<option selected>10 seconds</option>
									<option>20 seconds</option>
									<option>30 seconds</option>
									<option>60 seconds</option>
									<option>no timer</option>
								</select>
							</div>
						</div>
					</div>

					<div class="field mb-6">
						<div class="control is-size-4">
							<label class="checkbox" for="">
								<input
									bind:checked={closeIcon}
									class="checkbox"
									style="height: 1.3rem; width: 1.3rem;"
									type="checkbox"
									name="field-name"
									value="example value"
								/><span class=" ml-2">Let the user close the banner by a close icon</span>
							</label>
						</div>
					</div>

					<a
						on:click={handleClick}
						class="button is-medium is-primary is-responsive"
						href="/#script_climatestrike">Generate Script Tag</a
					>
				</form>
				<section class="mt-6 py-6 section" bind:this={element}>
					<div
						class="column is-10 is-offset-1 is-offset-1 mr-6-touch ml-6-touch"
						style={processingHtml ? 'height: 100vh; display: flex; align-items: center;' : ''}
					>
						<div id="banner_climatestrike" class="container is-max-widescreen">
							{#if closeIcon || preview}
								<button
									class="delete is-medium close_climatestrike"
									style="position: absolute; top: -1rem; right: -1rem;"
								/>
							{/if}

							{#if Number(counterNumber)}
								{#key forceUpdate}
									<button
										class="button is-medium climate_strike_counter is-responsive -mr-3"
										style="position: absolute; bottom: -1rem; right: -1rem;"
										><span
											class="has-text-weight-medium px-2 is-size-5 is-size-4-desktop climate_counter-number"
											>{counterNumber}</span
										>
									</button>
								{/key}
							{/if}

							<div
								class="py-10 px-5 is-relative has-background-info has-text-centered"
								style="border-radius: 4px; overflow: hidden;"
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
								<div class="py-6" style="position: relative; z-index: 10;">
									<h2 class="is-size-4 is-size-3-tablet has-text-weight-semibold has-text-white">
										{@html parsedHeader}
									</h2>
									<p class="has-mw-md mb-8 mx-auto has-text-white is-size-5 is-size-4-tablet mt-6">
										{content}
									</p>
									<a
										class="button px-6 is-inline-flex is-align-items-center is-warning is-medium is-responsive"
										target="_blank"
										href={link}
									>
										<span class="">{btn}</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<p class="is-size-4 mb-6 has-text-danger mx-auto has-text-centered">
					The banner will automatically be added on 23.09.2022 and disappear after that day.
				</p>
				<div class="mx-auto has-text-centered">
					<button
						on:click={() => {
							preview = !preview;
							handleClick();
						}}
						class="button is-responsive is-medium is-centered has-text-centered px-6 is-primary"
						>Live Preview
					</button>
				</div>

				<div class="field mb-6" id="script_climatestrike">
					<label class="label is-size-3" for="">Your Script-Tag</label>
					<p class="mb-4">
						Holds all the needed Html, Javascript und Style components. Thats the reason why the
						code snippet is so long. No externals scripts will be loaded! The banner will be shown
						on the 23.09.2022 automatically. Before and after this day the banner will not be
						loaded.
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
					<p class="mb-4 is-size-4">
						After you have added the script to your site, you can test it by adding <span
							>#climatestrikebanner_23_09_2022'</span
						> at the end of the url.
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
					How to do it in wordpress? <a
						target="_blank"
						href="https://ostraining.com/blog/wordpress/custom-js/">Here is a guide.</a
					>
				</p>
				<p>
					How to do it in WIX? <a target="_blank" href="https://www.youtube.com/watch?v=GorkXaOmpx4"
						>Here is a video on Youtube.</a
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
