
<script>
  // import "carbon-components-svelte/css/g80.css";
  // import "@carbon/charts/styles.min.css";
	// import "carbon-components/css/carbon-components.min.css";
  import {DonutChart} from '@carbon/charts-svelte';

  const data = [
    {
      "group": "Staked",
      "value": 65000
    },
    {
      "group": "Unstaked",
      "value": 20000
    },
  ];
  const options = {
    "title": "Token Allocation",
    "resizable": true,
    "donut": {
      "center": {
        "label": "$HUAHUA"
      }
    },
    "height": "400px",
  };
</script>

<div>

<div class="container">
  <DonutChart {data} {options}></DonutChart>
</div>
</div>

<style>
  .chart-title {
    color: white;
  }
</style>