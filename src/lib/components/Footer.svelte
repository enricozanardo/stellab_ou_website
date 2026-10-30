<script lang="ts">
	import { t } from '#lib/i18n/index.js';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container footer__inner">
		<div class="footer__brand">
			<img src="/logo.png" alt="" width="30" height="30" />
			<span>Stellab OÜ</span>
		</div>
		<p class="footer__copy">
			© {year} Stellab OÜ. {$t.footer.rights}
			{$t.footer.tagline}
			{$t.footer.registry}.
			{$t.footer.vat}.
		</p>
		<div class="footer__bank">
			<p class="footer__bank-title">{$t.footer.bankTitle}</p>
			<p>Stellab OÜ</p>
			<p>
				{$t.footer.ibanLabel}:
				<span class="footer__mono">{$t.footer.iban}</span>
			</p>
			<p>
				{$t.footer.bicLabel}:
				<span class="footer__mono">{$t.footer.bic}</span>
			</p>
		</div>
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

	.footer__bank {
		margin: 0;
		padding-top: var(--space-sm);
		border-top: 1px solid color-mix(in srgb, var(--ice) 14%, transparent);
		max-width: 40rem;
		font-size: 0.925rem;
	}

	.footer__bank p {
		margin: 0 0 0.25rem;
	}

	.footer__bank p:last-child {
		margin-bottom: 0;
	}

	.footer__bank-title {
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--signal-light);
		margin-bottom: 0.45rem !important;
	}

	.footer__mono {
		font-family: ui-monospace, 'Cascadia Code', 'SF Mono', Menlo, monospace;
		font-size: 0.9em;
		color: var(--ice);
		letter-spacing: 0.02em;
	}
</style>
