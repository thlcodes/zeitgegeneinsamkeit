<script>
  export let title;
  export let inset = 0;
</script>

<style>
  div {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-heading);
    font-weight: var(--font-weight-heading);
    margin: var(--inset) 0;
  }
</style>

<div style="margin-left: calc(var(--inset)*{inset}">{title}</div>
