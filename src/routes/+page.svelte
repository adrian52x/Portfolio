<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { Home, PortfolioTitle } from '$lib/params';
	import type { SocialLink, SocialMedia } from '$lib/utils';
	import { useSocialMedia, useTitle } from '$lib/utils';
	import {  Assets } from '$lib/utils';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import { onMount } from 'svelte';


	// onMount(() => {
		//@ts-ignore
		!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="YGhdZxwrYx0IG6Upf4gxzmGnFegnTcf6";;analytics.SNIPPET_VERSION="4.16.1";
			analytics.load("YGhdZxwrYx0IG6Upf4gxzmGnFegnTcf6");
			analytics.page();
		}}();

	// })

	
  


	const { description, lastName, links: _links, name, skills, title } = Home;

	const links: Array<SocialLink> = Object.keys(_links).map((key) => {
		const to = _links[key as 'github']!;
		const data = useSocialMedia(key as SocialMedia);

		return {
			to,
			title: data.title,
			icon: data.icon
		};
	});
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>
<div class="home">
	<div class="home-section">
		<h1 class="home-title"><CardLogo alt='logo' src={Assets.AE3} size={50} radius={'0'}/> {name} {lastName.toUpperCase()}, </h1>
		<p class="home-subtitle">{description}</p>
		<div class="home-social">
			{#each links as link}
				<a class="home-social-item" href={link.to} target="_blank" rel="noreferrer">
					<Icon icon={link.icon} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills} />
</div>

<style lang="scss">
	.home {
		align-self: center;
		display: flex;
		flex-direction: row;
		flex: 1;
		align-self: stretch;
		align-items: center;
		padding: 0px 10px;

		&-title {
			font-family: var(--title-f);
			font-size: 4em;
			font-weight: 900;
			letter-spacing: 2px;
		}

		&-subtitle {
			font-size: 1.5em;
			font-weight: 200;
		}

		&-section {
			display: flex;
			flex-direction: column;
			flex: 1;
		}

		&-social {
			padding: 15px 0px;

			&-item {
				margin-right: 10px;
				text-decoration: none;
			}
		}

		@media (max-width: 875px) {
			& {
				flex-direction: column;
				justify-content: center;
			}

			&-section {
				flex: 0;
				align-items: center;
				text-align: center;
			}
		}
	}
</style>
