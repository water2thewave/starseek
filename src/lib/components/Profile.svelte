<script>
  import TokenStats from "$lib/components/TokenStats.svelte";
  import TokenGraph from "$lib/components/TokenGraph.svelte";
</script>

<div class="container-fluid" >
<div class="row" >
  <div class="col-md-3 col-lg-2 d-md-block sidebar" >
    <a class="navbar-brand" href="#">
    </a>
      <img
      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
      class="rounded-circle mb-3"
      style="width: 50px;"
      alt="Avatar"
      />
    <h5 class="navbar-brand mb-2"><strong>Michael Jordan</strong></h5>
    <p class="text-muted">Level 2 Wizard </p> 
  </div>

  <div class="col">
    <div class="row mt-2">
      <div class="col ">
        <TokenStats></TokenStats>
      </div>
      <div class="col ">
        <TokenGraph></TokenGraph>
      </div>
    </div>
  </div>

</div>
</div>