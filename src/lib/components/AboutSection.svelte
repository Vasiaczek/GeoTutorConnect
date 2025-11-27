<script lang="ts">
	import { Award, MapPin, Users } from 'lucide-svelte';
	import aboutImage from '$assets/generated_images/geography_tutor_professional_headshot.jpg';

	const credentials = [
		{ icon: Award, text: '7/7 in Geography HL' },
		{ icon: Users, text: 'Prepared 15 students for final exams' },
		{ icon: MapPin, text: 'Specialized in Urban Geography' }
	];
</script>

<section id="about" class="flex h-screen items-center" style="background-color: #e0e0db;">
	<div class="mx-auto w-full max-w-4xl px-6">
		<div class="mb-12 text-center">
			<div class="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full">
				<img
					src={aboutImage}
					alt="Professional geography tutor"
					class="h-full w-full object-cover"
				/>
			</div>
			<h2 class="mb-4 text-4xl md:text-5xl" style="color: #253551;">About Me</h2>
		</div>

		<div class="mb-8 space-y-6 text-lg leading-relaxed" style="color: #253551;">
			<p>
				My name is Stanisław Wasiak and I'm a second year BSc Spatial Planning and Design student
				at the University of Groningen. I graduated the International Baccalaureate Programme at the
				Stefan Batory High School in Warsaw, Poland, with a score of 37/45. Of those points, I
				graduated with 7/7 in both Higher Level Geography and Standard Level AA Mathematics.
			</p>
			<p>
				I began tutoring in 2024, when I partnered up with a Dutch company offering tutoring
				services to students in the Netherlands. I decided to begin tutoring on my own when both my
				students and I realized that their needs are better met when I'm available to them at all
				times - something that previously wasn't possible. Since then, I've guided more than a dozen
				students through their finals, writing IAs, and Extended Essays.
			</p>
			<p>
				I helped students from The Netherlands, Spain, Sweden, Poland, and Switzerland in achieving
				their desired grades, with an average final score of 6.6/7.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each credentials as credential, index}
				<div
					class="flex flex-col items-center rounded-md bg-white p-4 text-center"
					data-testid={`credential-${index}`}
				>
					<div
						class="mb-3 flex h-10 w-10 items-center justify-center rounded-md"
						style="background-color: rgba(37, 53, 81, 0.1);"
					>
						<svelte:component this={credential.icon} class="h-5 w-5" style="color: #253551;" />
					</div>
					<p class="text-sm" style="color: #253551;">{credential.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
