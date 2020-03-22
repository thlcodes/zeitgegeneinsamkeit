<script>
  import { createEventDispatcher } from "svelte";
  import { navigate } from "svelte-routing";

  export let goto = null;
  export let goback = false;
  export let secondary = false;
  export let disabled = false;
  export let toggleable = false;
  export let active = false;
  export let type = "button";

  const dispatch = createEventDispatcher();

  function click(e) {
    if (goto) navigate(goto);
    else if (goback) history.back();
    else dispatch("click", e);
    if (toggleable) active = !active;
  }
</script>

<style>
  button {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 1em;
    color: var(--text-color-light);
    font-family: var(--font-family-button);
    font-weight: var(--font-weight-button);
    font-size: var(--font-size-button);
    border: 0px;
    min-width: 8em;
    transition: all 200ms;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  button:active,
  button.active {
    background: var(--background-global);
    color: var(--text-color-dark);
  }

  button.secondary {
    background-color: transparent;
    min-width: 1em;
  }

  button.disabled {
    opacity: 0.5;
  }
</style>

<button
  {type}
  {disabled}
  class:active
  class:disabled
  class:secondary
  on:click={e => click(e)}>
  <slot />
</button>
