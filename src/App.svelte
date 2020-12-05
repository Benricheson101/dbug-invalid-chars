<script>
  import Input from './Input.svelte';
  import Output from './Output.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import Button from './Button.svelte';
  import {findInvalid, stripInvalid} from './util/util.js';
  import {smartPunctuation} from './util/constants.js';

  export let input = '';

  $: invalid = findInvalid(input);

  $: stripped = stripInvalid(input);
</script>

<main>
  <h1>Hello!</h1>
  <p>Paste your DBug command in the input box and press the copy button.</p>

  <SectionHeader text="Input" />
  <Input bind:input/>

  <!-- {#if invalid.all.length} -->
    <SectionHeader text="Content" />
    <p>
      {#each input as char, i}
        {#if smartPunctuation[char]}
          <span class="hl-yellow">{char}</span>
        {:else if invalid.all.includes(i)}
          <span class="hl-red">{char}</span>
        {:else}
          {char}
        {/if}
      {/each}
    </p>
  <!-- {/if} -->

  <SectionHeader text="Stripped" />
  <Output output={stripped} />

  <div class="buttons">
    <Button
      class="left-button"
      buttonAction={() => {}}
    >Copy</Button>

    <Button
      class="right-button"
      buttonAction={() => input = ''}
    >Reset</Button>
  </div>

</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

  :global(:root) {
    --bg-color: #2E3440;
    --text-color: #ECEFF4;
    --title-color: #88C0D0;
    --input-bg: #434C5E;

    --hl-red: #db4444;
    --hl-yellow: #ede655;
    --light-blue: #4287f5;

    --success: #A3BE8C;
    --error: #BF616A;

    /*
    --success: #61db56;
    --success-alt: #76e66c;
    --error: #db4444;
    */
  }

  :global(body) {
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  :global(.textbox) {
    outline: none;
    resize: none;
    width: 80%;
    font-family: 'Fira Code', monospace;
    background-color: var(--input-bg);
    color: var(--text-color);
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 80%;
    margin: 0 auto;
  }

  h1 {
    color: var(--title-color);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .hl-red {
    background-color: var(--hl-red);
  }

  .hl-yellow {
    background-color: var(--hl-yellow);
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
