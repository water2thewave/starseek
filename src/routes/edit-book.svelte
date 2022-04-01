<script>
  
  // import ContestellationHome from "$lib/components/ConstellationHome.svelte";
  // import RoleSelector from "$lib/components/RoleSelector.svelte";
  // import { writable } from '$lib/browserStore.js';

  import NodeTable from "$lib/components/NodeTable.svelte";
  import * as book from "../../static/valorant.json";

  let nodes = book.nodes;
  let links = book.links;


function copyClipboard(data) {
   /* Copy the text inside the text field */
  let json = JSON.stringify(data, null, 2) 
  navigator.clipboard.writeText(json);
}

</script>

<div class="container">
    <label for="edit-json"> Valorant </label>
  <div>
    <textarea disabled class="edit-json"> {JSON.stringify({nodes, links}, null, 2)} </textarea>
    <a on:click={copyClipboard(book)} class="copy-json btn btn-primary"> Copy JSON </a> 
  </div>
    

  <h2>Nodes</h2>
  <p>Nodes for stuff</p>
  <div>
    <NodeTable bind:nodes={nodes} keys={['id', 'value']}></NodeTable>
  </div> 

  <h2>Links</h2>
  <p>as a list</p>
  <div>
    <NodeTable bind:nodes={links} keys={['source', 'target']}></NodeTable>
  </div>
</div>

<style>

table {
  display: block;
  height: 10em;
  resize:vertical;
  overflow-y: scroll;
}
  
</style>