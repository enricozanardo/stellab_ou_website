<script lang="ts">
	import { locale, setLocale, t, type Locale } from '#lib/i18n/index.js';

	const links = [
		{ href: '#about', key: 'about' as const },
		{ href: '#services', key: 'services' as const },
		{ href: '#company', key: 'company' as const },
		{ href: '#contact', key: 'contact' as const }
	];

	function switchLang(next: Locale) {
		setLocale(next);
	}
</script>

<header class="nav">
	<div class="container nav__inner">
		<a class="nav__brand" href="#top" aria-label="Stellab">
			<img src="/logo.svg" alt="" width="34" height="34" />
			<span class="nav__wordmark">
				<span class="nav__name">Stellab</span>
				<span class="nav__legal">OÜ</span>
			</span>
		</a>

		<nav class="nav__links" aria-label="Primary">
			{#each links as link}
				<a href={link.href}>{$t.nav[link.key]}</a>
			{/each}
		</nav>

		<div class="nav__lang" role="group" aria-label={$t.nav.langLabel}>
			<button
				type="button"
				class="nav__lang-btn"
				class:is-active={$locale === 'en'}
				aria-pressed={$locale === 'en'}
				onclick={() => switchLang('en')}
			>
				{$t.nav.langEn}
			</button>
			<button
				type="button"
				class="nav__lang-btn"
				class:is-active={$locale === 'et'}
				aria-pressed={$locale === 'et'}
				onclick={() => switchLang('et')}
			>
				{$t.nav.langEt}
			</button>
		</div>
	</div>
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 20;
		height: var(--nav-h);
		background: color-mix(in srgb, var(--ice) 88%, transparent);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid color-mix(in srgb, var(--mist) 55%, transparent);
	}

	.nav__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		height: 100%;
	}

	.nav__brand {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		text-decoration: none;
		color: var(--ink);
		min-width: 0;
	}

	.nav__wordmark {
		display: flex;
		align-items: baseline;
		gap: 0.35rem;
	}

	.nav__name {
		font-family: var(--font-display);
		font-size: 1.35rem;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.nav__legal {
		font-size: 0.75rem;
		font-weight: 600;
		color: color-mix(in srgb, var(--ink) 55%, transparent);
	}

	.nav__links {
		display: none;
		gap: 1.25rem;
	}

	.nav__links a {
		color: var(--ink);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
	}

	.nav__links a:hover {
		color: var(--signal-deep);
	}

	.nav__lang {
		display: inline-flex;
		border: 1px solid var(--mist);
		border-radius: 0.35rem;
		overflow: hidden;
		flex-shrink: 0;
	}

	.nav__lang-btn {
		appearance: none;
		border: 0;
		background: transparent;
		color: color-mix(in srgb, var(--ink) 65%, transparent);
		font: inherit;
		font-size: 0.8125rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		padding: 0.4rem 0.65rem;
		cursor: pointer;
		transition:
			background-color 0.2s var(--ease),
			color 0.2s var(--ease);
	}

	.nav__lang-btn.is-active {
		background: var(--ink);
		color: var(--ice);
	}

	@media (min-width: 820px) {
		.nav__links {
			display: flex;
		}
	}
</style>
