<script>
  import { onMount } from "svelte";
  import regStore from "../stores/registration";
  import { navigate } from "svelte-routing";
  import { Link } from "svelte-routing";

  import * as consts from "../constants";

  import Heading from "../components/Heading.svelte";
  import Subheading from "../components/Subheading.svelte";
  import Section from "../components/Section.svelte";
  import Button from "../components/Button.svelte";

  let userType;
  regStore.subscribe(r => {
    userType = r.userType;
  });

  let accepted = false;

  onMount(() => {
    userType === "" && navigate("/", { replace: true });
  });
</script>

<style>
  :global(.actions button) {
    margin-left: var(--inset);
  }
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .actions {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
  }

  .scrollpane {
    margin: var(--inset) 0;
    border-radius: calc(var(--radius-section) / 2);
    background-color: rgba(255, 255, 255, 0.1);
    height: 30em;
    overflow-y: scroll;
    padding: var(--inset);
  }
</style>

<Heading inset={1} title="Unsere AGB" />

<Section>
  <div class="container">
    <div class="scrollpane">
      Adipisicing reprehenderit amet commodo sint incididunt consequat elit
      nostrud. Anim quis mollit Lorem commodo exercitation exercitation enim
      sunt. Velit cillum consequat adipisicing consectetur excepteur aute aute
      excepteur sit. Minim officia mollit pariatur aute non. Ut irure laboris id
      veniam do deserunt sit laboris esse quis occaecat. Est tempor eiusmod
      adipisicing aliqua anim pariatur adipisicing et adipisicing occaecat in et
      eiusmod reprehenderit. Proident in exercitation anim aliquip duis aliqua
      pariatur ad veniam velit. Dolor anim nostrud eu consequat velit. Eiusmod
      magna aliquip voluptate nulla aliqua laborum officia ullamco anim proident
      commodo. Culpa nisi Lorem amet reprehenderit voluptate cillum minim anim.
      Amet ut anim sunt mollit magna duis veniam cupidatat pariatur cupidatat ad
      irure qui nisi. Sunt fugiat culpa aute anim cupidatat fugiat cupidatat
      dolore deserunt ullamco nostrud minim mollit. Ex aute veniam exercitation
      amet nisi nulla ullamco fugiat sit. Laboris incididunt reprehenderit culpa
      ut sit veniam velit exercitation est. Reprehenderit culpa dolor consequat
      nulla do. Ullamco deserunt do exercitation deserunt dolor magna ex
      reprehenderit laborum duis esse quis. Velit nostrud sunt fugiat
      adipisicing ut consectetur. Dolore ea ipsum officia sunt. Culpa dolore
      quis esse sunt ad. Velit eu ipsum dolore tempor duis ipsum irure sunt ex
      proident. Minim ex ullamco sunt ullamco proident sunt velit esse nulla.
      Excepteur ut sint laboris consectetur ipsum aliquip. Do pariatur Lorem ea
      ad dolore anim qui proident mollit dolor et culpa proident. Sunt
      adipisicing fugiat et ipsum et tempor ullamco culpa. Consequat duis esse
      voluptate deserunt ea incididunt exercitation Lorem velit amet do laborum
      nostrud nulla.
    </div>
    <div class="actions">
      <Button goback secondary>zurück</Button>
      <Button goto={consts.PAGE_CREATEPROFILE}>weiter</Button>
    </div>
  </div>

</Section>
