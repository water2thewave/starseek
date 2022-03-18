<script>
  
  import ContestellationHome from "$lib/components/ConstellationHome.svelte";
  import RoleSelector from "$lib/components/RoleSelector.svelte";
  import { writable } from '$lib/browserStore.js';

  import {roles as defaultRoles} from '../../static/roles.json';
  import { session } from "$app/stores";

  const defaultRole = 'cosmos';
	const defaultRoleData = {nodes: [], links: []};

	let roleData = {};
  let roles = []

  roles = defaultRoles.map((d) => d.name );
  roleData = defaultRoles.find((d) => d.name === defaultRole).data || {};

  let roleDatas = defaultRoles.reduce((store, e) => {
    store[e.name] = e.data;
    return store;
  }, {});

  // console.log({defaultRoles});

  var debugEnabled = false;;
  var editMode = false;
  var nodeNumEnabled = false;
  var selectedRole = 'cosmos';

  let clientWidth = 700;
  let clientHeight = 700;


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

function loadRole(roleName) {
  return new Promise((resolve) => {
    let storedData = window.localStorage.getItem(roleName);
    console.log({storedData});
    if (storedData != null) {
      resolve(JSON.parse(storedData));
    }
    
    // try getting default data
    if (roleName in roleDatas) {
      const data = roleDatas[roleName];
      console.log(`Loading default role data for ${roleName}`, data);
      resolve(roleDatas[roleName]);
    }

    // console.log(`Did not class to ${role}`, roleData);
    throw Error('No data found');
  });
}

function onRoleSelect(e) {
  const roleName = e.detail;

  console.log('Role selected', roleName);
  loadRole(roleName)
    .then((roleData) => {
      selectedRole = roleName;
    })
    .catch((e) => {
      console.error(`Could not load role from role selector: ${roleName}`)
    });
}

</script>

<RoleSelector bind:roles
  on:roleSelect={onRoleSelect}
  bind:selectedRole
></RoleSelector>


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