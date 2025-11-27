<script lang="ts">
	import { GraduationCap, BookOpen, Target } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	const services = [
		{
			id: 'exam-preparation',
			icon: GraduationCap,
			title: 'Exam Preparation',
			description:
				'Comprehensive exam preparation for IB, MYP, and university level courses. Guidance through solving past papers and essay-writing practice.',
			details: '€25 per hour'
		},
		{
			id: 'one-on-one',
			icon: BookOpen,
			title: 'Help in writing the IA/EE',
			description:
				'Guidance through every stage of your Geography IA or EE: topic selection, research design, data collection, analysis, and final write-up.',
			details: '€25 per hour'
		},
		{
			id: 'skill-development',
			icon: Target,
			title: 'Syllabus practice',
			description:
				'Targeted practice that follows your syllabus, where I help you understand difficult concepts in simple, concise terms, utilizing modern, tangible examples.',
			details: '€25 per hour'
		}
	];

	function handleServiceClick(serviceId: string) {
		goto(`/book?service=${serviceId}`);
	}
</script>

<section id="services" class="flex h-screen items-center" style="background-color: #e0e0db;">
	<div class="mx-auto w-full max-w-7xl px-6">
		<h2 class="mb-16 text-center text-4xl md:text-5xl" style="color: #253551;">My Services</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each services as service, index}
				<button
					class="hover-elevate active-elevate-2 cursor-pointer rounded-xl bg-white p-6 text-left shadow transition-transform duration-200 hover:scale-[1.02]"
					onclick={() => handleServiceClick(service.id)}
					data-testid={`card-service-${index}`}
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-md"
						style="background-color: rgba(37, 53, 81, 0.1);"
					>
						<svelte:component this={service.icon} class="h-6 w-6" style="color: #253551;" />
					</div>
					<h3 class="mb-4 text-2xl md:text-3xl" style="color: #253551;">
						{service.title}
					</h3>
					<p class="mb-4 text-base leading-relaxed" style="color: #253551;">
						{service.description}
					</p>
					<p class="text-sm" style="color: #253551;">
						{service.details}
					</p>
				</button>
			{/each}
		</div>
	</div>
</section>
