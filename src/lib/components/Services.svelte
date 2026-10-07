<script lang="ts">
	import { t } from '#lib/i18n/index.js';
</script>

<section class="section section--sea" id="services" aria-labelledby="services-title">
	<div class="container">
		<span class="eyebrow">{$t.services.eyebrow}</span>
		<h2 id="services-title">{$t.services.title}</h2>

		<ol class="services">
			{#each $t.services.items as item, i}
				<li class="services__item">
					<span class="services__index">{String(i + 1).padStart(2, '0')}</span>
					<div>
						<h3>{$t.services.items[i].title}</h3>
						<p>{item.body}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	h2 {
		font-size: clamp(1.75rem, 3vw, 2.35rem);
		margin-bottom: var(--space-xl);
		color: var(--ice);
	}

	.services {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0;
	}

	.services__item {
		display: grid;
		grid-template-columns: 3.5rem 1fr;
		gap: var(--space-md);
		padding-block: var(--space-lg);
		border-top: 1px solid color-mix(in srgb, var(--ice) 18%, transparent);
	}

	.services__item:last-child {
		border-bottom: 1px solid color-mix(in srgb, var(--ice) 18%, transparent);
	}

	.services__index {
		font-family: var(--font-display);
		font-size: 1.25rem;
		color: #7fd4cf;
		padding-top: 0.15rem;
	}

	h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
		color: var(--white);
	}

	p {
		margin: 0;
		max-width: 40rem;
		color: color-mix(in srgb, var(--ice) 82%, transparent);
	}

	@media (min-width: 720px) {
		.services__item {
			grid-template-columns: 5rem 1fr;
			gap: var(--space-lg);
		}
	}
</style>
