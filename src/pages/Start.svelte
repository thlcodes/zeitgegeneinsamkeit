<script>
  import { Link } from "svelte-routing";
  import Button from "../components/Button.svelte";
  import Section from "../components/Section.svelte";
  import Heading from "../components/Heading.svelte";
  import Subheading from "../components/Subheading.svelte";
  import Subsubheading from "../components/Subsubheading.svelte";
  import Line from "../components/Line.svelte";
  import * as consts from "../constants";
</script>

<style>
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

  .actions .label {
    flex: 1;
    display: inline-block;
  }
</style>

<Heading inset={1} title="Registrieren" />

<Section>
  <div class="container">
    <Subheading title={consts.TEXT_SENIOR} />
    <div class="text">
      Id ea et eiusmod incididunt officia nulla sint excepteur est velit mollit
      consectetur aliquip. Sit ad ea nisi ex duis nulla qui mollit incididunt
      ullamco amet.
    </div>
    <Line />
    <div class="actions">
      <div class="label">
        <Subsubheading title="Sind Sie ein/e {consts.TEXT_SENIOR}?" />
      </div>
      <Button goto="{consts.PAGE_REGISTER}/{consts.TAG_SENIOR}">
        registrieren
      </Button>
    </div>
    <Line />
    <div class="actions">
      <div class="label">
        <Subsubheading title="Sind Sie ein/e {consts.TEXT_SENIOR}?" />
      </div>
      <Button disabled goto="{consts.PAGE_REGISTER}/{consts.TAG_FRIEND}">
        registrieren
      </Button>
    </div>
  </div>
</Section>

<Section level="2">
  <div class="container">
    <Subsubheading title={consts.TEXT_HELPER} />
    <div class="text">
      Id ea et eiusmod incididunt officia nulla sint excepteur est velit mollit
      consectetur aliquip. Sit ad ea nisi ex duis nulla qui mollit incididunt
      ullamco amet.
    </div>
    <div class="actions">
      <Button goto="{consts.PAGE_REGISTER}/{consts.TAG_HELPER}">
        registrieren
      </Button>
    </div>
  </div>
</Section>

<Section level="3">
  <div class="container">
    <Subsubheading title="Log in" />
    <Button disabled goto="{consts.PAGE_LOGIN}/{consts.TAG_SENIOR}">
      Als {consts.TEXT_SENIOR}
    </Button>
    <Button disabled goto="{consts.PAGE_LOGIN}/{consts.TAG_HELPER}">
      Als {consts.TEXT_HELPER}
    </Button>
  </div>
</Section>
