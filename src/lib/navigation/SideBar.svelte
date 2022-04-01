<script lang="ts">
  // SideBar.svelte
  // Start here to add a feature.
  // Each feature of the app is available

</script>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="/library">
              ⭐ My Library
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/role">
              🧙‍♂️ Role
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/editor">
              📜️ Editor ✒️ 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/edit-book">
              📗 Book Editor ✏️
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Conservatory</span>
        </h6>

        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="/telescope">
              🔭 Telescope
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/storage">
              🌃 Storage
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/starmaps">
              🌠 Public Starmap
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <slot></slot>

  </div>
</div>