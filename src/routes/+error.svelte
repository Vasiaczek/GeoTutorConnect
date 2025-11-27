<script lang="ts">
	import { CircleAlert } from 'lucide-svelte';
</script>

<div class="flex min-h-screen w-full items-center justify-center bg-gray-50">
	<div class="mx-4 w-full max-w-md rounded-lg border bg-white p-6 shadow-sm">
		<div class="mb-4 flex gap-2">
			<CircleAlert class="h-8 w-8 text-red-500" />
			<h1 class="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
		</div>
		<p class="mt-4 text-sm text-gray-600">The page you're looking for doesn't exist.</p>
	</div>
</div>
