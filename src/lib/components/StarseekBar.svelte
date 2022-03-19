<script>
	import { createEventDispatcher } from 'svelte';
	export let value;

	const dispatch = createEventDispatcher();
</script>

<form
	class="navbar col"
	on:submit|preventDefault={(e) => {
		dispatch('submit', value);
	}}
>
	<div class="input-group">
		<span class="input-group-text" id="basic-addon1"> 💫 </span>
		<input type="text" class="form-control" bind:value placeholder="Constellation QmHash " aria-label="Constellation CID" aria-describedby="basic-addon1" />
	</div>
</form>
