<script>
  
  import ContestellationHome from "$lib/components/ConstellationHome.svelte";
  import RoleSelector from "$lib/components/RoleSelector.svelte";
  import { writable } from '$lib/browserStore.js';
  import * as rolesJson from "../../static/roles.json";

  import { session } from "$app/stores";
  import { onMount } from "svelte";

  const defaultRole = 'cosmos';
	const defaultRoleData = {nodes: [], links: []};
  const roleStore = writable('roles', {});

	let roleData = defaultRoleData;
  let roles = [];
  var defaultRoles = {roles: []};

  roleStore.subscribe((storedData) => {
    console.log('storedData',storedData);
    console.log('roles changed:',roles);
    roles = Object.keys(storedData);
    roles.sort((a,b) => (a.localeCompare(b)));
  });

  console.log('roleStore:',$roleStore);

  defaultRoles = rolesJson.roles.reduce((map, {name, data}) => { 
    map[name] = data; 
    $roleStore[name] = data;
    return map;
  }, {});
  roles = Object.keys($roleStore);
  roles.sort((a,b) => (a.localeCompare(b)));


  var debugEnabled = false;;
  var editMode = false;
  var nodeNumEnabled = false;
  var selectedRole = 'cosmos';

  let clientWidth = 700;
  let clientHeight = 700;


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
    // let jsonStr = JSON.stringify(saveData);

    $roleStore[role] = saveData;
    console.log('saved to localStorage', role, saveData);
  }

  function loadRole(roleName) {
    return new Promise((resolve) => {
      // try localstorage
      let storedData = $roleStore[roleName];
      console.log({storedData});
      if (storedData != null) {
        console.log(`Loading from localstorage role data for ${roleName}`, storedData);
        resolve(storedData);
      }
      
      // try getting default data
      else if (roleName in defaultRoles) {
        const data = defaultRoles[roleName]
        console.log(`Loading default role data for ${roleName}`, data);
        resolve(data);
      }

      // console.log(`Did not class to ${role}`, roleData);
      throw Error('No data found');
    });
  }

function onRoleSelect(e) {
  const roleName = e.detail;

  console.log('Role selected', roleName);
  loadRole(roleName)
    .then((loaded) => {
      selectedRole = roleName;
      $roleStore[roleName] = loaded;
      roleData = loaded;
      console.log(`Loaded: ${roleName}: `, loaded)
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
  on:submitRole={(e) => {
    const roleName = e.detail;
    console.log(`Submitted ${ roleName }`);
    saveRole(roleName, roleData);
  }}

  on:editOff={(e) => {
    // if (editMode) {
      saveRole(selectedRole, roleData);
      console.log('Edit off');
    // }
  }}
  bind:roles
  width={clientWidth} height={clientHeight}
  {defaultRole}
  bind:debugEnabled bind:selectedRole
  bind:editMode
  bind:nodeNumEnabled
  bind:roleData
>

</ContestellationHome>