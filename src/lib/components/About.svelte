<script lang="ts">
	import { t } from '#lib/i18n/index.js';
</script>

<section class="section" id="about" aria-labelledby="about-title">
	<div class="container about">
		<span class="eyebrow">{$t.about.eyebrow}</span>
		<h2 id="about-title">{$t.about.title}</h2>
		<p class="lede about__body">{$t.about.body}</p>
	</div>
</section>

<style>
	.about {
		max-width: 46rem;
		margin-inline: auto;
	}

	.about :global(h2) {
		font-size: clamp(1.75rem, 3vw, 2.35rem);
	}

	.about__body {
		font-size: 1.125rem;
	}
</style>
