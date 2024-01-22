<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { DocsParams, PortfolioTitle } from '$lib/params';
	import { getMonthName } from '$lib/utils/helpers';
	import { useTitle } from '$lib/utils';

	const { cv, title, diploma, docsUpdatedOn } = DocsParams;


	const docsUpdatedOnDisplay = `${docsUpdatedOn.getDate()} ${getMonthName(docsUpdatedOn.getMonth())} ${docsUpdatedOn.getFullYear()}`;
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>
<div />
<MainTitle>{title}</MainTitle>
<!-- <div class="docs">Last time updated : <b>{docsUpdatedOnDisplay}</b></div> -->
<div class="docs">
	<!-- {#if cv}
		<a href={cv} target="_blank" rel="noreferrer">
			<Chip label="CV" size={'1.5em'} />
		</a>
	{:else}
		<Chip label="Ooops! no CV at the moment." />
	{/if} -->

	{#if diploma}
		<a href={diploma} target="_blank" rel="noreferrer">
			<Chip label="Diploma / Transcript of records" size={'1.5em'} />
		</a>
	{:else}
		<Chip label="Ooops! no Diploma at the moment." />
	{/if}
	
</div>

<style lang="scss">
	.docs {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
