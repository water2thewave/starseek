<script>
  export let value, x, y, width, height;
  import { createEventDispatcher, onMount } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  var inputBox;

function handleInput(e) {
  if (e.data === null) {
    dispatch('submit', e);
  }
}

</script>

<foreignObject class="input-box" x={x} y={y} width={width} height={height}>

  <div class="input-box">
      <form class="input-box"
      on:submit|preventDefault={ (e) => { 
        dispatch('submit', e); 
        }}>
        <input bind:this={inputBox}
          on:focusout={() => {
            // console.log('focus out');
            // inputBox.select(); console.log('box selected');
            // inputBox.focus(); console.log('box focused');
          }}
        class="text-box" autofocus 
        onselect="this.focus()"
        onclick="this.focus(); this.select(); " onfocus="this.select()" type="text"
        bind:value />
      </form>
  </div>

</foreignObject>



<style>

.text-box {
  /* background-color: rgba(255, 255, 255, 0); */
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0;
  border: 0;
  padding: 0;
  color: antiquewhite;
  /* text-align: center; */
}

.input-box {
  border-radius: 0;
  border: 0;
  padding: 0;
  color: antiquewhite;
}
</style>
