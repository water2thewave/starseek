<script context="module">
  // import KnowledgeGraph from "$lib/../brain/KnowledgeGraph.svelte";

  import DebugPanel from "$lib/../brain/DebugPanel.svelte";

  /** @type {import('./[slug]').Load} */
  export async function load({ url, params, fetch, session, stuff }) {
    const urlSearchParams = url.searchParams;
    
    if (params.slug) {
      const ipfsLink = `https://gateway.ipfs.io/ipfs/${params.slug}`;
      const response = await fetch(ipfsLink);
      const json = await response.json();
      console.log({json});
      return {
        status: response.status,
        props: {
          ...json,
          slug: params.slug
        },
      };
    }

    return {
      status: 404,
      props: {
        nodes: [],
        links: [],
      }
    };
  }
</script>

<script>
  export let nodes, links, slug;

  import { page, session } from "$app/stores";

  console.log('nodes', nodes);
  console.log('links', links);
</script>


<h2 class="display-2">
  Telescope 
</h2>
<h2 class="display-6">
</h2>
<p class="lead">
  Display constellation data for stars.
</p>
<h6>{slug}</h6>
  
<div class="alert alert-warning" role="alert">
  ⚠️ Under Construction 🚧 
<br>
  This is read-only until further notice!
</div>

<DebugPanel
  roleData={{nodes, links}}
  role="!!Role not stored in star!!"
  nodeNumEnabled={false}
></DebugPanel>

<!-- 

<KnowledgeGraph width=700 height=700
  editMode={false}
  bind:nodes bind:links
></KnowledgeGraph> -->