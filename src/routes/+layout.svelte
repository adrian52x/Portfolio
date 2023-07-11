<script lang="ts">
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import '$lib/index.scss';

	export const prerender = true;



	//@ts-ignore
	!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="YGhdZxwrYx0IG6Upf4gxzmGnFegnTcf6";;analytics.SNIPPET_VERSION="4.16.1";
			analytics.load("YGhdZxwrYx0IG6Upf4gxzmGnFegnTcf6");
			analytics.page();
	}}();
</script>

<NavMenu />
<div class="content container"><slot /></div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 40px 0px;
	}

	.container {
		max-width: 1200px;
		min-width: 1200px;
		margin: 0px auto;

		@media (max-width: 1350px) {
			& {
				max-width: 1000px;
				min-width: 1000px;
			}
		}

		@media (max-width: 1075px) {
			& {
				max-width: -webkit-fill-available;
				min-width: -webkit-fill-available;
				max-width: -moz-available;
				min-width: -moz-available;
			}
		}
	}

	@media (max-width: 950px) {
		.content {
			padding-left: 15px;
			padding-right: 15px;
		}
	}

	@media (max-width: 750px) {
		.content {
			padding-left: 10px;
			padding-right: 10px;
		}
	}

	:global(body) {
		margin: 0px;
		background-color: var(--primary-c);
		color: var(--primary-text-c);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;

		letter-spacing: 1px;

		min-height: 100vh;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>
