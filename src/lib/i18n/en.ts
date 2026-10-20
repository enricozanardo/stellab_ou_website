export type Dictionary = {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		about: string;
		services: string;
		company: string;
		contact: string;
		langEn: string;
		langEt: string;
		langLabel: string;
	};
	hero: {
		brand: string;
		legal: string;
		headline: string;
		supporting: string;
		cta: string;
	};
	about: {
		eyebrow: string;
		title: string;
		body: string;
	};
	services: {
		eyebrow: string;
		title: string;
		items: Array<{
			title: string;
			body: string;
		}>;
	};
	company: {
		eyebrow: string;
		title: string;
		nameLabel: string;
		name: string;
		addressLabel: string;
		address: string;
		registryLabel: string;
		registry: string;
		registryLink: string;
		registryUrl: string;
		contactPersonLabel: string;
		contactPerson: string;
		vatLabel: string;
		vat: string;
	};
	contact: {
		eyebrow: string;
		title: string;
		body: string;
		emailLabel: string;
		email: string;
		formName: string;
		formEmail: string;
		formSubject: string;
		formMessage: string;
		formCaptcha: string;
		formSubmit: string;
		formSending: string;
		formHint: string;
		formSuccess: string;
		formError: string;
		formActivation: string;
		formSpam: string;
		formTooFast: string;
	};
	footer: {
		rights: string;
		tagline: string;
		registry: string;
		vat: string;
		bankTitle: string;
		ibanLabel: string;
		iban: string;
		bicLabel: string;
		bic: string;
	};
};

export const en: Dictionary = {
	meta: {
		title: 'Stellab OÜ — Technology research & engineering',
		description:
			'Estonian technology company for software, hardware, AI, cybersecurity and compliance consulting. Based in Tallinn.'
	},
	nav: {
		about: 'About',
		services: 'Services',
		company: 'Company',
		contact: 'Contact',
		langEn: 'EN',
		langEt: 'ET',
		langLabel: 'Language'
	},
	hero: {
		brand: 'Stellab',
		legal: 'OÜ',
		headline: 'Technology research and engineering from Tallinn',
		supporting:
			'We design, build and commercialise software, hardware and digital platforms — with a focus on AI, cybersecurity and trustworthy systems.',
		cta: 'Contact us'
	},
	about: {
		eyebrow: 'About',
		title: 'An Estonian technology company',
		body: 'Stellab OÜ conducts research, development, design and engineering of innovative software, hardware, electronic systems and digital platforms. We license and commercialise solutions across artificial intelligence, machine learning, cybersecurity, distributed systems, automation and related technologies. We also establish partnerships and make lawful investments in technological ventures across the European Union and worldwide.'
	},
	services: {
		eyebrow: 'Services',
		title: 'What we work on',
		items: [
			{
				title: 'AI and systems',
				body: 'Research and engineering of artificial intelligence, machine learning and distributed platforms — from concept through production.'
			},
			{
				title: 'Cybersecurity',
				body: 'Security engineering, advisory and information security practice for digital products and organisations.'
			},
			{
				title: 'Governance and compliance',
				body: 'Consulting, training and support concerning quality, information security and AI governance, including frameworks such as ISO 9001, ISO/IEC 27001 and ISO/IEC 42001, subject to applicable laws and accreditation requirements.'
			}
		]
	},
	company: {
		eyebrow: 'Company',
		title: 'Legal identity',
		nameLabel: 'Business name',
		name: 'Stellab OÜ',
		addressLabel: 'Registered address',
		address: 'Harju maakond, Tallinn, Kesklinna linnaosa, Järvevana tee 9, 11314, Estonia',
		registryLabel: 'Registry code',
		registry: '17615183',
		registryLink: 'View in the Estonian e-Business Register',
		registryUrl: 'https://ariregister.rik.ee/eng/company/17615183',
		contactPersonLabel: 'Contact person',
		contactPerson: 'Sunio OÜ (registry code 10116749)',
		vatLabel: 'VAT number',
		vat: 'EE103040637'
	},
	contact: {
		eyebrow: 'Contact',
		title: 'Get in touch',
		body: 'Write to us about research collaborations, engineering projects or compliance advisory.',
		emailLabel: 'Email',
		email: 'hello@stellab.ee',
		formName: 'Name',
		formEmail: 'Your email',
		formSubject: 'Subject',
		formMessage: 'Message',
		formCaptcha: 'Anti-spam check:',
		formSubmit: 'Send message',
		formSending: 'Sending…',
		formHint:
			'Text-only messages to hello@stellab.ee. No file attachments. First use requires a one-time activation email in that inbox.',
		formSuccess: 'Thank you — your message has been sent.',
		formError: 'Could not send the message. Please email hello@stellab.ee directly.',
		formActivation:
			'Activation required: open hello@stellab.ee, find the FormSubmit email, click “Activate Form”, then send again.',
		formSpam: 'Please solve the anti-spam check correctly.',
		formTooFast: 'Please wait a few seconds before sending.'
	},
	footer: {
		rights: 'All rights reserved.',
		tagline: 'Technology company registered in Estonia.',
		registry: 'Registry code 17615183',
		vat: 'VAT EE103040637',
		bankTitle: 'Bank details',
		ibanLabel: 'IBAN',
		iban: 'LU204080000049984547',
		bicLabel: 'BIC',
		bic: 'BCIRLULL'
	}
};
