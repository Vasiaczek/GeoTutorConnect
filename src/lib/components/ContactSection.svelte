<script lang="ts">
	import { submitWeb3Form } from '$lib/web3forms';
	import { contactSubmissionSchema, type ContactSubmission } from '$lib/schema';

	let formData = $state<ContactSubmission>({
		name: '',
		email: '',
		subject: '',
		message: '',
		service: undefined
	});

	let isSubmitting = $state(false);
	let errors = $state<Record<string, string>>({});
	let showSuccessToast = $state(false);
	let showErrorToast = $state(false);

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
				service: undefined
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

<section id="contact" class="flex h-screen items-center" style="background-color: #e0e0db;">
	<div class="mx-auto w-full max-w-7xl px-6">
		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
			<div class="mt-16">
				<h2 class="mb-6 text-4xl md:text-5xl" style="color: #253551;">Contact Me</h2>
				<p class="text-lg leading-relaxed" style="color: #253551; opacity: 0.8;">
					Have questions? Send me a message and I'll get back to you within 24 hours.
				</p>
			</div>

			<div>
				<form onsubmit={handleSubmit} class="space-y-4">
					<div>
						<input
							type="text"
							placeholder="Full Name"
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
						<input
							type="email"
							placeholder="Email"
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
						<input
							type="text"
							placeholder="Subject (Optional)"
							bind:value={formData.subject}
							class="w-full rounded-lg border-0 bg-white px-4 py-3 text-base"
							style="color: #253551;"
							data-testid="input-subject"
						/>
					</div>

					<div>
						<textarea
							placeholder="Tell me about your learning goals or any questions you have..."
							rows={4}
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
	</div>
</section>
