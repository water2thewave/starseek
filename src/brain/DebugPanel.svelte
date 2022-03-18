<script>
  
export let roleData, role, nodeNumEnabled;

import NodeTable from './NodeTable.svelte';


function deleteLocalStorage() {
  window.localStorage.clear();
  console.log('Localstorage deleted');
}
function copyClipboard(roleData) {
   /* Copy the text inside the text field */
  let data = JSON.stringify({
    nodes: roleData.nodes,
    links: roleData.links.map(cleanLink)
  }, null, 2) 
  navigator.clipboard.writeText(data);
}

function cleanLink(link) {
	let {index, source, target} = link;
	if (typeof source === 'object' && 'index' in source) {
		let ret = {source: source.id, target: target.id};
		return ret;
	}
	return link;
}



var deleteConfirm = false;
</script>

    
<div>

	<button class="btn btn-outline-info" role="button"
		on:click={copyClipboard(roleData)}>
		✂️
  </button>

	<button class="btn btn-outline-secondary" data-toggle="button" role="button"
		on:click={() => nodeNumEnabled = !nodeNumEnabled}>
		#️⃣ 
	</button>


	<button class="btn btn-primary show-localstorage" type="button" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="lscontent" data-target="#lscontent">
		Show localstorage
	</button>


	<button class="btn btn-outline-danger delete-localstorage" aria-pressed={deleteConfirm} data-toggle="button" role="button"
		on:click={() => deleteConfirm = !deleteConfirm}>
		Delete localstorage
  </button>

  {#if deleteConfirm}
    <button class="btn btn-danger delete-localstorage" role="button"
      on:click={(e) => {deleteLocalStorage(); deleteConfirm = false;}}>
      Click to confirm deletion!
    </button>
  {/if}



	<div class="collapse" id="lscontent">
		<div class="card cardbody">
			<label for="edit-json"> {role} </label>
			<textarea class="edit-json"> {JSON.stringify(roleData, null, 2)} </textarea>
			<a on:click={copyClipboard(roleData)}
				class="copy-json btn btn-primary"> Copy text </a> 
		</div>
	</div>
	<NodeTable bind:nodes={roleData.nodes}>
	</NodeTable>
</div>



<style>
</style>
