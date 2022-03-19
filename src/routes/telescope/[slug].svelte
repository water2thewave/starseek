<script context="module">
  // import KnowledgeGraph from "$lib/../brain/KnowledgeGraph.svelte";

  export async function load({ url, params, fetch, session, stuff }) {
    const urlSearchParams = url.searchParams;
    
    if (urlSearchParams.has('q')) {
      console.log({q: urlSearchParams.get('q')});
      const ipfsLink = `https://gateway.ipfs.io/ipfs/${urlSearchParams.get('q')}`;
      const response = await fetch(ipfsLink);
      const json = await response.json();
      console.log({json});
      return {
        status: response.status,
        props: json,
      };
    }

    return {
      status: 200,
      props: {
        nodes: [],
        links: [],
      }
    };
  }
</script>

<script>
  export let nodes, links;

  import { page, session } from "$app/stores";

  console.log('nodes', nodes);
  console.log('links', links);
</script>


telescope here {$page.params.cid}
<!-- 

<KnowledgeGraph width=700 height=700
  editMode={false}
  bind:nodes bind:links
></KnowledgeGraph> -->