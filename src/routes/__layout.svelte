<script>
  import TopBar from '$lib/navigation/TopBar.svelte';
  import SideBar from '$lib/navigation/SideBar.svelte';

</script>

<TopBar></TopBar>
<SideBar>

<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <slot></slot>
</main>

</SideBar>

