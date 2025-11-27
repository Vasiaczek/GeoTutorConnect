<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import ConsultationSection from '$lib/components/ConsultationSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<div class="min-h-screen">
	<Navigation />
	<main>
		<HeroSection />
		<ServicesSection />
		<ConsultationSection />
		<AboutSection />
		<ContactSection />
	</main>
	<footer class="border-t py-8" style="background-color: #253551;">
		<div class="mx-auto max-w-7xl px-6 text-center text-sm" style="color: #e0e0db;">
			<p>&copy; {new Date().getFullYear()} Wasiak Tutoring. All rights reserved.</p>
		</div>
	</footer>
</div>
