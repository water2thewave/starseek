<script>
  
  import ContestellationHome from "$lib/components/ConstellationHome.svelte";
  import { writable } from '$lib/browserStore.js';

  import {roles as defaultRoles} from '../../static/roles.json';

  const defaultRole = 'cosmos';
	const defaultRoleData = {nodes: [], links: []};

	let roleData = {};
  let roles = []

  roles = defaultRoles.map((d) => d.name );
  roleData = defaultRoles.find((d) => d.name === defaultRole).data || {};

  // console.log({defaultRoles});

  var debugEnabled = false;;
  var editMode = false;
  var nodeNumEnabled = false;
  var selectedRole = 'cosmos';

  let clientWidth = 300;
  let clientHeight = 300;


  // const roles = writable('roles', [{defaultRole: defaultRoleData}]);
  // const role = writable('role', defaultRole);

  // const editMode = writable('editMode', false);
  // const nodeNumEnabled = writable('nodeNumEnabled', false);


  // console.log('Roles', roles);


	function cleanLink(link) {
		let {index, source, target} = link;
		if (typeof source === 'object' && 'id' in source) {
			let ret = {source: source.id, target: target.id};
			return ret;
		}
		return link;
	}

function saveRole(role, data) {
	const {nodes, links} = data;
	const saveLinks = links.map(cleanLink);

	// const saveNodes = nodes.map(({id, word}) =>  {id, word});
	// const saveData = {nodes: saveNodes, links: saveLinks};
	const saveData = {nodes, links: saveLinks};
	console.log('saved to localStorage', role, saveData);
	let jsonStr = JSON.stringify(saveData);

  selectedRole = role;
  // $roles[role] = jsonStr;

	// window.localStorage.setItem(role, jsonStr);
	// window.sessionStorage.setItem('selectedRole', selectedRole);
}

</script>

	<div class="row">
		<div class="col">
		{#each roles as roleName}
			<button class="btn btn-outline-primary {roleName == selectedRole ? 'active' : ''}" type="button" aria-pressed={roleName == selectedRole}
			on:click={(e) => {
				// loadLocalStorage(roleName)
				// 	.then((data) => { 
				// 		roleData = data; 
				// 		selectedRole = roleName; 
				// 		console.debug({data});
				// }).catch((e) => {
				// 		const roleFile = `${roleName}.json`;
				// 		let save = (obj) => {
				// 			roleData = obj;
				// 			console.log(`Loading from file ${roleName}`, roleData);
				// 			selectedRole = roleName;
				// 			// saveRole(roleName, obj);
				// 		};

				// 		// load role from file, use default if missing
				// 		d3.json(roleFile)
				// 			.then(save)
				// 			.catch(e => {
				// 				d3.json(defaultDataFile)
				// 					.then(save);
				// 			});
				// });
				}}>{roleName}</button>
		{/each}

			<button class="btn btn-outline-success" type="button" aria-pressed="false"
			on:click={(e) => {
				// new role
			}}>+ Role</button>
		</div>
	</div>



<ContestellationHome 
  bind:roles
  width={clientWidth} height={clientHeight}
  {defaultRole}
  bind:debugEnabled bind:selectedRole
  bind:editMode
  bind:nodeNumEnabled
  bind:roleData
>

</ContestellationHome>