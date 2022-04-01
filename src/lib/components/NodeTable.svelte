<script>
  export let nodes, keys;

  // let keys = ['id', 'index', 'word'];
</script>

    

<table class="table">
  <thead>
    <tr>
      {#each keys as key}
        <th scope="col">{key}</th>
      {/each}
    </tr>
  </thead>
  <tbody class="scroll-content">
    {#each nodes as n}
    <tr>
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
