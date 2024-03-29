<script lang="ts">
	import type { Project } from '$lib/utils';
	import { countMonths, getMonthName } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import ImageModal from './ImageModal.svelte';

	let showModal: boolean[] = [];

	function openModal(index: number) {
    	showModal[index] = true;
  	}

	export let project: Project;
	$: months = countMonths(project.period.from, project.period.to);
	$: period = `${months} month${months > 1 ? 's' : ''}`;
	$: from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
	$: to = project.period.to
		? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
		: 'now';
</script>

<Card color={project.color}>
	<CardLogo alt={project.name} src={project.logo} size={40} radius={'0'} />
	<div class="project-card-top">
		<CardTitle title={project.name} />
		<div class="project-card-links">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="project-card-mid">
		<!-- <p class="project-card-type">{project.type}</p> -->
		<p class="project-card-period">{period}</p>
	</div>
	<p class="project-card-description">
		{#each project.description as description}
			<li>{description}</li>
		{/each}
	</p>
	<div class="project-card-bottom">
		<Chip label={from} />
		{#if from !== to}
			<Chip label={to} />
		{/if}
	</div>

	<CardDivider />
	<div class="project-card-technologies">
		{#each project.technologies as tech}
			<ChipIcon logo={tech.logo} name={tech.name} inverted={tech.inverted} />
		{/each}
	</div>

	<CardDivider />
	<div class="project-card-images">
		
		{#if project.images.length > 0}


			{#each project.images as image, index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="underline" on:click={() => openModal(index)}> <img class="image-showcase" src="{image}" alt=""> </div>
		
				<ImageModal bind:showModal={showModal[index]}>
					<div class="modal-content">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src="{image}" alt="Image">
					</div>
				</ImageModal>
			{/each}



		{:else}

		<img class="image-showcase" src="/no-image2.jpg" alt="">	
		
		

		{/if}
		
		
		
		
		 
	</div>
</Card>

<style lang="scss">
	.project-card {
		&-period,
		&-description {
			margin-bottom: 20px;
		}

		&-top {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&-links,
		&-technologies {
			display: flex;
		}
		&-images {
			
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 20px;
			padding: 0px 10px;

			@media (max-width: 1350px) {
				grid-template-columns: repeat(5, 1fr);
			}
			@media (max-width: 850px) {
				grid-template-columns: repeat(3, 1fr);
			}
		}

		&-mid {
			display: flex;
			justify-content: space-between;
			color: var(--accent-text-c);
			font-size: 0.9em;
			font-style: italic;
			font-weight: 400;
		}

		&-bottom {
			display: flex;
			justify-content: space-between;
			font-size: 0.75em;
			font-weight: 400;
		}

		&-type {
			text-transform: uppercase;
		}

		&-description {
			line-height: 1.4em;
			flex: 1;
			color: var(--accent-text-c);
		}
	}

	.image-showcase {
		width: 100px;
		height: 60px;
	}
</style>
