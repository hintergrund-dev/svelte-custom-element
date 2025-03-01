<svelte:options customElement="my-custom-element" />

<script lang="ts">
	import Subcomponent from './Subcomponent.svelte';

	const { name } = $props();
	let count: number = $state(0);
	const increment = () => {
		count += 1;
	};
</script>

<h1>Hello {name}</h1>
<button onclick={increment}>
	count is {count}
</button>
<Subcomponent />

<style>
	:global(*) {
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
			sans-serif;
		line-height: 1.6;
	}
	:global(h2) {
		color: #2196f3;
	}
	button {
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
			sans-serif;
		line-height: 1.6;
		color: #2c3e50;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}
</style>
