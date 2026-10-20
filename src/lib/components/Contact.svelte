<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { t } from '#lib/i18n/index.js';

	const CONTACT_INBOX = 'hello@stellab.ee';
	const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_INBOX}`;
	const MIN_FILL_MS = 4000;
	const MAX_MESSAGE = 4000;
	const MAX_SUBJECT = 160;
	const MAX_NAME = 120;

	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let honeypot = $state('');
	let captchaAnswer = $state('');
	let status = $state<'idle' | 'sending' | 'success' | 'error' | 'activate'>('idle');
	let errorDetail = $state('');
	let mountedAt = 0;
	let captchaA = $state(0);
	let captchaB = $state(0);

	function resetCaptcha() {
		captchaA = 2 + Math.floor(Math.random() * 8);
		captchaB = 2 + Math.floor(Math.random() * 8);
		captchaAnswer = '';
	}

	onMount(() => {
		mountedAt = Date.now();
		resetCaptcha();
	});

	function validateLocal(): string | null {
		const dict = get(t);
		if (honeypot.trim() !== '') return 'spam';
		if (Date.now() - mountedAt < MIN_FILL_MS) return dict.contact.formTooFast;
		if (Number(captchaAnswer) !== captchaA + captchaB) return dict.contact.formSpam;
		if (name.trim().length > MAX_NAME || subject.trim().length > MAX_SUBJECT) {
			return dict.contact.formError;
		}
		if (message.trim().length === 0 || message.length > MAX_MESSAGE) {
			return dict.contact.formError;
		}
		// Reject obvious attachment / injection attempts in plain fields
		if (/[<>]|content-type:|multipart\/|begin\s+certificate/i.test(message + subject + name)) {
			return dict.contact.formError;
		}
		return null;
	}

	async function submit(event: Event) {
		event.preventDefault();
		errorDetail = '';

		const localError = validateLocal();
		if (localError === 'spam') {
			status = 'success'; // silent discard for bots
			return;
		}
		if (localError) {
			status = 'error';
			errorDetail = localError;
			resetCaptcha();
			return;
		}

		status = 'sending';

		try {
			const response = await fetch(FORM_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					message: message.trim().slice(0, MAX_MESSAGE),
					_subject: `[Stellab.ee] ${subject.trim().slice(0, MAX_SUBJECT)}`,
					_template: 'table',
					_replyto: email.trim(),
					_captcha: 'false',
					_honey: honeypot
				})
			});

			const payload = (await response.json()) as {
				success?: string | boolean;
				message?: string;
			};
			const ok = payload.success === true || payload.success === 'true';
			const msg = (payload.message || '').toLowerCase();

			if (!ok) {
				if (msg.includes('activation') || msg.includes('activate form')) {
					status = 'activate';
					resetCaptcha();
					return;
				}
				throw new Error(payload.message || `HTTP ${response.status}`);
			}

			status = 'success';
			name = '';
			email = '';
			subject = '';
			message = '';
			resetCaptcha();
			mountedAt = Date.now();
		} catch (err) {
			status = 'error';
			errorDetail = err instanceof Error && err.message ? err.message : get(t).contact.formError;
			resetCaptcha();
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

		<form
			class="contact__form"
			onsubmit={submit}
			enctype="application/x-www-form-urlencoded"
			novalidate={false}
		>
			<!-- Honeypot: bots fill this; humans never see it -->
			<label class="contact__honey" aria-hidden="true">
				<span>Website</span>
				<input
					type="text"
					name="_honey"
					tabindex="-1"
					autocomplete="off"
					bind:value={honeypot}
				/>
			</label>

			<label>
				<span>{$t.contact.formName}</span>
				<input
					type="text"
					name="name"
					autocomplete="name"
					maxlength={MAX_NAME}
					bind:value={name}
					required
				/>
			</label>
			<label>
				<span>{$t.contact.formEmail}</span>
				<input
					type="email"
					name="email"
					autocomplete="email"
					maxlength="200"
					bind:value={email}
					required
				/>
			</label>
			<label>
				<span>{$t.contact.formSubject}</span>
				<input
					type="text"
					name="subject"
					maxlength={MAX_SUBJECT}
					bind:value={subject}
					required
				/>
			</label>
			<label>
				<span>{$t.contact.formMessage}</span>
				<textarea
					name="message"
					rows="5"
					maxlength={MAX_MESSAGE}
					bind:value={message}
					required
				></textarea>
			</label>
			<label>
				<span>{$t.contact.formCaptcha} {captchaA} + {captchaB} = ?</span>
				<input
					type="text"
					name="captcha"
					inputmode="numeric"
					autocomplete="off"
					bind:value={captchaAnswer}
					required
				/>
			</label>

			<button class="btn btn--primary" type="submit" disabled={status === 'sending'}>
				{status === 'sending' ? $t.contact.formSending : $t.contact.formSubmit}
			</button>

			{#if status === 'success'}
				<p class="contact__status contact__status--ok" role="status">{$t.contact.formSuccess}</p>
			{:else if status === 'activate'}
				<p class="contact__status contact__status--warn" role="status">
					{$t.contact.formActivation}
				</p>
			{:else if status === 'error'}
				<p class="contact__status contact__status--err" role="alert">
					{errorDetail || $t.contact.formError}
				</p>
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
		position: relative;
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
		top: auto;
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

	.contact__status--warn {
		color: #ffe29a;
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
