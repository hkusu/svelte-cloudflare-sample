<script>
  export let data;
</script>

<div>
  <ul>
    {#each data.articles as article}
      <li>
        {article.title}
      </li>
    {/each}
  </ul>
</div>
