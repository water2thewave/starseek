<script>
  import Profile from "$lib/components/Profile.svelte"
  import StarseekBar from "$lib/components/StarseekBar.svelte"
  import TokenStats from "$lib/components/TokenStats.svelte";

  var qmHash = "Qmbp5ae9UdBjDPR1H66rA5q4Dj7n6rcwCdVFurTrWr8w1s";
</script>


<nav class="navbar-dark bg-dark p-0 shadow">
  
<div class="container-fluid" >
  <div class="row justify-content-between">
    <div class="col col-2 navbar justify-content-center">
      <a class="navbar-brand">Starseek</a>
    </div>

    <StarseekBar 
      value={qmHash}
      on:submit={(e) => {
        let qmhash = e.detail;
        console.log({qmhash});
      }}
    ></StarseekBar>
    
    <div class="navbar col col-1 justify-content-end ">
        <button class="navbar-toggler collapsed " type="button" 
          data-toggle="collapse" 
          data-target="#navbarsExample01" 
          aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</div>
      
  <div class="navbar-collapse collapse" id="navbarsExample01" style="">
    <Profile>
    </Profile>
  </div>
  
  <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <a class="nav-link px-3" href="#">Sign out</a>
    </div>
  </div> -->
  

  
</nav>