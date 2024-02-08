<script>
  export let data;
</script>

<div class="centered">
  <h1>todos</h1>

  <form method="post" action="?/create">
    <label>
      add a todo:
      <input name="content" autocomplete="off" />
    </label>
  </form>

  <ul>
    {#each data.todos as todo (todo.id)}
      <li>
        <form method="post" action="?/delete">
          <input type="hidden" name="id" value={todo.id} />
          {todo.content}
          <button>complete</button>
        </form>
      </li>
    {/each}
  </ul>
</div>

<style>
  .centered {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
