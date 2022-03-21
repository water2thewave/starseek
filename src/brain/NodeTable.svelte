<script>
  export let nodes;

  let keys = ['id', 'index', 'word'];
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
    {#each nodes as {id, index, word}}
    <tr>
      <td><input bind:value={id} type="text" /> </td>
      <td><input bind:value={index} type="text" /> </td>
      <td><input bind:value={word} type="text" /> </td>
    </tr>
    {/each}
  </tbody>
</table>



<style>
  
.table {
  display: block;
  height: 10em;
  resize:vertical;
  /* overflow-y: scroll; */
}

.scroll-content {
  resize: vertical;
}
</style>
