<script>
  import Subheading from "./Subheading.svelte";

  export let title;
</script>

<style>
  header {
    margin: var(--inset);
    text-align: center;
  }
</style>

<header>
  <Subheading {title} />
</header>
