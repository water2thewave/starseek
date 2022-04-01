<script>
  
  // import ContestellationHome from "$lib/components/ConstellationHome.svelte";
  // import RoleSelector from "$lib/components/RoleSelector.svelte";
  // import { writable } from '$lib/browserStore.js';

  import NodeTable from "$lib/components/NodeTable.svelte";
  import * as book from "../../static/valorant.json";

  let nodes = book.nodes;
  let links = book.links;


  function addNode(node) {
    nodes.push(node);
    nodes = nodes;
  }

  function addLink(link) {
    links.push(link);
    links = links;
  }

  function copyClipboard(data) {
     /* Copy the text inside the text field */
    let json = JSON.stringify(data, null, 2) 
    navigator.clipboard.writeText(json);
  }

  function handleDeleteLink(event) {
    links = links.filter((l) => l != event.detail);
  }

  function handleDeleteNode(event) {
    nodes = nodes.filter((n) => n != event.detail);
  }

</script>

<div class="container">
    <label for="edit-json"> Valorant </label>
  <div>
    <textarea disabled class="edit-json"> {JSON.stringify({nodes, links}, null, 2)} </textarea>
    <button on:click={() => copyClipboard({nodes, links})} class="copy-json btn btn-primary"> Copy JSON </button> 
  </div>
    

  <h2>Nodes</h2>
  <p>Nodes for stuff</p>
    <button on:click={() => { addNode({id: "newNode", value: "newNode"}) } } class="copy-json btn btn-primary"> Add Node </button> 
  <div>
    <NodeTable 
    on:deleteNode={handleDeleteNode}
    bind:nodes={nodes} keys={['id', 'value']} enableDelete ></NodeTable>
  </div> 

  <h2>Links</h2>
  <p>as a list</p>
  <div>
    <button on:click={() => { addLink({source: "blank", target: "blank"}) } } class="copy-json btn btn-primary"> Add Node </button> 
    <NodeTable 
    on:deleteNode={handleDeleteLink}
    enableDelete bind:nodes={links} keys={['source', 'target']}></NodeTable>
  </div>
</div>

<style>

/* table {
  display: block;
  height: 10em;
  resize:vertical;
  overflow-y: scroll;
} */
  
</style>