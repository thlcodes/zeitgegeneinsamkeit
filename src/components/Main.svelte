<style>
  main {
    background-color: var(--background-main);
    border-top-left-radius: var(--radius-main);
    border-top-right-radius: var(--radius-main);
    flex: 1;
    padding: var(--inset) calc(2 * var(--inset));
    display: flex;
    flex-direction: column;
  }
</style>

<main>
  <slot />
</main>
