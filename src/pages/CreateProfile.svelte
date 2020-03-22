<script>
  import { Link, navigate } from "svelte-routing";
  import * as consts from "../constants";
  import regStore from "../stores/registration";
  import userStore from "../stores/user";
  import { createUser } from "../api/user";

  import Heading from "../components/Heading.svelte";
  import Subheading from "../components/Subheading.svelte";
  import Subsubheading from "../components/Subsubheading.svelte";
  import Section from "../components/Section.svelte";
  import Button from "../components/Button.svelte";
  import Input from "../components/Input.svelte";

  const STEP_PERSONAL = "personal";
  const STEP_NEEDS = "needs";
  const STEP_AVAILIBILITY = "availbility";
  const STEP_INTERESTS = "interests";
  const STEP_FINAL = "final";

  const TITLES = {
    [STEP_PERSONAL]: "Persönliche Daten",
    [STEP_NEEDS]: "Deine Bedürfnisse",
    [STEP_AVAILIBILITY]: "Deine Verfügbarkeit",
    [STEP_INTERESTS]: "Deine Interessen",
    [STEP_FINAL]: "Dein Profil"
  };

  let user = {
    id: "",
    name: "",
    userType: "",
    birthday: "",
    sex: "",
    email: "",
    needs: {
      callDuration: 0,
      callSex: 0
    },
    interests: []
  };
  regStore.subscribe(r => {
    user = { ...user, userType: r.userType };
  });
  $: flow =
    user.userType != consts.TAG_HELPER
      ? [STEP_PERSONAL, STEP_NEEDS, STEP_INTERESTS, STEP_FINAL]
      : [STEP_PERSONAL, /*STEP_AVAILIBILITY,*/ STEP_INTERESTS, STEP_FINAL];

  $: title = TITLES[flow[step]];

  const emailValidator = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  $: validators = {
    [STEP_PERSONAL]:
      user.name &&
      user.sex != "invalid" &&
      user.birthday &&
      (!(user.userType === consts.TAG_HELPER || user.email !== "") ||
        (user.email !== "" && emailValidator.test(user.email))),
    [STEP_NEEDS]: user.needs.callDuration > 0,
    [STEP_INTERESTS]: user.interests.length > 0
  };

  $: window.user = user;

  $: validated = validators[flow[step]];

  let step = 3;

  function toggleInterest(interest) {
    const i = user.interests.indexOf(interest);
    if (i > -1) {
      user.interests.splice(i, 1);
      user.interests = [...user.interests];
    } else {
      user.interests = [...user.interests, interest];
    }
  }

  const finalize = async () => {
    try {
      let { id, userType, ...input } = user;
      //id = await createUser(input);
      id = 1;
      if (!id) throw "got invalid response from createUser";
      user.id = id;
      userStore.set(user);
      navigate(consts.PAGE_TUTORIAL);
    } catch (err) {
      alert(err);
    }
  };
</script>

<style>
  :global(.inputs > input[type], .inputs > button, .inputs > select) {
    width: 100%;
    margin-bottom: 1em;
  }

  :global(.buttons > button) {
    margin-bottom: 1em;
  }

  :global(.pills > button) {
    margin-bottom: 1em;
    padding-left: 1em;
    padding-right: 1em;
    margin-left: var(--inset);
    min-width: 1em;
    flex-grow: 1;
  }

  .picture-input {
    display: flex;
    flex-direction: row;
    margin-bottom: calc(2 * var(--inset));
    margin-top: var(--inset);
  }

  label {
    margin: var(--inset);
    margin-bottom: calc(2 * var(--inset));
  }

  label.spacy {
    margin-top: calc(3 * var(--inset));
  }

  .picture {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 10em;
    height: 10em;
    border-radius: 10em;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .buttons {
    justify-content: center;
    padding-left: 3em;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .pills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
  }

  .profile-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wip {
    padding-bottom: 1em;
  }
</style>

<Heading inset={1} {title} />

<Section>
  <form
    autocomplete="on"
    on:submit|preventDefault={() => false}
    on:invalid={() => console.log('invalid')}>
    {#if flow[step] === STEP_PERSONAL}
      <div class="picture-input">
        <div class="picture">
          <Subsubheading title="Foto" />
        </div>
        <div class="buttons">
          <Button>aufnehmen</Button>
          <Button>hochladen</Button>
        </div>
      </div>
      <div class="inputs">
        <Input
          name="name"
          required
          autocomplete="name"
          placeholder="Name*"
          bind:value={user.name} />
        <Input
          name="sex"
          required
          autocomplete="sex"
          type="select"
          items={{ invalid: 'Geschlecht*', Female: 'Weiblich', Male: 'Männlich', Divers: 'Divers' }}
          bind:value={user.sex} />
        <Input
          name="birthday"
          required
          autocomplete="bday"
          type="date"
          placeholder="Geburtstag*"
          bind:value={user.birthday} />
        <Input
          name="email"
          required={user.userType === consts.TAG_HELPER}
          autocomplete="email"
          type="email"
          placeholder="Email-Adresse{user.userType === consts.TAG_HELPER ? '*' : ''}"
          bind:value={user.email} />
      </div>
    {:else if flow[step] === STEP_NEEDS}
      <label>Wie stellst du die deine Gespräche vor?</label>
      <div class="inputs">
        <Button
          active={user.needs.callDuration == 1}
          on:click={() => {
            user.needs.callDuration = 1;
          }}>
          weniger als 15 Minuten
        </Button>
        <Button
          active={user.needs.callDuration == 2}
          on:click={() => {
            user.needs.callDuration = 2;
          }}>
          15 bis 30 Minuten
        </Button>
        <Button
          active={user.needs.callDuration == 3}
          on:click={() => {
            user.needs.callDuration = 3;
          }}>
          mehr als 30 Minuten
        </Button>
      </div>
      <label class="spacy">Geschlecht deiner Gesprächspartner?</label>
      <div class="pills fixed">
        <Button
          active={user.needs.callSex == 0}
          on:click={() => {
            user.needs.callSex = 0;
          }}>
          egal
        </Button>
        <Button
          active={(user.needs.callSex & 1) == 1}
          on:click={() => {
            user.needs.callSex ^= 1;
          }}>
          männlich
        </Button>
        <Button
          active={(user.needs.callSex & 2) > 1}
          on:click={() => {
            user.needs.callSex ^= 2;
          }}>
          weiblich
        </Button>
        <Button
          active={(user.needs.callSex & 4) > 1}
          on:click={() => {
            user.needs.callSex ^= 4;
          }}>
          divers
        </Button>
      </div>
    {:else if flow[step] === STEP_INTERESTS}
      <label>Bitte zwischen 1 und 5 Interessen auswählen?</label>
      <div class="pills">
        {#each consts.TEXTS_INTERESTS as item}
          <Button
            disabled={user.interests.length >= 5 && !(user.interests.indexOf(item) > -1)}
            active={user.interests.indexOf(item) > -1}
            on:click={() => {
              toggleInterest(item);
            }}>
            {item}
          </Button>
        {/each}
      </div>
    {:else}
      <div class="profile-preview">
        <div class="picture">
          <Subsubheading title="Foto" />
        </div>
        <Subsubheading title={user.name} />
      </div>
    {/if}
    <div class="actions">
      <Button goback={step == 0} on:click={() => step > 0 && step--} secondary>
        zurück
      </Button>
      {#if flow[step] == STEP_FINAL}
        <Button disabled on:click={finalize}>bestätigen</Button>
      {:else}
        <Button disabled={!validated} on:click={() => step++}>weiter</Button>
      {/if}
    </div>
  </form>
</Section>
{#if flow[step] == STEP_FINAL}
  <Section level={2}>
    <Subheading title="Schade" />
    <div class="wip">
      Hier ist leider erst einmal Schluss.
      <br />
      <br />
      Mit etwas Glück bekommen wir die Möglichkeit, über #WirVsVirus wieter zu
      machen, damit und euch diese App tatsächlich bieten können.
      <br />
      <br />
      Drückt uns die Daumen!
    </div>
  </Section>
{/if}
