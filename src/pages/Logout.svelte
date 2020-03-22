<script>
  import { onMount } from "svelte";
  import * as consts from "../constants";
  import userStore from "../stores/user";
  import { navigate } from "svelte-routing";

  onMount(() => {
    userStore.set(null);
    navigate(consts.PAGE_DASHBOARD);
  });
</script>
