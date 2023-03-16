<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { ResumeParams, PortfolioTitle } from '$lib/params';
	import { useTitle } from '$lib/utils';

	const { cv, title, diploma } = ResumeParams;
</script>

<svelte:head>
	<title>{useTitle(title, PortfolioTitle)}</title>
</svelte:head>
<div />
<MainTitle>{title}</MainTitle>
<div class="resume">
	{#if cv}
		<a href={cv} target="_blank">
			<Chip label="CV" size={'1.25em'} />
		</a>
	{:else}
		<Chip label="Ooops! no CV at the moment." />
	{/if}

	{#if diploma}
		<a href={diploma} target="_blank">
			<Chip label="Diploma" size={'1.25em'} />
		</a>
	{:else}
		<Chip label="Ooops! no Diploma at the moment." />
	{/if}
</div>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
