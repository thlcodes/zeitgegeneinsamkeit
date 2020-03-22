<script>
  import Button from "@smui/button";
  import { Link, navigate } from "svelte-routing";
  import * as consts from "../constants";
  import regStore from "../stores/registration";
  import userStore from "../stores/user";
  import { createUser } from "../api/user";

  const STEP_PERSONAL = "personal";
  const STEP_NEEDS = "needs";
  const STEP_AVAILIBILITY = "availbility";
  const STEP_INTERESTS = "interests";
  const STEP_FINAL = "final";

  let user = {
    id: "",
    name: "",
    userType: "",
    birthday: new Date().toISOString().split("T")[0],
    sex: "Female"
  };
  regStore.subscribe(r => {
    user = { ...user, userType: r.userType };
  });
  $: flow =
    user.user != consts.TAG_REGTYPE_HELPER
      ? [STEP_PERSONAL, STEP_NEEDS, STEP_INTERESTS, STEP_FINAL]
      : [STEP_PERSONAL, STEP_AVAILIBILITY, STEP_INTERESTS, STEP_FINAL];

  let step = 0;

  const finalize = async () => {
    try {
      let { id, userType, ...input } = user;
      id = await createUser(input);
      if (!id) throw "got invalid response from createUser";
      user.id = id;
      userStore.set(user);
      navigate(consts.PAGE_TUTORIAL);
    } catch (err) {
      alert(err);
    }
  };
</script>

<h2>Profil</h2>

{#if flow[step] === STEP_PERSONAL}
  <h3>Persönliche Daten</h3>
  <div>
    <label for="id">Name:</label>
    <input id="name" type="text" bind:value={user.name} />
  </div>
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
  <Button on:click={finalize}>Weiter</Button>
{:else}
  <Button on:click={() => step++}>Weiter</Button>
{/if}
