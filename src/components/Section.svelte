<script>
  export let level = 1;
</script>

<style>
  section {
    padding: var(--inset) calc(2 * var(--inset));
    border-radius: var(--radius-section);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.7);
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-body);
    font-size: var(--font-size-body);
    color: var(--text-color-light);
    margin: var(--inset) 0;
  }
</style>

<section style="background-color: var(--background-section-{level}">
  <slot />
</section>
