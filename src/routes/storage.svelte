<script>
  const constellations = [
    { name: "cosmos", cid: "Qmbp5ae9UdBjDPR1H66rA5q4Dj7n6rcwCdVFurTrWr8w1s", },
    { name: "wizard", cid: "Qmbp5ae9UdBjDPR1H66rA5q4Dj7n6rcwCdVFurTrWr8w1s", },
  ];
</script>
<div
	data-v-7ee652c5=""
	data-v-5d7a2216=""
	class="dashboard-area dashboard__wrap__new-main-area__content-wrap__content"
>
	<div data-v-7ee652c5="" class="dashboard-area__header-wrapper">
		<h1
			data-v-7ee652c5=""
			aria-roledescription="title"
			class="dashboard-area__header-wrapper__title"
		>
      Storage
		</h1>
		<p data-v-7ee652c5="" class="dashboard-area__header-wrapper__message">
      I store locally: 1. constellation JSON, 2. session data. 
      In my storage I have a local buffer in browser, saved constellations in IPFS, and some posted to blockchain.
  
      It'd look like
        Wizard: QmRNiCq8Lb8PCNfBBZWyG1dDTAaUXrzRLdU3aqqc9UZSkc - [unpinned|pinned by \pinata,nft.storage,ipfs\]

		</p>
		<p>
        Staking in $HOLO or delegating $HUAHUA to spellbooks.tech gives you starmap storage (via spellbooks' own nft.storage/pinata acct.)
        Spellbooks also hosts their own IPFS node.
        Spellbooks delegators get IPFS perks.
        You can also login via email, creating a crypto address run by spellbooks.tech.
		</p>
	</div>
  
  <div class="container">
    <h1>Stored constellations</h1>

    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Pin Status</th>
        <th scope="col">Size</th>
      </tr>
    </thead>
    <tbody>
      {#each constellations as c}
      <tr>
        <td >
          <h5 class="card-title ">{c.name}</h5>
          <h5 class="card-subtitle mb-2 text-muted">Qmbp5ae9UdBjDPR1H66rA5q4Dj7n6rcwCdVFurTrWr8w1s</h5>
        </td>
        <td >📌</td>
        <td >7 kb</td>
      </tr>
      {/each}
      <!-- <li class="list-group-item">
        <div class="card-body">
      <tr>
        </div>
      </li> -->
    </tbody>
  </div>
	<div data-v-eab7a922="" data-v-7ee652c5="" class="project-usage">
		<div data-v-a8608554="" data-v-eab7a922="" class="usage-area project-usage__storage-used">
			<p data-v-a8608554="" class="usage-area__title">Storage</p>
			<pre data-v-a8608554="" class="usage-area__remaining">150.00GB Remaining</pre>
			<div data-v-77030f7f="" data-v-a8608554="" class="bar-container">
				<div
					data-v-77030f7f=""
					class="bar-container__fill"
					style="background-color: rgb(0, 104, 220); width: 0%;"
				/>
			</div>
			<div data-v-a8608554="" class="usage-area__limits-area">
				<pre data-v-a8608554="" class="usage-area__limits-area__title">Storage Used</pre>
				<pre data-v-a8608554="" class="usage-area__limits-area__limits">0 / 150.00GB</pre>
			</div>
		</div>
		<div data-v-a8608554="" data-v-eab7a922="" class="usage-area project-usage__bandwidth-used">
			<p data-v-a8608554="" class="usage-area__title">Bandwidth</p>
			<pre data-v-a8608554="" class="usage-area__remaining">150.00GB Remaining</pre>
			<div data-v-77030f7f="" data-v-a8608554="" class="bar-container">
				<div
					data-v-77030f7f=""
					class="bar-container__fill"
					style="background-color: rgb(0, 104, 220); width: 0%;"
				/>
			</div>
			<div data-v-a8608554="" class="usage-area__limits-area">
				<pre data-v-a8608554="" class="usage-area__limits-area__title">Bandwidth Used</pre>
				<pre data-v-a8608554="" class="usage-area__limits-area__limits">0 / 150.00GB</pre>
			</div>
		</div>
	</div>
	<section data-v-66810c3c="" data-v-7ee652c5="" class="project-summary">
		<h1 data-v-66810c3c="" class="project-summary__title">Details</h1>
		<div data-v-66810c3c="" class="project-summary__items">
			<div
				data-v-5233d5a0=""
				data-v-66810c3c=""
				class="summary-item right-indent"
				style="background-color: rgb(245, 246, 250);"
			>
				<p data-v-5233d5a0="" class="summary-item__title" style="color: rgb(27, 37, 51);">Users</p>
				<p data-v-5233d5a0="" class="summary-item__value" style="color: rgb(0, 0, 0);">1</p>
			</div>
			<div
				data-v-5233d5a0=""
				data-v-66810c3c=""
				class="summary-item right-indent"
				style="background-color: rgb(245, 246, 250);"
			>
				<p data-v-5233d5a0="" class="summary-item__title" style="color: rgb(27, 37, 51);">
					Access Grants
				</p>
				<p data-v-5233d5a0="" class="summary-item__value" style="color: rgb(0, 0, 0);">2</p>
			</div>
			<div
				data-v-5233d5a0=""
				data-v-66810c3c=""
				class="summary-item right-indent"
				style="background-color: rgb(177, 193, 217);"
			>
				<p data-v-5233d5a0="" class="summary-item__title" style="color: rgb(27, 37, 51);">
					Buckets
				</p>
				<p data-v-5233d5a0="" class="summary-item__value" style="color: rgb(0, 0, 0);">1</p>
			</div>
			<div
				data-v-5233d5a0=""
				data-v-66810c3c=""
				class="summary-item"
				style="background-color: rgb(0, 104, 220);"
			>
				<p data-v-5233d5a0="" class="summary-item__title" style="color: rgb(255, 255, 255);">
					Estimated Charges
				</p>
				<p data-v-5233d5a0="" class="summary-item__value" style="color: rgb(255, 255, 255);">
					$0.00
				</p>
			</div>
		</div>
	</section>
	<div data-v-636640fa="" data-v-7ee652c5="" class="buckets-area">
		<div data-v-636640fa="" class="buckets-overflow">
			<div data-v-636640fa="" class="buckets-header">
				<p data-v-636640fa="" class="buckets-header__title">Usage per bucket</p>
				<div
					data-v-6d29239c=""
					data-v-636640fa=""
					class="header-container buckets-header-component"
				>
					<div data-v-6d29239c="" class="header-container__buttons-area" />
					<input
						data-v-4af962fa=""
						data-v-6d29239c=""
						placeholder="Search Buckets"
						type="text"
						autocomplete="off"
						class="common-search-input"
						style="width: 56px;"
					/>
				</div>
			</div>
			<div data-v-636640fa="" class="buckets-container">
				<div data-v-1c04fe56="" data-v-636640fa="" class="sort-header-container">
					<div data-v-1c04fe56="" class="sort-header-container__item name">
						<p data-v-1c04fe56="" class="sort-header-container__item__name">BUCKET NAME</p>
					</div>
					<div data-v-1c04fe56="" class="sort-header-container__item">
						<p data-v-1c04fe56="" class="sort-header-container__item__name">STORAGE</p>
					</div>
					<div data-v-1c04fe56="" class="sort-header-container__item">
						<p data-v-1c04fe56="" class="sort-header-container__item__name">BANDWIDTH</p>
					</div>
					<div data-v-1c04fe56="" class="sort-header-container__item">
						<p data-v-1c04fe56="" class="sort-header-container__item__name">OBJECTS</p>
					</div>
					<div data-v-1c04fe56="" class="sort-header-container__item">
						<p data-v-1c04fe56="" class="sort-header-container__item__name">SEGMENTS</p>
					</div>
				</div>
				<div data-v-b54d6294="" data-v-636640fa="" class="item-component buckets-list">
					<div data-v-2619ead4="" data-v-b54d6294="" class="container item-component__item">
						<p data-v-2619ead4="" title="demo-bucket" class="container__item name">demo-bucket</p>
						<p data-v-2619ead4="" class="container__item">0.00GB</p>
						<p data-v-2619ead4="" class="container__item">0.00GB</p>
						<p data-v-2619ead4="" class="container__item">0</p>
						<p data-v-2619ead4="" class="container__item">0</p>
					</div>
				</div>
			</div>
			<!---->
		</div>
		<!---->
	</div>
</div>

<style>
  body {
		-webkit-box-direction: normal;
		margin: 0;
		padding: 30px 30px 60px 30px;
		height: calc(100% - 90px);
		font-family: font_regular, sans-serif;
		overflow-y: auto;
	}
</style>
