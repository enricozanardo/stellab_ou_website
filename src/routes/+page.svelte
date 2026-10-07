<script lang="ts">
	import About from '#lib/components/About.svelte';
	import Company from '#lib/components/Company.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Nav from '#lib/components/Nav.svelte';
	import Services from '#lib/components/Services.svelte';
	import { locale, t } from '#lib/i18n/index.js';
</script>

<div class="page">
	<a class="skip" href="#about">{$t.nav.about}</a>
	<Nav />
	<main>
		{#key $locale}
			<div class="locale-pane">
				<Hero />
				<About />
				<Services />
				<Company />
				<Contact />
			</div>
		{/key}
	</main>
	{#key $locale}
		<Footer />
	{/key}
</div>

<style>
	.skip {
		position: absolute;
		left: -999px;
		top: 0.5rem;
		z-index: 100;
		padding: 0.5rem 0.75rem;
		background: var(--signal);
		color: var(--white);
		text-decoration: none;
		border-radius: 0.25rem;
	}

	.skip:focus {
		left: 0.5rem;
	}

	.locale-pane {
		animation: locale-fade 0.35s var(--ease) both;
	}

	@keyframes locale-fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
