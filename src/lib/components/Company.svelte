<script lang="ts">
	import { t } from '#lib/i18n/index.js';
</script>

<section class="section" id="company" aria-labelledby="company-title">
	<div class="container">
		<span class="eyebrow">{$t.company.eyebrow}</span>
		<h2 id="company-title">{$t.company.title}</h2>

		<dl class="facts">
			<div class="facts__row">
				<dt>{$t.company.nameLabel}</dt>
				<dd>{$t.company.name}</dd>
			</div>
			<div class="facts__row">
				<dt>{$t.company.addressLabel}</dt>
				<dd>{$t.company.address}</dd>
			</div>
			<div class="facts__row">
				<dt>{$t.company.registryLabel}</dt>
				<dd>
					{$t.company.registry}
					—
					<a href={$t.company.registryUrl} rel="noopener noreferrer" target="_blank">
						{$t.company.registryLink}
					</a>
				</dd>
			</div>
			<div class="facts__row">
				<dt>{$t.company.contactPersonLabel}</dt>
				<dd>{$t.company.contactPerson}</dd>
			</div>
		</dl>
	</div>
</section>

<style>
	h2 {
		font-size: clamp(1.75rem, 3vw, 2.35rem);
		margin-bottom: var(--space-xl);
	}

	.facts {
		margin: 0;
		max-width: 42rem;
	}

	.facts__row {
		display: grid;
		gap: 0.35rem;
		padding-block: 1.15rem;
		border-top: 1px solid color-mix(in srgb, var(--mist) 70%, transparent);
	}

	.facts__row:last-child {
		border-bottom: 1px solid color-mix(in srgb, var(--mist) 70%, transparent);
	}

	dt {
		font-size: 0.8125rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: color-mix(in srgb, var(--ink) 55%, transparent);
	}

	dd {
		margin: 0;
		font-size: 1.05rem;
	}

	@media (min-width: 720px) {
		.facts__row {
			grid-template-columns: 11rem 1fr;
			gap: var(--space-lg);
			align-items: baseline;
		}
	}
</style>
