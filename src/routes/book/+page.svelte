<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { ArrowLeft } from 'lucide-svelte';
	import { submitWeb3Form } from '$lib/web3forms';
	import { contactSubmissionSchema, type ContactSubmission } from '$lib/schema';

	const SERVICES: Record<string, string> = {
		'exam-preparation': 'Exam Preparation',
		'one-on-one': 'One-on-One Tutoring',
		'skill-development': 'Skill Development'
	};

	const serviceParam = $derived(page.url.searchParams.get('service') || 'exam-preparation');
	const serviceName = $derived(SERVICES[serviceParam] || SERVICES['exam-preparation']);

	let formData = $state<ContactSubmission>({
		name: '',
		email: '',
		subject: '',
		message: '',
		service: ''
	});

	// Initialize service when serviceName is available
	$effect(() => {
		formData.service = serviceName;
	});

	let isSubmitting = $state(false);
	let errors = $state<Record<string, string>>({});
	let showSuccessToast = $state(false);
	let showErrorToast = $state(false);

	function goBack() {
		goto('/');
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		errors = {};

		const result = contactSubmissionSchema.safeParse(formData);
		if (!result.success) {
			result.error.errors.forEach((err) => {
				if (err.path[0]) {
					errors[err.path[0] as string] = err.message;
				}
			});
			return;
		}

		isSubmitting = true;
		try {
			await submitWeb3Form({
				name: formData.name,
				email: formData.email,
				subject: formData.subject,
				message: formData.message,
				service: formData.service
			});
			showSuccessToast = true;
			formData = {
				name: '',
				email: '',
				subject: '',
				message: '',
				service: serviceName
			};
			setTimeout(() => {
				showSuccessToast = false;
			}, 5000);
		} catch {
			showErrorToast = true;
			setTimeout(() => {
				showErrorToast = false;
			}, 5000);
		} finally {
			isSubmitting = false;
		}
	}
</script>

{#if showSuccessToast}
	<div
		class="fixed right-4 top-4 z-50 rounded-lg bg-green-600 px-6 py-4 text-white shadow-lg"
	>
		<p class="font-semibold">Message sent successfully!</p>
		<p class="text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
	</div>
{/if}

{#if showErrorToast}
	<div class="fixed right-4 top-4 z-50 rounded-lg bg-red-600 px-6 py-4 text-white shadow-lg">
		<p class="font-semibold">Error sending message</p>
		<p class="text-sm">Please try again later.</p>
	</div>
{/if}

<div class="flex min-h-screen items-center" style="background-color: #e0e0db;">
	<div class="mx-auto w-full max-w-3xl px-6 py-16">
		<button
			class="-ml-2 mb-8 flex items-center gap-2 rounded-md px-3 py-2 hover:bg-black/5"
			onclick={goBack}
			data-testid="button-back"
		>
			<ArrowLeft class="h-4 w-4" />
			Back to Home
		</button>

		<div class="mb-12">
			<h1 class="mb-4 text-4xl md:text-5xl" style="color: #253551;">Book {serviceName}</h1>
			<p class="text-lg" style="color: #253551;">
				Fill out the form below and I'll get back to you within 24 hours.
			</p>
		</div>

		<form onsubmit={handleSubmit} class="space-y-6">
			<div>
				<label for="service" class="mb-2 block text-sm font-medium" style="color: #253551;">Service</label>
				<input
					id="service"
					type="text"
					readonly
					value={formData.service}
					class="w-full rounded-lg border-0 bg-white px-4 py-3 text-base"
					style="color: #253551;"
					data-testid="input-service"
				/>
			</div>

			<div>
				<label for="name" class="mb-2 block text-sm font-medium" style="color: #253551;">Full Name</label>
				<input
					id="name"
					type="text"
					placeholder="John Smith"
					bind:value={formData.name}
					class="w-full rounded-lg border-0 bg-white px-4 py-3 text-base"
					style="color: #253551;"
					data-testid="input-name"
				/>
				{#if errors.name}
					<p class="mt-1 text-sm text-red-500">{errors.name}</p>
				{/if}
			</div>

			<div>
				<label for="email" class="mb-2 block text-sm font-medium" style="color: #253551;">Email</label>
				<input
					id="email"
					type="email"
					placeholder="john@example.com"
					bind:value={formData.email}
					class="w-full rounded-lg border-0 bg-white px-4 py-3 text-base"
					style="color: #253551;"
					data-testid="input-email"
				/>
				{#if errors.email}
					<p class="mt-1 text-sm text-red-500">{errors.email}</p>
				{/if}
			</div>

			<div>
				<label for="subject" class="mb-2 block text-sm font-medium" style="color: #253551;"
					>Subject (Optional)</label
				>
				<input
					id="subject"
					type="text"
					placeholder="What would you like to discuss?"
					bind:value={formData.subject}
					class="w-full rounded-lg border-0 bg-white px-4 py-3 text-base"
					style="color: #253551;"
					data-testid="input-subject"
				/>
			</div>

			<div>
				<label for="message" class="mb-2 block text-sm font-medium" style="color: #253551;">Message</label>
				<textarea
					id="message"
					placeholder="Tell me about your learning goals or any questions you have..."
					rows={6}
					bind:value={formData.message}
					class="w-full resize-none rounded-lg border-0 bg-white px-4 py-3 text-base"
					style="color: #253551;"
					data-testid="input-message"
				></textarea>
				{#if errors.message}
					<p class="mt-1 text-sm text-red-500">{errors.message}</p>
				{/if}
			</div>

			<button
				type="submit"
				class="w-full rounded-lg py-4 text-base disabled:opacity-50 md:text-lg"
				style="background-color: #253551; color: #e0e0db;"
				disabled={isSubmitting}
				data-testid="button-submit"
			>
				{isSubmitting ? 'Sending...' : 'Send Message'}
			</button>
		</form>
	</div>
</div>
