<script>
  
  import ContestellationHome from "$lib/components/ConstellationHome.svelte";
  import RoleSelector from "$lib/components/RoleSelector.svelte";
  import { writable } from '$lib/browserStore.js';
  // import * as rolesJson from "../../../../static/roles.json";

  import { page, session } from "$app/stores";
  import { onMount } from "svelte";

  console.log('page params', $page.params);
</script>


telescope here {$page.params.cid}

<!-- </ContestellationHome> -->