<script>
  import Button from "@smui/button";
  import { navigate } from "svelte-routing";
  import * as consts from "../constants";
  import userStore from "../stores/user";

  function next(type) {
    userStore.set({ name: "Peter", userType: type });
    navigate(consts.PAGE_DASHBOARD);
  }
</script>

<h2>Login</h2>

<div>
  <Button
    on:click={() => {
      next(consts.TAG_SENIOR);
    }}>
    Weiter als Senior
  </Button>
</div>
<div>
  <Button
    on:click={() => {
      next(consts.TAG_HELPER);
    }}>
    Weiter als Freiwilliger
  </Button>
</div>
