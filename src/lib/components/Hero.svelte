<script lang="ts">
	import { t } from '#lib/i18n/index.js';
</script>

<section class="hero" id="top" aria-labelledby="hero-brand">
	<div class="hero__visual" aria-hidden="true"></div>

	<div class="container hero__content">
		<div class="hero__lockup" id="hero-brand">
			<img class="hero__mark" src="/logo.svg" alt="" width="88" height="88" />
			<p class="hero__wordmark">
				<span class="hero__name">{$t.hero.brand}</span>
				<span class="hero__ou">{$t.hero.legal}</span>
			</p>
		</div>
		<h1 class="hero__headline">{$t.hero.headline}</h1>
		<p class="hero__support">{$t.hero.supporting}</p>
		<div class="hero__actions">
			<a class="btn btn--primary" href="#contact">{$t.hero.cta}</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: calc(100vh - var(--nav-h));
		display: grid;
		align-items: end;
		overflow: hidden;
		color: var(--ice);
	}

	.hero__visual {
		position: absolute;
		inset: 0;
		z-index: 0;
		background:
			radial-gradient(ellipse 70% 55% at 78% 18%, color-mix(in srgb, var(--signal) 22%, transparent), transparent 70%),
			linear-gradient(145deg, #0b1f2e 0%, #0e3a4d 52%, #134556 100%);
	}

	.hero__visual::after {
		content: '';
		position: absolute;
		inset: 0;
		background:
			linear-gradient(180deg, transparent 35%, color-mix(in srgb, #06131d 72%, transparent) 100%),
			repeating-linear-gradient(
				-18deg,
				transparent,
				transparent 46px,
				color-mix(in srgb, var(--ice) 4%, transparent) 46px,
				color-mix(in srgb, var(--ice) 4%, transparent) 47px
			);
	}

	.hero__content {
		position: relative;
		z-index: 1;
		padding-block: clamp(4rem, 12vh, 7rem) clamp(3.5rem, 10vh, 6rem);
		animation: hero-rise 0.9s var(--ease) both;
	}

	.hero__lockup {
		display: flex;
		align-items: center;
		gap: clamp(0.85rem, 2vw, 1.35rem);
		margin: 0 0 1.5rem;
	}

	.hero__mark {
		width: clamp(4.25rem, 9vw, 5.75rem);
		height: auto;
		flex-shrink: 0;
		border-radius: 1rem;
		box-shadow: 0 12px 36px color-mix(in srgb, #000 28%, transparent);
	}

	.hero__wordmark {
		display: flex;
		align-items: baseline;
		gap: 0.65rem;
		margin: 0;
	}

	.hero__name {
		font-family: var(--font-display);
		font-size: clamp(3.4rem, 9vw, 6.5rem);
		font-weight: 600;
		line-height: 0.95;
		letter-spacing: -0.03em;
	}

	.hero__ou {
		font-size: clamp(1rem, 2vw, 1.35rem);
		font-weight: 600;
		opacity: 0.7;
	}

	.hero__headline {
		max-width: 18ch;
		font-size: clamp(1.45rem, 3.2vw, 2.15rem);
		font-weight: 500;
		margin-bottom: 1rem;
		color: var(--ice);
	}

	.hero__support {
		max-width: 36rem;
		font-size: clamp(1.05rem, 1.8vw, 1.2rem);
		color: color-mix(in srgb, var(--ice) 84%, transparent);
		margin-bottom: 1.75rem;
	}

	.hero__actions {
		display: flex;
		gap: 0.75rem;
	}

	@keyframes hero-rise {
		from {
			opacity: 0;
			transform: translateY(1.25rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
