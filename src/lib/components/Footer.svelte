<script lang="ts">
	import { t } from '#lib/i18n/index.js';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container footer__inner">
		<div class="footer__brand">
			<img src="/logo-on-dark.svg" alt="" width="30" height="30" />
			<span>Stellab OÜ</span>
		</div>
		<p class="footer__copy">
			© {year} Stellab OÜ. {$t.footer.rights}
			{$t.footer.tagline}
			{$t.footer.registry}.
			{$t.footer.vat}.
		</p>
	</div>
</footer>

<style>
	.footer {
		padding-block: var(--space-xl);
		background: var(--ink);
		color: color-mix(in srgb, var(--ice) 78%, transparent);
	}

	.footer__inner {
		display: grid;
		gap: var(--space-md);
	}

	.footer__brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--ice);
		font-family: var(--font-display);
		font-size: 1.15rem;
		font-weight: 600;
	}

	.footer__copy {
		margin: 0;
		max-width: 40rem;
		font-size: 0.925rem;
	}
</style>
