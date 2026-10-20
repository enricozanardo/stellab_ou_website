<script lang="ts">
	import { get } from 'svelte/store';
	import { t } from '#lib/i18n/index.js';

	const CONTACT_INBOX = 'hello@stellab.ee';
	const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_INBOX}`;

	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let honeypot = $state('');
	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');

	async function submit(event: Event) {
		event.preventDefault();
		if (honeypot.trim() !== '') return;

		status = 'sending';
		const dict = get(t);

		try {
			const response = await fetch(FORM_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					name,
					email,
					message,
					_subject: subject || 'Stellab website enquiry',
					_template: 'table',
					_replyto: email,
					_captcha: 'false'
				})
			});

			if (!response.ok) throw new Error(`HTTP ${response.status}`);

			const payload = (await response.json()) as { success?: string | boolean };
			if (payload.success === false || payload.success === 'false') {
				throw new Error('FormSubmit rejected the request');
			}

			status = 'success';
			name = '';
			email = '';
			subject = '';
			message = '';
		} catch {
			status = 'error';
			// Fallback: open a simple mailto without fragile query encoding
			const mailto = `mailto:${CONTACT_INBOX}?subject=${encodeURIComponent(subject || 'Stellab website enquiry')}&body=${encodeURIComponent(
				`${dict.contact.formName}: ${name}\n${dict.contact.formEmail}: ${email}\n\n${message}`
			)}`;
			window.setTimeout(() => {
				window.location.href = mailto;
			}, 400);
		}
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
				<a href="mailto:{CONTACT_INBOX}">{CONTACT_INBOX}</a>
			</p>
		</div>

		<form class="contact__form" onsubmit={submit}>
			<label class="contact__honey" aria-hidden="true">
				<span>Company</span>
				<input type="text" name="_honey" tabindex="-1" autocomplete="off" bind:value={honeypot} />
			</label>
			<label>
				<span>{$t.contact.formName}</span>
				<input type="text" name="name" autocomplete="name" bind:value={name} required />
			</label>
			<label>
				<span>{$t.contact.formEmail}</span>
				<input type="email" name="email" autocomplete="email" bind:value={email} required />
			</label>
			<label>
				<span>{$t.contact.formSubject}</span>
				<input type="text" name="subject" bind:value={subject} required />
			</label>
			<label>
				<span>{$t.contact.formMessage}</span>
				<textarea name="message" rows="5" bind:value={message} required></textarea>
			</label>
			<button class="btn btn--primary" type="submit" disabled={status === 'sending'}>
				{status === 'sending' ? $t.contact.formSending : $t.contact.formSubmit}
			</button>
			{#if status === 'success'}
				<p class="contact__status contact__status--ok" role="status">{$t.contact.formSuccess}</p>
			{:else if status === 'error'}
				<p class="contact__status contact__status--err" role="alert">{$t.contact.formError}</p>
			{:else}
				<p class="contact__hint">{$t.contact.formHint}</p>
			{/if}
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

	.contact__honey {
		position: absolute;
		left: -10000px;
		width: 1px;
		height: 1px;
		overflow: hidden;
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

	.btn:disabled {
		opacity: 0.7;
		cursor: wait;
		transform: none;
	}

	.contact__hint,
	.contact__status {
		margin: 0;
		font-size: 0.875rem;
	}

	.contact__hint {
		color: color-mix(in srgb, var(--ice) 65%, transparent);
	}

	.contact__status--ok {
		color: #9fe3df;
	}

	.contact__status--err {
		color: #ffb4b4;
	}

	@media (min-width: 900px) {
		.contact {
			grid-template-columns: 1fr 1.1fr;
			align-items: start;
			gap: var(--space-2xl);
		}
	}
</style>
