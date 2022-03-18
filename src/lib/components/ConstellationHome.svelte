
<script>
	export let width, height;
	export let defaultRole;
	export let debugEnabled, selectedRole; 
	export let roles;
	export let editMode, nodeNumEnabled;
	export let roleData;

	import KnowledgeGraph from '../../brain/KnowledgeGraph.svelte';
	import DebugPanel from '../../brain/DebugPanel.svelte';
	import {createEventDispatcher} from 'svelte';
  import * as d3 from "d3";
	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();


	console.log({roles});
	console.log({roleData});

	function loadLocalStorage(role) {
		return new Promise( (resolve) => {
			let storedData = window.localStorage.getItem(role);
			console.log({storedData});
			if (storedData != null) {
				resolve(JSON.parse(storedData));
			}
			else {
				// console.log(`Did not class to ${role}`, roleData);
				throw Error('No data found');
			}
		});
	}


</script>


<div class="localstorage container">
	<div class="mt-n1 container">

	</div>
	
	
	<h1>Here be elements
			<form on:submit|preventDefault={(e) => {
				console.log('SAved  role with enter',  );
				// saveRole(selectedRole, roleData);
				// getRoles();
			}}>
			<div class="input-group mb-3">
					<span class="input-group-text" id="basic-addon1">Class</span>
					<input bind:value={selectedRole} type="text" class="form-control" placeholder="{selectedRole}" aria-label="Username" aria-describedby="basic-addon1">
			</div>
			</form>
  <button 
		on:click={() => {
			if (editMode) { dispatch('editOff'); }
			   else 			{ dispatch('editOn'); }
			editMode = !editMode;
		}}
		class="btn btn-outline-warning" aria-pressed={editMode} data-toggle="button" type="button" 
    > ✏️ </button>

  <button 
		on:click={() => { debugEnabled = !debugEnabled }}
		class="btn btn-outline-info {debugEnabled ? 'active' : ''}" aria-pressed={debugEnabled} data-bs-tggle="button" type="button" 
    > ⛏️ </button>

	</h1>
	{#if debugEnabled}
		<DebugPanel bind:nodeNumEnabled bind:roleData bind:role={selectedRole}> </DebugPanel>
	{/if}

</div>
<div class="container">
	<KnowledgeGraph 
		bind:showNodeNum={nodeNumEnabled}
		bind:nodes={roleData.nodes} bind:links={roleData.links}
		bind:editMode bind:width bind:height ></KnowledgeGraph>
</div>
	


