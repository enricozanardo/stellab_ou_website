import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';
import { en, type Dictionary } from './en.js';
import { et } from './et.js';

export type Locale = 'en' | 'et';

const dictionaries: Record<Locale, Dictionary> = { en, et };

function detectLocale(): Locale {
	if (!browser) return 'en';

	const saved = localStorage.getItem('stellab-locale');
	if (saved === 'en' || saved === 'et') return saved;

	if (navigator.language.toLowerCase().startsWith('et')) return 'et';
	return 'en';
}

export const locale = writable<Locale>('en');

let initialised = false;

export function initLocale() {
	if (!browser || initialised) return;
	initialised = true;

	locale.set(detectLocale());

	locale.subscribe((value) => {
		localStorage.setItem('stellab-locale', value);
		document.documentElement.lang = value;
	});
}

export function setLocale(next: Locale) {
	locale.set(next);
}

export const t = derived(locale, ($locale) => dictionaries[$locale]);
