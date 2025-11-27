<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import heroImage from '$assets/generated_images/geography_tutoring_hero_image.jfif';

	function scrollToServices() {
		const element = document.getElementById('services');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section id="hero" class="flex h-screen items-center" style="background-color: #253551;">
	<div class="mx-auto w-full max-w-7xl px-6">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div class="max-w-xl">
				<h1 class="mb-6 text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
					Master IB Geography with Expert Guidance
				</h1>
				<p class="mb-4 text-lg leading-relaxed" style="color: #e0e0db;">
					As an IB graduate, I understand the struggle with trying to score in the high markbands.
					Therefore, I decided to commit myself to helping students in understanding the system and
					achieving their academic goals.
				</p>
				<p class="mb-6 text-2xl font-semibold md:text-3xl" style="color: #e0e0db;">
					Without All Nighters
				</p>
				<button
					class="flex items-center rounded-lg px-8 py-4 text-base md:text-lg"
					style="background-color: #e0e0db; color: #253551;"
					onclick={scrollToServices}
					data-testid="button-learn-more"
				>
					Learn More
					<ArrowRight class="ml-2 h-5 w-5" />
				</button>
			</div>

			<div class="relative">
				<img
					src={heroImage}
					alt="Geography tutoring materials including globe, maps, and educational resources"
					class="h-auto w-full rounded-2xl shadow-lg"
					data-testid="img-hero"
				/>
			</div>
		</div>
	</div>
</section>
