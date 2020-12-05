<script>
  export let input = '';
</script>

<textarea
  class="textbox {input ? 'success' : 'error'}"
  bind:value={input}
></textarea>

<style>
  .success {
    transition: ease 0.2s;
    border-color: var(--success);
  }

  .error {
    transition: ease 0.2s;
    border-color: var(--error);
  }
</style>
