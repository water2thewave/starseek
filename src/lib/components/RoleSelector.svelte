<script>
  
	export let roles, selectedRole;

	import { onMount, createEventDispatcher } from 'svelte';	

	const dispatch = createEventDispatcher();
	
  function onRoleSelect(roleName) {
  }

	onMount(() => {
		dispatch('roleSelect', selectedRole);
	});

</script>


	<div class="row">
		<div class="col">
		{#each roles as roleName}
			<button class="btn btn-outline-primary {roleName == selectedRole ? 'active' : ''}" type="button" aria-pressed={roleName == selectedRole}
			on:click={(e) =>{
				dispatch('roleSelect', roleName);
			}}
			>{roleName}</button>
		{/each}

			<button class="btn btn-outline-success" type="button" aria-pressed="false"
			on:click={(e) => {
				// new role
			}}>+ Role</button>
		</div>
	</div>

