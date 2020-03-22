<script>
  import { Link, navigate } from "svelte-routing";
  import * as consts from "../constants";

  import Heading from "../components/Heading.svelte";
  import Subheading from "../components/Subheading.svelte";
  import Section from "../components/Section.svelte";
  import Button from "../components/Button.svelte";

  import { get } from "svelte/store";
  import regStore from "../stores/registration";

  export let userType = "";

  $: regStore.update(r => {
    return { ...r, userType };
  });
</script>

<style>
  :global(.actions button) {
    margin-left: var(--inset);
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .text {
    margin-bottom: var(--inset);
  }
  .actions {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
  }
</style>

<Heading inset={1} title="Willkommen bei {consts.APP_NAME}!" />

<Section>
  <div class="container">
    <Subheading title={consts.TEXTMAP_USERTYPE[userType] || ''} />
    {#if userType == consts.TAG_HELPER}
      <div class="text">
        Erstmal schön, dass du dich als Freiwilliger meldest! Danke!
        <br />
        Bitte beachte, dass du dich als Freiwilliger an folgende Pubnkte halten
        solltest:
        <ul>
          <li>Nett sein!</li>
          <li>Verständnis zeigen!</li>
          <li>Bei Bedarf laut und langsam reden</li>
        </ul>
      </div>
    {:else}
      <div class="text">
        Um dir zu helfen, einen neuen Gesprächspartner zu finden, benötigen wir
        ein paar Angaben von dir.
      </div>
    {/if}
    <div class="actions">
      <Button goback secondary>zurück</Button>
      <Button goto={consts.PAGE_LEGAL}>weiter</Button>
    </div>
  </div>
</Section>
