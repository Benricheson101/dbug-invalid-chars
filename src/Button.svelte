<script>
  export let buttonAction = () => alert('hi!');
  export let disabled = false;
</script>

<button disabled={disabled} on:click={buttonAction}>
  <slot></slot>
</button>

<style>
  button {
    width: 25%;
    background-color: var(--text-color);
  }
</style>
