<script>
	// @ts-nocheck
	import { tick } from 'svelte';
	import cssBanner from '$lib/bannerCss.js';

	let link = 'https://www.klima-streik.org/';
	let btn = 'More infos';
	// let header = 'Wir streiken zum globalen Klimastreik!';
	let content =
		'Today on the 23.09.2022 is the day of the global climate strike. We also want to create awareness by striking online.';
	let imgLink;
	let counter = '10 seconds';
	let closeIcon = false;

	let element;
	let scriptTag;
	let processingHtml = false;
	let forceUpdate = false;
	let myInterval;
	let timer;

	$: counterNumber = counter.slice(0, 2);

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
					}, interValCount * 1000);
				}
			});
		};
		/// END

		// this upcoming part now will have impact on the web app to produce the correct script tag function and the preview banner
		if (counterNumber && document.querySelector('.climate_strike_counter')) {
			const initialCount = counterNumber;
			myInterval = setInterval(() => {
				let readNumber = document.querySelector('.climate_counter-number').innerHTML;
				readNumber = Number(readNumber) - 1;
				document.querySelector('.climate_counter-number').innerHTML = String(readNumber);
			}, 1000);

			timer = setTimeout(() => {
				clearInterval(myInterval);
				setTimeout(() => {
					document.getElementById('banner_climatestrike').style.display = 'block';
					forceUpdate = !forceUpdate;
				}, 2500);
				document.getElementById('banner_climatestrike').style.display = 'none';
			}, Number(counter.slice(0, 2)) * 1000);
		}

		const backDrop =
			'<div id="backdrop_climatestrike" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.214); z-index: 500;"/>';
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
	<div class="section has-mw-5xl mx-auto">
		<div>
			<div class="has-background-primary">
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

		<div>
			<div class="section container">
				<div class="close" id="close_climatestrike" />
				<h1 class="title is-spaced is-2 my-6 is-size-3-desktop is-size-4">
					Add a smart and customized strike banner to your website and be part of the global
					climatestrike on the 23.09.2022.
				</h1>

				<form action="/" on:submit|preventDefault>
					<p class="is-size-4 mb-6">
						Once you add the banner to your website (via Script Tag) it will only show up on the
						23.09.2022. (no matter in which time zone you live in)
					</p>

					<!-- <div class="field mb-6">
						<label class="label is-size-4" for="">Banner Header </label>
						<div class="control">
							<input bind:value="{header}" class="input" type="text" name="field-name" placeholder="Write a text" />
						</div>
					</div> -->

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
						on:click={() => {
							forceUpdate = !forceUpdate;
							clearInterval(myInterval);
							clearTimeout(timer);
							getScriptTag();
						}}
						class="button is-medium is-primary is-responsive"
						href="/#script_climatestrike">Generate Script Tag</a
					>

					<section class="mt-6 py-6 section" bind:this={element}>
						<div
							id="banner_climatestrike"
							class="container m-0"
							style={processingHtml
								? 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000;'
								: ''}
						>
							{#if closeIcon}
								<!-- content here --><button
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
								class="py-6 px-5 is-relative has-background-info has-text-centered"
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
									<h2 class="is-size-4 is-size-3-tablet has-text-weight-semibold">
										<span class="has-text-white ">We strike today</span>
										<span class="has-background-warning has-text-black">for our planet!</span>
									</h2>
									<p class="has-mw-md mb-6 mx-auto has-text-white is-size-5 is-size-4-tablet mt-4">
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
					</section>

					<!-- <section class="mt-6 py-6 section">
						<div class="container">
							<div
								class="py-6 px-5 is-relative has-background-info has-text-centered"
								style="border-radius: 4px; overflow: hidden;"
							>
								<div
									style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; opacity: 50%;"
								>
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
										Good customer relationship management is the foundation of modern business. Take
										care of the development.
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
					</section> -->

					<!-- <section class="section py-6">
						<div class="container">
							<div
								class="py-6 px-5 is-relative has-background-info has-text-centered"
								style="border-radius: 4px; overflow: hidden;"
							>
								<div
									style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; opacity: 50%;"
								>
									<img
										class="image mx-auto"
										style="object-size: contain; margin-top: -24px;"
										src="images/klimastreik.jpg"
										alt=""
									/>
								</div>
								<div class="py-2" style="position: relative; z-index: 10;">
									<h2 class="is-size-3 has-text-weight-semibold">
										<span class="has-text-white">Generate</span>
										<span class="has-text-warning">Monthly Reports</span>
									</h2>
									<p class="has-mw-md has-text-light is-size-6 mb-6 mx-auto">
										Good customer relationship management is the foundation of modern business. Take
										care of the development.
									</p>
									<a class="button is-warning is-inline-flex is-align-items-center" href="#">
										<span class="mr-2">
											<svg
												width="14"
												height="14"
												viewBox="0 0 14 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M4.3335 12.3333H2.3335C2.15669 12.3333 1.98712 12.2631 1.86209 12.1381C1.73707 12.013 1.66683 11.8435 1.66683 11.6666V9.66665C1.66683 9.48984 1.59659 9.32027 1.47157 9.19524C1.34654 9.07022 1.17697 8.99998 1.00016 8.99998C0.823352 8.99998 0.653782 9.07022 0.528758 9.19524C0.403734 9.32027 0.333496 9.48984 0.333496 9.66665V11.6666C0.333496 12.1971 0.54421 12.7058 0.919283 13.0809C1.29436 13.4559 1.80306 13.6666 2.3335 13.6666H4.3335C4.51031 13.6666 4.67988 13.5964 4.8049 13.4714C4.92992 13.3464 5.00016 13.1768 5.00016 13C5.00016 12.8232 4.92992 12.6536 4.8049 12.5286C4.67988 12.4036 4.51031 12.3333 4.3335 12.3333V12.3333ZM1.00016 4.99998C1.17697 4.99998 1.34654 4.92974 1.47157 4.80472C1.59659 4.67969 1.66683 4.51012 1.66683 4.33331V2.33331C1.66683 2.1565 1.73707 1.98693 1.86209 1.86191C1.98712 1.73688 2.15669 1.66665 2.3335 1.66665H4.3335C4.51031 1.66665 4.67988 1.59641 4.8049 1.47138C4.92992 1.34636 5.00016 1.17679 5.00016 0.99998C5.00016 0.823169 4.92992 0.653599 4.8049 0.528575C4.67988 0.403551 4.51031 0.333313 4.3335 0.333313H2.3335C1.80306 0.333313 1.29436 0.544027 0.919283 0.9191C0.54421 1.29417 0.333496 1.80288 0.333496 2.33331V4.33331C0.333496 4.51012 0.403734 4.67969 0.528758 4.80472C0.653782 4.92974 0.823352 4.99998 1.00016 4.99998ZM11.6668 0.333313H9.66683C9.49002 0.333313 9.32045 0.403551 9.19543 0.528575C9.0704 0.653599 9.00016 0.823169 9.00016 0.99998C9.00016 1.17679 9.0704 1.34636 9.19543 1.47138C9.32045 1.59641 9.49002 1.66665 9.66683 1.66665H11.6668C11.8436 1.66665 12.0132 1.73688 12.1382 1.86191C12.2633 1.98693 12.3335 2.1565 12.3335 2.33331V4.33331C12.3335 4.51012 12.4037 4.67969 12.5288 4.80472C12.6538 4.92974 12.8234 4.99998 13.0002 4.99998C13.177 4.99998 13.3465 4.92974 13.4716 4.80472C13.5966 4.67969 13.6668 4.51012 13.6668 4.33331V2.33331C13.6668 1.80288 13.4561 1.29417 13.081 0.9191C12.706 0.544027 12.1973 0.333313 11.6668 0.333313ZM9.66683 6.99998C9.66683 6.82317 9.59659 6.6536 9.47157 6.52858C9.34654 6.40355 9.17697 6.33331 9.00016 6.33331H7.66683V4.99998C7.66683 4.82317 7.59659 4.6536 7.47157 4.52858C7.34654 4.40355 7.17697 4.33331 7.00016 4.33331C6.82335 4.33331 6.65378 4.40355 6.52876 4.52858C6.40373 4.6536 6.3335 4.82317 6.3335 4.99998V6.33331H5.00016C4.82335 6.33331 4.65378 6.40355 4.52876 6.52858C4.40373 6.6536 4.3335 6.82317 4.3335 6.99998C4.3335 7.17679 4.40373 7.34636 4.52876 7.47138C4.65378 7.59641 4.82335 7.66665 5.00016 7.66665H6.3335V8.99998C6.3335 9.17679 6.40373 9.34636 6.52876 9.47138C6.65378 9.59641 6.82335 9.66665 7.00016 9.66665C7.17697 9.66665 7.34654 9.59641 7.47157 9.47138C7.59659 9.34636 7.66683 9.17679 7.66683 8.99998V7.66665H9.00016C9.17697 7.66665 9.34654 7.59641 9.47157 7.47138C9.59659 7.34636 9.66683 7.17679 9.66683 6.99998ZM13.0002 8.99998C12.8234 8.99998 12.6538 9.07022 12.5288 9.19524C12.4037 9.32027 12.3335 9.48984 12.3335 9.66665V11.6666C12.3335 11.8435 12.2633 12.013 12.1382 12.1381C12.0132 12.2631 11.8436 12.3333 11.6668 12.3333H9.66683C9.49002 12.3333 9.32045 12.4036 9.19543 12.5286C9.0704 12.6536 9.00016 12.8232 9.00016 13C9.00016 13.1768 9.0704 13.3464 9.19543 13.4714C9.32045 13.5964 9.49002 13.6666 9.66683 13.6666H11.6668C12.1973 13.6666 12.706 13.4559 13.081 13.0809C13.4561 12.7058 13.6668 12.1971 13.6668 11.6666V9.66665C13.6668 9.48984 13.5966 9.32027 13.4716 9.19524C13.3465 9.07022 13.177 8.99998 13.0002 8.99998Z"
													fill="#F1988F"
												/>
											</svg>
										</span>
										<span>Add New Report</span>
									</a>
								</div>
							</div>
						</div>
					</section> -->
				</form>

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
					<label class="label is-size-3" for="">Test your scripts</label>
					<p class="mb-4 is-size-4">
						After you have added the script to your site, you can test it by adding <span
							>#climatestrikebanner_23_09_2022'</span
						> at the end of the url.
					</p>
					<p>EXAMPLE: https://deineurl.de#climatestrikebanner_23_09_2022</p>
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	button {
		z-index: 1500;
	}
</style>
