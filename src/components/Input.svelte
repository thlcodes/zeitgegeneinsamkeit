<script>
  import { createEventDispatcher } from "svelte";
  import { navigate } from "svelte-routing";

  export let name;
  export let type = "text";
  export let required = false;
  export let value = "";
  export let placeholder = "";
  export let disabled = false;
  export let readonly = false;
  export let items = [];
  export let autocomplete = "off";

  $: itemKeys = Array.isArray(items) ? items : Object.keys(items);
  $: itemValues = Array.isArray(items) ? items : Object.values(items);

  function click(e) {
    if (goto) navigate(goto);
    else if (goback) history.back();
    else dispatch("click", e);
  }
</script>

<style>
  input,
  select {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 1em;
    color: var(--text-color-light);
    font-family: var(--font-family-button);
    font-weight: var(--font-weight-button);
    font-size: var(--font-size-button);
    border: 0px;
    min-width: 8em;
    text-align: center;
    text-align: -webkit-center;
    text-align-last: center;
    text-align-last: -webkit-center;
    -webkit-appearance: none;
  }

  option {
    color: black;
  }

  input::placeholder {
    color: var(--text-color-light);
  }

  input:focus::placeholder {
    opacity: 0.5;
  }
</style>

{#if type == 'date'}
  <input
    {name}
    id={name}
    {required}
    {autocomplete}
    {disabled}
    {readonly}
    {placeholder}
    bind:value
    type="date" />
{:else if type == 'email'}
  <input
    {name}
    id={name}
    {required}
    {autocomplete}
    {disabled}
    {readonly}
    {placeholder}
    bind:value
    type="email" />
{:else if type == 'image'}
  <input
    {name}
    id={name}
    {required}
    {autocomplete}
    {disabled}
    {readonly}
    aria-label="bild"
    {placeholder}
    bind:value
    type="image" />
{:else if type == 'select'}
  <select {name} id={name} {required} {autocomplete} {disabled} bind:value>
    {#each itemKeys as itemKey, i}
      <option value={itemKey}>{itemValues[i]}</option>
    {/each}
  </select>
{:else}
  <input
    {name}
    id={name}
    {required}
    {autocomplete}
    {disabled}
    {readonly}
    {placeholder}
    bind:value
    type="text" />
{/if}
