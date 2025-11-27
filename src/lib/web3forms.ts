const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const DEFAULT_ACCESS_KEY = '4d684375-0b82-4de3-8f86-94d45dca06f1';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? DEFAULT_ACCESS_KEY;

type SubmissionFields = Record<string, string | undefined | null>;

export async function submitWeb3Form(fields: SubmissionFields) {
	const cleanedFields = Object.entries(fields).reduce<Record<string, string>>(
		(acc, [key, value]) => {
			if (value !== undefined && value !== null && value.trim() !== '') {
				acc[key] = value.trim();
			}
			return acc;
		},
		{}
	);

	const response = await fetch(WEB3FORMS_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			access_key: WEB3FORMS_ACCESS_KEY,
			...cleanedFields
		})
	});

	const data = await response.json();

	if (!response.ok || data.success !== true) {
		throw new Error(data.message || 'Web3Forms submission failed');
	}

	return data;
}
