<script lang="ts">
	import { t } from '#lib/i18n/index.js';
</script>

<section class="hero" id="top" aria-labelledby="hero-brand">
	<div class="hero__visual" aria-hidden="true">
		<svg class="hero__constellation" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
			<defs>
				<linearGradient id="hero-sky" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#0B1F2E" />
					<stop offset="55%" stop-color="#0E3A4D" />
					<stop offset="100%" stop-color="#134556" />
				</linearGradient>
				<radialGradient id="hero-glow" cx="70%" cy="30%" r="45%">
					<stop offset="0%" stop-color="#1FA7A0" stop-opacity="0.28" />
					<stop offset="100%" stop-color="#1FA7A0" stop-opacity="0" />
				</radialGradient>
			</defs>
			<rect width="1440" height="900" fill="url(#hero-sky)" />
			<rect width="1440" height="900" fill="url(#hero-glow)" />
			<g stroke="#E8EEF2" stroke-opacity="0.18" stroke-width="1">
				<path d="M180 620 L420 280 L710 520 L980 210 L1260 480" fill="none" />
				<path d="M420 280 L560 160" fill="none" />
				<path d="M710 520 L640 720" fill="none" />
				<path d="M980 210 L1120 340" fill="none" />
			</g>
			<g fill="#E8EEF2">
				<circle cx="180" cy="620" r="3.5" opacity="0.55" />
				<circle cx="420" cy="280" r="4" opacity="0.75" />
				<circle cx="560" cy="160" r="3" opacity="0.5" />
				<circle cx="710" cy="520" r="4.5" opacity="0.8" />
				<circle cx="640" cy="720" r="3" opacity="0.45" />
				<circle cx="980" cy="210" r="4" opacity="0.7" />
				<circle cx="1120" cy="340" r="3" opacity="0.5" />
				<circle cx="1260" cy="480" r="3.5" opacity="0.6" />
			</g>
			<circle cx="710" cy="520" r="6" fill="#1FA7A0" opacity="0.9" />
		</svg>
	</div>

	<div class="container hero__content">
		<p class="hero__brand" id="hero-brand">
			<span class="hero__name">{$t.hero.brand}</span>
			<span class="hero__ou">{$t.hero.legal}</span>
		</p>
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
	}

	.hero__constellation {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero__content {
		position: relative;
		z-index: 1;
		padding-block: clamp(4rem, 12vh, 7rem) clamp(3.5rem, 10vh, 6rem);
		animation: hero-rise 0.9s var(--ease) both;
	}

	.hero__brand {
		display: flex;
		align-items: baseline;
		gap: 0.65rem;
		margin: 0 0 1.25rem;
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
