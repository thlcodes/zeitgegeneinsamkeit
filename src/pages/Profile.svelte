<script>
  import Button from "@smui/button";
  import { Link } from "svelte-routing";
  import * as consts from "../constants";
  import { registration } from "../stores";

  const STEP_PERSONAL = "personal";
  const STEP_NEEDS = "needs";
  const STEP_AVAILIBILITY = "availbility";
  const STEP_INTERESTS = "interests";
  const STEP_FINAL = "final";

  let typ;
  registration.subscribe(r => {
    console.log(r);
    typ = r.typ;
  });
  $: flow =
    typ != consts.TAG_REGTYPE_HELPER
      ? [STEP_PERSONAL, STEP_NEEDS, STEP_INTERESTS, STEP_FINAL]
      : [STEP_PERSONAL, STEP_AVAILIBILITY, STEP_INTERESTS, STEP_FINAL];
  $: console.log(flow);

  let step = 0;
</script>

<h2>Profil</h2>

{#if flow[step] === STEP_PERSONAL}
  <h3>Persönliche Daten</h3>
{:else if flow[step] === STEP_NEEDS}
  <h3>Bedürfnisse</h3>
{:else if flow[step] === STEP_INTERESTS}
  <h3>Interessen</h3>
{:else if flow[step] === STEP_AVAILIBILITY}
  <h3>Verfügbarkeit</h3>
{:else if flow[step] === STEP_INTERESTS}
  <h3>Interessen</h3>
{:else}
  <h3>Übersicht</h3>
{/if}
{#if flow[step] == STEP_FINAL}
  <Button>
    <Link to={consts.PAGE_TUTORIAL}>Weiter</Link>
  </Button>
{:else}
  <Button on:click={() => step++}>Weiter</Button>
{/if}
