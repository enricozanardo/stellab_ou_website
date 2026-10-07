<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { initLocale, t } from '#lib/i18n/index.js';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	onMount(() => {
		initLocale();
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
	<link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
	<link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
	<title>{$t.meta.title}</title>
	<meta name="description" content={$t.meta.description} />
	<meta property="og:title" content={$t.meta.title} />
	<meta property="og:description" content={$t.meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://stellab.ee/" />
	<meta name="twitter:card" content="summary" />
	<meta name="theme-color" content="#0B1F2E" />
	<link rel="canonical" href="https://stellab.ee/" />
	<link rel="alternate" hreflang="en" href="https://stellab.ee/" />
	<link rel="alternate" hreflang="et" href="https://stellab.ee/" />
	<link rel="alternate" hreflang="x-default" href="https://stellab.ee/" />
</svelte:head>

{@render children()}
