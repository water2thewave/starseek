<script>
  export let links, keys;

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
    {#each links as link}
    <tr>
      {#each keys as key}
      <td><input bind:value={link[key]} type="text" /> </td>
      {/each}
    </tr>
    {/each}
  </tbody>
</table>



<style>
  
</style>
