<script>
  export let nodes, keys, enableDelete;

  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  // let keys = ['id', 'index', 'word'];

function deleteItem(item) {
  dispatch('deleteNode', item)
}
</script>

    

<table class="table">
  <thead>
    <tr>
      {#if enableDelete}
        <th scope="col">X</th>
      {/if}
      {#each keys as key}
        <th scope="col">{key}</th>
      {/each}
    </tr>
  </thead>
  <tbody class="scroll-content">
    {#each nodes as n}
    <tr>
      {#if enableDelete}
        <td><button on:click={() => deleteItem(n)} class="btn btn-danger">X</button> </td>
      {/if}

      {#each keys as key}
        <td><input bind:value={n[key]} type="text" /> </td>
      {/each}
    </tr>
    {/each}
  </tbody>
</table>



<style>
  
/* table {
  display: block;
  height: 10em;
  resize:vertical;
  overflow-y: scroll;
}

.scroll-content {
  resize: vertical;
} */
</style>
