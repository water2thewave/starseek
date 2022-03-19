<script>
  const cards = [
    {
      title: 'Apprentice',
      cid: 'QmeDKQEZe4RQaS6zLHYijGF1FHbkGWUM3mmAsFjw98t1kr',
      desc: 'Some rare dude',
    },
    {
      title: 'Atronarch',
      cid: 'QmRNiCq8Lb8PCNfBBZWyG1dDTAaUXrzRLdU3aqqc9UZSkc',
      desc: 'Lion man',
    },
    {
      title: 'Lady',
      cid: 'QmR68JgpRRbtFrW7YXnYua1eYah9RH4h7SVdQ92bTBvN4T',
      desc: 'Wicked witch of the west',
    },
    {
      title: 'Wizard',
      cid: 'QmV4cXAGardNqDyoGPLbCJzvERtUQe1AYzzrZdkzS64o6r',
      desc: 'The strongest DPS man',
    },
  ];
</script>

<div class="row">
  {#each cards as {title, cid, desc}}
  <div class="col">
    <div class="card" style="width: 18rem;">
      <img src="https://ipfs.io/ipfs/{cid}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <div class="row">
            <div class="col">
              <p class="card-text">{desc}</p>
            </div>
            <div class="col">
              <a href="#" class="btn btn-primary">View</a>
            </div>
          </div>
        </div>
    </div>
  </div>
{/each}
</div>