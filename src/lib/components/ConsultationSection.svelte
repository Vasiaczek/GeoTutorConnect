<script lang="ts">
	import { Check, Star } from 'lucide-svelte';

	const benefits = [
		'Personalized learning plan tailored to your goals',
		'Free assessment of your current knowledge level',
		'Flexible scheduling options to fit your lifestyle',
		'No obligation - discover if we\'re the right fit'
	];

	const reviewPlaceholders = [
		{
			name: 'Mishko',
			text: '"Thank you so much!! I finally got my results and it\'s a 6!"',
			initials: 'M'
		},
		{
			name: 'Valeria',
			text: '"Thank you for your help, I got into UvA!"',
			initials: 'V'
		},
		{
			name: 'Teun',
			text: '"My IA got graded today and the teacher gave me 23 so I\'m really happy,"',
			initials: 'T'
		}
	];

	function scrollToContact() {
		const element = document.getElementById('contact');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section id="consultation" class="flex h-screen items-center" style="background-color: #253551;">
	<div class="mx-auto w-full max-w-7xl px-6">
		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
			<div class="space-y-4">
				{#each reviewPlaceholders as review, index}
					<div
						class="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm md:p-5"
						data-testid={`consultation-review-${index}`}
					>
						<div class="flex-shrink-0">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-sm font-semibold text-white md:h-14 md:w-14 md:text-base"
								style="box-shadow: 0 0 0 2px rgba(0,0,0,0.15);"
							>
								{review.initials}
							</div>
						</div>
						<div class="flex-1">
							<div class="mb-2 flex items-center gap-1">
								{#each Array(5) as _}
									<Star class="h-4 w-4 fill-yellow-300 text-yellow-300" />
								{/each}
							</div>
							<p class="mb-2 text-sm md:text-base" style="color: #e0e0db;">
								{review.text}
							</p>
							<p class="text-xs font-semibold md:text-sm" style="color: #e0e0db; opacity: 0.8;">
								{review.name}
							</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-4 lg:mt-0">
				<h2 class="mb-6 text-4xl text-white md:text-5xl">Start with a Free Consultation</h2>
				<p class="mb-6 text-lg leading-relaxed" style="color: #e0e0db;">
					Not sure where to begin? Book a complimentary 30-minute consultation to discuss your
					learning goals and how I can help you succeed.
				</p>

				<div class="mb-8 space-y-3">
					{#each benefits as benefit, index}
						<div class="flex items-start gap-3" data-testid={`benefit-${index}`}>
							<div
								class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
								style="background-color: rgba(224, 224, 219, 0.2);"
							>
								<Check class="h-4 w-4 text-white" />
							</div>
							<p class="text-base leading-relaxed text-white">{benefit}</p>
						</div>
					{/each}
				</div>

				<button
					class="rounded-lg px-8 py-4 text-base md:text-lg"
					style="background-color: #e0e0db; color: #253551;"
					onclick={scrollToContact}
					data-testid="button-book-consultation"
				>
					Book Your Free Consultation
				</button>
			</div>
		</div>
	</div>
</section>
