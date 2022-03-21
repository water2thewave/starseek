<script>
	// import ContestellationHome from "$lib/components/ConstellationHome.svelte";
	// import RoleSelector from "$lib/components/RoleSelector.svelte";
	import { writable } from '$lib/browserStore.js';
	// import * as rolesJson from "../../../../static/roles.json";

	import { session } from '$app/stores';
	import { onMount } from 'svelte';

	// const defaultRole = 'cosmos';
	// const defaultRoleData = {nodes: [], links: []};
	// const roleStore = writable('roles', {});

	// let roleData = defaultRoleData;
	// let roles = [];
	// var defaultRoles = {roles: []};

	const sampleSeeds = [
		'Qmbp5ae9UdBjDPR1H66rA5q4Dj7n6rcwCdVFurTrWr8w1s',
		'Qmbp5ae9UdBjDPR1H66rA5q4Dj7n6rcwCdVFurTrWr8w1s',
		'Qmbp5ae9UdBjDPR1H66rA5q4Dj7n6rcwCdVFurTrWr8w1s'
	];
</script>

<div>
	<h1>Telescope</h1>
	<br />
	<h2>Search</h2>
	<p>To use the telescope, type the Constellation's Seed (CID) in the navbar above.</p>
	<br />
	<h2>Sample Constellations</h2>

	<ul>
		{#each sampleSeeds as constellation}
			<li>
				<a href="/telescope/{constellation}">{constellation}</a>
			</li>
		{/each}
	</ul>
</div>
