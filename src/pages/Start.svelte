<script>
  import { Link } from "svelte-routing";
  import Button from "@smui/button";
  import * as consts from "../constants";
</script>

<style>
  :root {
    text-align: center;
  }
  h1 {
    text-align: center;
  }

  .buttons {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
  }

  .login {
    margin-top: 3em;
  }
</style>

<h1>Start</h1>

<pre>
  Mollit mollit laborum cillum culpa. Mollit deserunt voluptate laboris ea
  mollit ad veniam incididunt dolor occaecat minim. Officia aliqua nisi amet
  nostrud consectetur tempor et nostrud dolore enim et. Aute nulla sit cillum
  proident. Reprehenderit elit qui excepteur tempor cillum qui esse adipisicing
  adipisicing esse eu eiusmod nulla et.
</pre>

<div class="buttons">
  {#each Object.keys(consts.REGTYPE_MAP) as tag}
    <Button>
      <Link to="{consts.PAGE_REGISTER}/{tag}">
        Registrieren als
        <b>{consts.REGTYPE_MAP[tag]}</b>
      </Link>
    </Button>
  {/each}
</div>

<div class="login">
  Oder bist du bereits registriert? Dann auf zum
  <Button>
    <Link to={consts.PAGE_LOGIN}>Login</Link>
  </Button>
</div>
