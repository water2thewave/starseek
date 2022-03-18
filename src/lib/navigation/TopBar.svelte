<script>
  import Profile from "$lib/components/Profile.svelte"
  import StarseekBar from "$lib/components/StarseekBar.svelte"

</script>


<nav class="navbar-dark bg-dark p-0 shadow">
  
<div class="container-fluid" >
  <div class="row justify-content-between">
    <div class="col col-2 navbar justify-content-center">
      <a class="navbar-brand">Starseek</a>
    </div>

    <div class="navbar col ">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1"> 💫 </span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>
    </div>
    
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
    <ul class="navbar-nav me-auto mb-2">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form>
      <input class="form-control" type="text" placeholder="Search" aria-label="Search">
    </form>
  </div>
  
  <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <a class="nav-link px-3" href="#">Sign out</a>
    </div>
  </div> -->
  

  
</nav>