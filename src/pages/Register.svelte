<script>
  import Button from "@smui/button";
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";
  import { Link, navigate } from "svelte-routing";
  import * as consts from "../constants";

  import { get } from "svelte/store";
  import regStore from "../stores/registration";

  export let userType = "";

  let accepted = false;

  $: regStore.update(r => {
    return { ...r, userType };
  });

  $: typText = consts.REGTYPE_MAP[userType];
</script>

<style>
  .container {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  pre {
    text-align: justify;
    white-space: pre-line;
  }
</style>

<div class="container">
  <h2>
    Du willst dich also als
    <i>{typText}</i>
    registrieren?
  </h2>
  <pre>
    Id adipisicing velit sunt occaecat fugiat esse aliquip ullamco. Enim fugiat
    ullamco dolore minim ullamco anim reprehenderit mollit laboris reprehenderit
    sit nostrud proident. Aliqua do duis eiusmod excepteur. Sit laborum dolore
    reprehenderit officia commodo fugiat laborum dolor veniam anim amet irure
    duis. Ex aliquip tempor in cupidatat non sunt veniam nisi consectetur enim
    nisi Lorem Lorem. Reprehenderit reprehenderit adipisicing veniam duis
    eiusmod aliquip in reprehenderit deserunt laborum ut ad quis ea. Veniam
    veniam ullamco ullamco veniam. Labore ea aute cillum veniam. Sunt excepteur
    dolor officia incididunt. Ipsum ut mollit culpa anim sunt consequat cillum
    mollit nulla exercitation nostrud deserunt tempor. Incididunt minim ullamco
    laboris id elit eiusmod incididunt aute ex proident velit consectetur.
    Incididunt Lorem est quis elit aute dolor nulla. Pariatur duis exercitation
    do voluptate mollit veniam. Aliqua incididunt ullamco eu aliquip laboris. Ea
    sit nulla esse consequat consectetur pariatur aliquip voluptate mollit
    nulla. Sint reprehenderit aliquip ullamco nostrud adipisicing reprehenderit
    eu non nisi laborum cillum nulla et. Eiusmod dolor aliqua minim nisi irure
    elit aute ad eiusmod laboris officia ut reprehenderit.
  </pre>
  <FormField class="checkbox">
    <Checkbox bind:checked={accepted} />
    <span slot="label">Akzeptieren</span>
  </FormField>
  {#if accepted}
    <Button>
      <Link to={consts.PAGE_LEGAL}>Super! Dann geht es hier weiter</Link>
    </Button>
  {/if}
</div>
