<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	
	let mobileMenuOpen = $state(false);

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			mobileMenuOpen = false;
		}
	}

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="border-b bg-white">
	<div class="mx-auto max-w-7xl px-6 py-4">
		<div class="flex items-center justify-between">
			<button
				onclick={() => scrollToSection('hero')}
				class="hover-elevate active-elevate-2 -ml-2 flex items-center gap-2 rounded-md px-2 py-1"
				data-testid="link-home"
			>
				<img
					src="/logo_with_border.png"
					alt="Logo"
					width="40"
					height="40"
					class="h-8 w-auto"
				/>
			</button>

			<div class="hidden items-center gap-8 md:flex">
				<button
					onclick={() => scrollToSection('services')}
					class="hover-elevate active-elevate-2 rounded-md px-3 py-2 text-base font-medium"
					data-testid="link-tutoring"
				>
					Tutoring
				</button>
				<button
					onclick={() => scrollToSection('about')}
					class="hover-elevate active-elevate-2 rounded-md px-3 py-2 text-base font-medium"
					data-testid="link-about"
				>
					About
				</button>
				<button
					onclick={() => scrollToSection('contact')}
					class="hover-elevate active-elevate-2 rounded-md px-3 py-2 text-base font-medium"
					data-testid="link-contact"
				>
					Contact
				</button>
			</div>

			<button
				class="rounded-md p-2 hover:bg-gray-100 md:hidden"
				onclick={toggleMenu}
				data-testid="button-menu-toggle"
			>
				{#if mobileMenuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>

		{#if mobileMenuOpen}
			<div class="mt-4 flex flex-col gap-2 pb-4 md:hidden">
				<button
					onclick={() => scrollToSection('services')}
					class="hover-elevate active-elevate-2 rounded-md px-3 py-2 text-left text-base font-medium"
					data-testid="link-tutoring-mobile"
				>
					Tutoring
				</button>
				<button
					onclick={() => scrollToSection('about')}
					class="hover-elevate active-elevate-2 rounded-md px-3 py-2 text-left text-base font-medium"
					data-testid="link-about-mobile"
				>
					About
				</button>
				<button
					onclick={() => scrollToSection('contact')}
					class="hover-elevate active-elevate-2 rounded-md px-3 py-2 text-left text-base font-medium"
					data-testid="link-contact-mobile"
				>
					Contact
				</button>
			</div>
		{/if}
	</div>
</nav>
