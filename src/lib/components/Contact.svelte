<script lang="ts">
	import { get } from 'svelte/store';
	import { t } from '#lib/i18n/index.js';

	let name = $state('');
	let subject = $state('');
	let message = $state('');

	function submit(event: Event) {
		event.preventDefault();
		const dict = get(t);
		const email = dict.contact.email;
		const body = [`Name: ${name}`, '', message].join('\n');
		const params = new URLSearchParams({
			subject: subject || 'Stellab enquiry',
			body
		});
		window.location.href = `mailto:${email}?${params.toString()}`;
	}
</script>

<section class="section section--sea" id="contact" aria-labelledby="contact-title">
	<div class="container contact">
		<div class="contact__intro">
			<span class="eyebrow">{$t.contact.eyebrow}</span>
			<h2 id="contact-title">{$t.contact.title}</h2>
			<p class="lede">{$t.contact.body}</p>
			<p class="contact__email">
				<span>{$t.contact.emailLabel}</span>
				<a href="mailto:{$t.contact.email}">{$t.contact.email}</a>
			</p>
		</div>

		<form class="contact__form" onsubmit={submit}>
			<label>
				<span>{$t.contact.formName}</span>
				<input type="text" name="name" autocomplete="name" bind:value={name} required />
			</label>
			<label>
				<span>{$t.contact.formSubject}</span>
				<input type="text" name="subject" bind:value={subject} required />
			</label>
			<label>
				<span>{$t.contact.formMessage}</span>
				<textarea name="message" rows="5" bind:value={message} required></textarea>
			</label>
			<button class="btn btn--primary" type="submit">{$t.contact.formSubmit}</button>
			<p class="contact__hint">{$t.contact.formHint}</p>
		</form>
	</div>
</section>

<style>
	.contact {
		display: grid;
		gap: var(--space-xl);
	}

	h2 {
		font-size: clamp(1.75rem, 3vw, 2.35rem);
		color: var(--ice);
	}

	.contact__email {
		display: grid;
		gap: 0.25rem;
		margin-top: var(--space-lg);
	}

	.contact__email span {
		font-size: 0.8125rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #7fd4cf;
	}

	.contact__email a {
		font-size: 1.35rem;
		font-weight: 600;
		text-decoration: none;
		color: var(--white);
	}

	.contact__email a:hover {
		color: #9fe3df;
	}

	.contact__form {
		display: grid;
		gap: var(--space-md);
		padding: var(--space-lg);
		background: color-mix(in srgb, var(--ink) 28%, transparent);
		border: 1px solid color-mix(in srgb, var(--ice) 14%, transparent);
		border-radius: 0.5rem;
	}

	label {
		display: grid;
		gap: 0.4rem;
	}

	label span {
		font-size: 0.875rem;
		font-weight: 600;
		color: color-mix(in srgb, var(--ice) 85%, transparent);
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75rem 0.85rem;
		border: 1px solid color-mix(in srgb, var(--ice) 22%, transparent);
		border-radius: 0.35rem;
		background: color-mix(in srgb, var(--paper) 92%, transparent);
		color: var(--ink);
		font: inherit;
	}

	input:focus,
	textarea:focus {
		outline: 2px solid var(--signal);
		outline-offset: 1px;
	}

	.contact__hint {
		margin: 0;
		font-size: 0.875rem;
		color: color-mix(in srgb, var(--ice) 65%, transparent);
	}

	@media (min-width: 900px) {
		.contact {
			grid-template-columns: 1fr 1.1fr;
			align-items: start;
			gap: var(--space-2xl);
		}
	}
</style>
