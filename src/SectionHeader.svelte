<script>
  export let text = '';
</script>

<h2><span>{text}</span></h2>

<style>
  h2 {
    width: 80%;
    text-align: center;
    display: inline-block;
    border-bottom: 1px solid var(--text-color);
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  h2 span {
    background: var(--bg-color);
    padding: 0 10px;
  }
</style>
